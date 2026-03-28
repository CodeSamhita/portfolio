/**
 * admin-gallery.js
 * Gallery Studio — standalone CRUD manager for image/gallery.json
 * Deleted items are archived to image/gallery-history.json
 */
(function () {
  "use strict";

  const GALLERY_URL = "image/gallery.json";
  const HISTORY_URL = "image/gallery-history.json";
  const THEME_KEY = "portfolio-v5-theme";

  // ── State ──
  let collections = [];
  let history = [];
  let editingIndex = -1; // -1 = new, 0+ = editing that index

  // ── DOM refs ──
  const $ = (id) => document.getElementById(id);
  const collectionList = $("gs-collection-list");
  const historyList = $("gs-history-list");
  const overviewStats = $("gs-overview-stats");
  const status = $("gs-status");
  const themeToggleBtn = $("themeToggleBtn");
  const backToTopBtn = $("backToTopBtn");
  const progressBar = $("progressBar");
  const editorBackdrop = $("gs-editor-backdrop");
  const editorTitle = $("gs-editor-title");
  const editorForm = $("gs-editor-form");
  const editorPreview = $("gs-ed-preview");

  // Editor fields
  const edTitle = $("gs-ed-title");
  const edDescription = $("gs-ed-description");
  const edFolder = $("gs-ed-folder");
  const edTags = $("gs-ed-tags");
  const edTechnologies = $("gs-ed-technologies");
  const edNotes = $("gs-ed-notes");
  const edImages = $("gs-ed-images");

  // ── Helpers ──
  const escHtml = (s) =>
    String(s || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const slugify = (v) => {
    const s = String(v || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
    return s || "untitled-collection";
  };

  const createId = () => `gallery-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  const splitLines = (v) =>
    String(v || "")
      .split("\n")
      .map((l) => l.trim())
      .filter(Boolean);

  const splitComma = (v) =>
    String(v || "")
      .split(",")
      .map((l) => l.trim())
      .filter(Boolean);

  const toArray = (v) => (Array.isArray(v) ? v : []);

  const flash = (msg, duration = 3000) => {
    if (!status) return;
    status.textContent = msg;
    clearTimeout(flash._t);
    flash._t = setTimeout(() => { status.textContent = ""; }, duration);
  };

  const downloadJson = (data, filename) => {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(a.href);
  };

  // ── Fetch ──
  const fetchJson = async (url) => {
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Could not load", url, e);
    }
    return [];
  };

  const loadAll = async () => {
    const [rawGallery, rawHistory] = await Promise.all([
      fetchJson(GALLERY_URL),
      fetchJson(HISTORY_URL),
    ]);
    collections = toArray(rawGallery).map(normalize);
    history = toArray(rawHistory).map(normalize);
  };

  const normalize = (item) => ({
    id: String(item.id || createId()),
    title: String(item.title || "Untitled Collection"),
    description: String(item.description || ""),
    folder: String(item.folder || "").replace(/\\/g, "/").replace(/\/+$/, ""),
    technologies: toArray(item.technologies).map((t) => String(t).trim()).filter(Boolean),
    tags: toArray(item.tags).map((t) => String(t).trim()).filter(Boolean),
    notes: toArray(item.notes).map((t) => String(t).trim()).filter(Boolean),
    images: toArray(item.images).map((t) => String(t).trim()).filter(Boolean),
    deletedAt: item.deletedAt || undefined,
  });

  // ── Render ──
  const renderStats = () => {
    if (!overviewStats) return;
    const totalImages = collections.reduce((sum, c) => sum + c.images.length, 0);
    overviewStats.innerHTML = `
      <article class="gs-overview-card"><strong>${collections.length}</strong><span>active collections</span></article>
      <article class="gs-overview-card"><strong>${totalImages}</strong><span>total images</span></article>
      <article class="gs-overview-card"><strong>${history.length}</strong><span>in history</span></article>
      <article class="gs-overview-card"><strong>${collections.length + history.length}</strong><span>lifetime total</span></article>
    `;
  };

  const resolveThumb = (item) => {
    if (!item.images.length) return null;
    const img = item.images[0];
    if (/^(data:|https?:|blob:)/i.test(img) || img.includes("/")) return img;
    const folder = item.folder || `image/gallery/${slugify(item.title)}`;
    return `${folder}/${img}`;
  };

  const buildCard = (item, index, isHistory) => {
    const thumb = resolveThumb(item);
    const thumbHtml = thumb
      ? `<img class="gs-card-thumb" src="${escHtml(thumb)}" alt="${escHtml(item.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'" /><div class="gs-card-thumb-placeholder" style="display:none"><i class="fas fa-image"></i></div>`
      : `<div class="gs-card-thumb-placeholder"><i class="fas fa-image"></i></div>`;

    const badges = [
      ...item.tags.map((t) => `<span class="gs-card-badge">${escHtml(t)}</span>`),
    ].join("");

    const deletedLine = isHistory && item.deletedAt
      ? `<p class="gs-deleted-at"><i class="fas fa-clock"></i> Deleted ${escHtml(item.deletedAt)}</p>`
      : "";

    const actions = isHistory
      ? `<button type="button" class="gs-btn-restore" data-action="restore" data-index="${index}"><i class="fas fa-rotate-left"></i> Restore</button>
         <button type="button" class="gs-btn-danger" data-action="purge" data-index="${index}"><i class="fas fa-trash"></i> Purge</button>`
      : `<button type="button" data-action="edit" data-index="${index}"><i class="fas fa-pen"></i> Edit</button>
         <button type="button" class="gs-btn-danger" data-action="delete" data-index="${index}"><i class="fas fa-trash-alt"></i> Delete</button>`;

    return `
      <div class="gs-card">
        ${thumbHtml}
        <div class="gs-card-info">
          <h3>${escHtml(item.title)}</h3>
          <p>${escHtml(item.description).substring(0, 120)}${item.description.length > 120 ? "…" : ""}</p>
          <code>${escHtml(item.folder)}</code>
          ${badges ? `<div class="gs-card-meta">${badges}</div>` : ""}
          <p style="margin:0.3rem 0 0;color:var(--text-muted);font-size:0.8rem">${item.images.length} image${item.images.length !== 1 ? "s" : ""}</p>
          ${deletedLine}
        </div>
        <div class="gs-card-actions">${actions}</div>
      </div>`;
  };

  const renderCollections = () => {
    if (!collectionList) return;
    if (!collections.length) {
      collectionList.innerHTML = `<div class="gs-empty"><i class="fas fa-images"></i><h3>No collections yet</h3><p>Click "New Collection" to add your first gallery entry.</p></div>`;
      return;
    }
    collectionList.innerHTML = collections.map((c, i) => buildCard(c, i, false)).join("");
  };

  const renderHistory = () => {
    if (!historyList) return;
    if (!history.length) {
      historyList.innerHTML = `<div class="gs-empty"><i class="fas fa-clock-rotate-left"></i><h3>History is empty</h3><p>Deleted collections will appear here for recovery.</p></div>`;
      return;
    }
    historyList.innerHTML = history.map((c, i) => buildCard(c, i, true)).join("");
  };

  const renderAll = () => {
    renderStats();
    renderCollections();
    renderHistory();
  };

  // ── Editor ──
  const openEditor = (index) => {
    editingIndex = index;
    if (index >= 0) {
      const c = collections[index];
      editorTitle.textContent = "Edit Collection";
      edTitle.value = c.title;
      edDescription.value = c.description;
      edFolder.value = c.folder;
      edTags.value = c.tags.join(", ");
      edTechnologies.value = c.technologies.join(", ");
      edNotes.value = c.notes.join("\n");
      edImages.value = c.images.join("\n");
    } else {
      editorTitle.textContent = "New Collection";
      edTitle.value = "";
      edDescription.value = "";
      edFolder.value = "";
      edTags.value = "";
      edTechnologies.value = "";
      edNotes.value = "";
      edImages.value = "";
    }
    updatePreview();
    editorBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    edTitle.focus();
  };

  const closeEditor = () => {
    editorBackdrop.classList.remove("open");
    document.body.style.overflow = "";
    editingIndex = -1;
  };

  const updatePreview = () => {
    const folder = edFolder.value.trim() || `image/gallery/${slugify(edTitle.value)}`;
    const images = splitLines(edImages.value);
    editorPreview.innerHTML = images
      .slice(0, 12)
      .map((img) => {
        const src = img.includes("/") ? img : `${folder}/${img}`;
        return `<img class="gs-editor-preview-img" src="${escHtml(src)}" alt="${escHtml(img)}" loading="lazy" onerror="this.style.opacity='0.2'" />`;
      })
      .join("");
    if (images.length > 12) {
      editorPreview.innerHTML += `<div style="display:grid;place-items:center;color:var(--text-muted);font-size:0.85rem">+${images.length - 12} more</div>`;
    }
  };

  const saveEditor = () => {
    const title = edTitle.value.trim();
    if (!title) { edTitle.focus(); return; }

    const folder = edFolder.value.trim() || `image/gallery/${slugify(title)}`;
    const entry = normalize({
      id: editingIndex >= 0 ? collections[editingIndex].id : createId(),
      title,
      description: edDescription.value.trim(),
      folder,
      tags: splitComma(edTags.value),
      technologies: splitComma(edTechnologies.value),
      notes: splitLines(edNotes.value),
      images: splitLines(edImages.value),
    });

    if (editingIndex >= 0) {
      collections[editingIndex] = entry;
      flash("✓ Collection updated — download gallery.json to apply");
    } else {
      collections.push(entry);
      flash("✓ Collection added — download gallery.json to apply");
    }

    renderAll();
    closeEditor();
  };

  // ── Actions ──
  const deleteCollection = (index) => {
    const item = collections[index];
    if (!item) return;
    if (!confirm(`Delete "${item.title}"? It will move to history.`)) return;

    item.deletedAt = new Date().toLocaleString();
    history.unshift(item);
    collections.splice(index, 1);
    renderAll();
    flash("✓ Moved to history — download both JSONs to apply");
  };

  const restoreFromHistory = (index) => {
    const item = history[index];
    if (!item) return;
    delete item.deletedAt;
    collections.push(item);
    history.splice(index, 1);
    renderAll();
    flash("✓ Restored — download both JSONs to apply");
  };

  const purgeFromHistory = (index) => {
    const item = history[index];
    if (!item) return;
    if (!confirm(`Permanently remove "${item.title}" from history?`)) return;
    history.splice(index, 1);
    renderAll();
    flash("✓ Purged — download gallery-history.json to apply");
  };

  const purgeAll = () => {
    if (!history.length) return;
    if (!confirm(`Permanently remove all ${history.length} item(s) from history?`)) return;
    history = [];
    renderAll();
    flash("✓ History cleared — download gallery-history.json to apply");
  };

  // ── Auto-slug from title ──
  const handleTitleInput = () => {
    // Only auto-generate folder if user hasn't manually typed one during this session
    if (editingIndex < 0 || !edFolder.dataset.manual) {
      edFolder.value = `image/gallery/${slugify(edTitle.value)}`;
    }
    updatePreview();
  };

  // ── Events ──
  const initEvents = () => {
    // Tabs
    document.querySelectorAll("[data-gs-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".gs-tab-btn").forEach((b) => b.classList.remove("active"));
        document.querySelectorAll(".gs-tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        const panel = document.getElementById(btn.dataset.gsTab);
        if (panel) panel.classList.add("active");
      });
    });

    // New collection buttons
    $("gs-new-collection-btn")?.addEventListener("click", () => openEditor(-1));
    $("gs-new-collection-btn-2")?.addEventListener("click", () => openEditor(-1));

    // Editor
    $("gs-editor-close")?.addEventListener("click", closeEditor);
    $("gs-editor-cancel")?.addEventListener("click", closeEditor);
    editorBackdrop?.addEventListener("click", (e) => { if (e.target === editorBackdrop) closeEditor(); });

    editorForm?.addEventListener("submit", (e) => { e.preventDefault(); saveEditor(); });
    edTitle?.addEventListener("input", handleTitleInput);
    edFolder?.addEventListener("input", () => { edFolder.dataset.manual = "1"; updatePreview(); });
    edImages?.addEventListener("input", updatePreview);

    // Collection list actions
    collectionList?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const idx = Number(btn.dataset.index);
      if (btn.dataset.action === "edit") openEditor(idx);
      if (btn.dataset.action === "delete") deleteCollection(idx);
    });

    // History list actions
    historyList?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const idx = Number(btn.dataset.index);
      if (btn.dataset.action === "restore") restoreFromHistory(idx);
      if (btn.dataset.action === "purge") purgeFromHistory(idx);
    });

    // Purge all
    $("gs-purge-all-btn")?.addEventListener("click", purgeAll);

    // Save / Export
    const exportGallery = () => {
      const clean = collections.map(({ deletedAt, ...rest }) => rest);
      downloadJson(clean, "gallery.json");
      flash("✓ gallery.json downloaded — replace image/gallery.json with it");
    };
    $("gs-save-gallery-btn")?.addEventListener("click", exportGallery);
    $("gs-export-btn")?.addEventListener("click", exportGallery);

    $("gs-save-history-btn")?.addEventListener("click", () => {
      downloadJson(history, "gallery-history.json");
      flash("✓ gallery-history.json downloaded — replace image/gallery-history.json with it");
    });

    // Theme
    const applyTheme = (theme) => {
      const isLight = theme === "light";
      document.body.classList.toggle("light-mode", isLight);
      const icon = themeToggleBtn?.querySelector("i");
      if (icon) icon.className = isLight ? "fas fa-moon" : "fas fa-sun";
      themeToggleBtn?.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    };
    const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
    applyTheme(savedTheme);
    themeToggleBtn?.addEventListener("click", () => {
      const next = document.body.classList.contains("light-mode") ? "dark" : "light";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });

    // Scroll UI
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docH > 0 ? (scrollTop / docH) * 100 : 0;
      if (progressBar) progressBar.style.width = `${Math.min(progress, 100)}%`;
      backToTopBtn?.classList.toggle("visible", scrollTop > 420);
    };
    window.addEventListener("scroll", updateScroll, { passive: true });
    updateScroll();

    backToTopBtn?.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    // Keyboard
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && editorBackdrop?.classList.contains("open")) closeEditor();
    });
  };

  // ── Init ──
  document.addEventListener("DOMContentLoaded", async () => {
    await loadAll();
    renderAll();
    initEvents();

    // Hide loader
    const loader = $("global-loader");
    if (document.readyState === "complete") {
      loader?.classList.add("hidden");
    } else {
      window.addEventListener("load", () => loader?.classList.add("hidden"), { once: true });
    }
  });
})();
