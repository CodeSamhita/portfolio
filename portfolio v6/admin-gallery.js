/**
 * admin-gallery.js
 * Gallery Studio — user-friendly collection manager
 * All data loaded from image/gallery.json and image/gallery-history.json
 * No server needed — saves by downloading updated JSON files
 */
(function () {
  "use strict";

  const GALLERY_URL = "image/gallery.json";
  const HISTORY_URL = "image/gallery-history.json";
  const THEME_KEY = "portfolio-v5-theme";

  let collections = [];
  let history = [];
  let editingIndex = -1;
  let editorImages = [];

  // ── DOM ──
  const $ = (id) => document.getElementById(id);
  const collectionList = $("gs-collection-list");
  const historyList = $("gs-history-list");
  const statsEl = $("gs-stats");
  const statusEl = $("gs-status");
  const themeBtn = $("themeToggleBtn");
  const backToTopBtn = $("backToTopBtn");
  const progressBar = $("progressBar");
  const editorBackdrop = $("gs-editor-backdrop");
  const editorTitleEl = $("gs-editor-title");
  const editorForm = $("gs-editor-form");
  const imgGrid = $("gs-img-grid");
  const imgFileInput = $("gs-img-file-input");

  const edTitle = $("gs-ed-title");
  const edDescription = $("gs-ed-description");
  const edFolder = $("gs-ed-folder");
  const edTags = $("gs-ed-tags");
  const edTechnologies = $("gs-ed-technologies");
  const edNotes = $("gs-ed-notes");

  // ── Helpers ──
  const esc = (s) =>
    String(s || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

  const slugify = (v) =>
    String(v || "").toLowerCase().normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "") || "untitled";

  const makeId = () => `col-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
  const splitLines = (v) => String(v || "").split("\n").map((l) => l.trim()).filter(Boolean);
  const splitComma = (v) => String(v || "").split(",").map((l) => l.trim()).filter(Boolean);
  const toArr = (v) => (Array.isArray(v) ? v : []);

  const flash = (msg, ms = 4000) => {
    if (!statusEl) return;
    statusEl.textContent = msg;
    clearTimeout(flash._t);
    flash._t = setTimeout(() => { statusEl.textContent = ""; }, ms);
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

  // ── Data ──
  const fetchJson = async (url) => {
    try { const r = await fetch(url); if (r.ok) return await r.json(); } catch (e) {}
    return [];
  };

  const normalize = (item) => ({
    id: String(item.id || makeId()),
    title: String(item.title || "Untitled Collection"),
    description: String(item.description || ""),
    folder: String(item.folder || "").replace(/\\/g, "/").replace(/\/+$/, ""),
    technologies: toArr(item.technologies).map((t) => String(t).trim()).filter(Boolean),
    tags: toArr(item.tags).map((t) => String(t).trim()).filter(Boolean),
    notes: toArr(item.notes).map((t) => String(t).trim()).filter(Boolean),
    images: toArr(item.images).map((t) => String(t).trim()).filter(Boolean),
    deletedAt: item.deletedAt || undefined,
  });

  const loadAll = async () => {
    const [g, h] = await Promise.all([fetchJson(GALLERY_URL), fetchJson(HISTORY_URL)]);
    collections = toArr(g).map(normalize);
    history = toArr(h).map(normalize);
  };

  // ── Resolve image paths ──
  const resolveSrc = (folder, filename) => {
    const f = String(filename || "").trim();
    if (!f) return "";
    if (/^(data:|https?:|blob:)/i.test(f) || f.includes("/")) return f;
    return folder ? `${folder}/${f}` : f;
  };

  const coverSrc = (item) => resolveSrc(item.folder, item.images[0]);

  // ── Render stats ──
  const renderStats = () => {
    if (!statsEl) return;
    const totalImgs = collections.reduce((s, c) => s + c.images.length, 0);
    statsEl.innerHTML = `
      <article class="gs-overview-card"><strong>${collections.length}</strong><span>Active Collections</span></article>
      <article class="gs-overview-card"><strong>${totalImgs}</strong><span>Total Images</span></article>
      <article class="gs-overview-card"><strong>${history.length}</strong><span>In History</span></article>
      <article class="gs-overview-card"><strong>${collections.length + history.length}</strong><span>Lifetime Total</span></article>`;
  };

  // ── Render collection card ──
  const buildCard = (item, idx, isHistory) => {
    const cover = coverSrc(item);
    const coverHtml = cover
      ? `<img class="gs-card-cover" src="${esc(cover)}" alt="${esc(item.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='grid'" /><div class="gs-card-cover-placeholder" style="display:none"><i class="fas fa-image"></i></div>`
      : `<div class="gs-card-cover-placeholder"><i class="fas fa-image"></i></div>`;

    const badges = item.tags.map((t) => `<span class="gs-card-badge">${esc(t)}</span>`).join("");
    const delLine = isHistory && item.deletedAt
      ? `<p class="gs-deleted-at"><i class="fas fa-clock"></i> Deleted: ${esc(item.deletedAt)}</p>` : "";

    const actions = isHistory
      ? `<button type="button" class="gs-btn-restore" data-action="restore" data-idx="${idx}"><i class="fas fa-rotate-left"></i> Restore</button>
         <button type="button" class="gs-btn-danger" data-action="purge" data-idx="${idx}"><i class="fas fa-trash"></i> Purge</button>`
      : `<button type="button" data-action="edit" data-idx="${idx}"><i class="fas fa-pen"></i> Edit</button>
         <button type="button" class="gs-btn-danger" data-action="delete" data-idx="${idx}"><i class="fas fa-trash-alt"></i> Delete</button>`;

    return `<div class="gs-card">
      ${coverHtml}
      <div class="gs-card-info">
        <h3>${esc(item.title)}</h3>
        <p>${esc(item.description).substring(0, 140)}${item.description.length > 140 ? "…" : ""}</p>
        <code>${esc(item.folder)}</code>
        ${badges ? `<div class="gs-card-meta">${badges}</div>` : ""}
        <p style="margin:.3rem 0 0;color:var(--text-muted);font-size:.8rem"><i class="fas fa-images"></i> ${item.images.length} image${item.images.length !== 1 ? "s" : ""}</p>
        ${delLine}
      </div>
      <div class="gs-card-actions">${actions}</div>
    </div>`;
  };

  const renderCollections = () => {
    if (!collectionList) return;
    collectionList.innerHTML = collections.length
      ? collections.map((c, i) => buildCard(c, i, false)).join("")
      : `<div class="gs-empty"><i class="fas fa-images"></i><h3>No collections yet</h3><p>Click "New Collection" to create your first gallery entry.</p></div>`;
  };

  const renderHistory = () => {
    if (!historyList) return;
    historyList.innerHTML = history.length
      ? history.map((c, i) => buildCard(c, i, true)).join("")
      : `<div class="gs-empty"><i class="fas fa-clock-rotate-left"></i><h3>History is empty</h3><p>Deleted collections appear here so you can restore them later.</p></div>`;
  };

  const renderAll = () => { renderStats(); renderCollections(); renderHistory(); };

  // ── Image manager inside editor ──
  const renderImageGrid = () => {
    if (!imgGrid) return;
    const folder = edFolder.value.trim() || `image/gallery/${slugify(edTitle.value)}`;

    if (!editorImages.length) {
      imgGrid.innerHTML = `<div class="gs-img-empty"><i class="fas fa-photo-film" style="font-size:1.5rem;opacity:.4;margin-bottom:.5rem;display:block"></i>No images yet. Click <strong>Add Images</strong> to include filenames.</div>`;
      return;
    }

    imgGrid.innerHTML = editorImages.map((filename, i) => {
      const src = resolveSrc(folder, filename);
      const isCover = i === 0;
      return `<div class="gs-img-item ${isCover ? "is-cover" : ""}" data-img-idx="${i}" title="${esc(filename)}&#10;Click to set as cover">
        ${isCover ? '<span class="gs-img-item-badge">Cover</span>' : ""}
        <button type="button" class="gs-img-item-remove" data-remove-idx="${i}" title="Remove this image">&times;</button>
        <img src="${esc(src)}" alt="${esc(filename)}" loading="lazy" onerror="this.parentNode.innerHTML='<span class=gs-img-item-badge>${isCover ? "Cover" : ""}</span><button type=button class=gs-img-item-remove data-remove-idx=${i} title=Remove>&times;</button><div class=gs-img-item-broken><i class=\\'fas fa-image\\'></i><br>${esc(filename)}</div>'" />
      </div>`;
    }).join("");
  };

  // ── Editor open/close ──
  const openEditor = (idx) => {
    editingIndex = idx;
    if (idx >= 0) {
      const c = collections[idx];
      editorTitleEl.textContent = "Edit Collection";
      edTitle.value = c.title;
      edDescription.value = c.description;
      edFolder.value = c.folder;
      edTags.value = c.tags.join(", ");
      edTechnologies.value = c.technologies.join(", ");
      edNotes.value = c.notes.join("\n");
      editorImages = [...c.images];
    } else {
      editorTitleEl.textContent = "New Collection";
      edTitle.value = "";
      edDescription.value = "";
      edFolder.value = "";
      edTags.value = "";
      edTechnologies.value = "";
      edNotes.value = "";
      editorImages = [];
    }
    delete edFolder.dataset.manual;
    renderImageGrid();
    editorBackdrop.classList.add("open");
    document.body.style.overflow = "hidden";
    edTitle.focus();
  };

  const closeEditor = () => {
    editorBackdrop.classList.remove("open");
    document.body.style.overflow = "";
    editingIndex = -1;
    editorImages = [];
  };

  // ── Editor save ──
  const saveEditor = () => {
    const title = edTitle.value.trim();
    if (!title) { edTitle.focus(); return; }

    const folder = edFolder.value.trim() || `image/gallery/${slugify(title)}`;
    const entry = normalize({
      id: editingIndex >= 0 ? collections[editingIndex].id : makeId(),
      title,
      description: edDescription.value.trim(),
      folder,
      tags: splitComma(edTags.value),
      technologies: splitComma(edTechnologies.value),
      notes: splitLines(edNotes.value),
      images: [...editorImages],
    });

    if (editingIndex >= 0) {
      collections[editingIndex] = entry;
      flash("✓ Collection updated — click Save gallery.json to apply");
    } else {
      collections.push(entry);
      flash("✓ Collection added — click Save gallery.json to apply");
    }

    renderAll();
    closeEditor();
  };

  // ── Collection actions ──
  const deleteCollection = (idx) => {
    const item = collections[idx];
    if (!item) return;
    if (!confirm(`Delete "${item.title}"?\n\nIt will be moved to History where you can restore it later.`)) return;
    item.deletedAt = new Date().toLocaleString();
    history.unshift(item);
    collections.splice(idx, 1);
    renderAll();
    flash("✓ Moved to history — save both JSONs to apply");
  };

  const restoreFromHistory = (idx) => {
    const item = history[idx];
    if (!item) return;
    delete item.deletedAt;
    collections.push(item);
    history.splice(idx, 1);
    renderAll();
    flash("✓ Restored! Save both JSONs to apply");
  };

  const purgeFromHistory = (idx) => {
    const item = history[idx];
    if (!item) return;
    if (!confirm(`Permanently delete "${item.title}"?\n\nThis cannot be undone.`)) return;
    history.splice(idx, 1);
    renderAll();
    flash("✓ Purged — save history.json to apply");
  };

  const purgeAll = () => {
    if (!history.length) return;
    if (!confirm(`Permanently delete ALL ${history.length} item(s) from history?\n\nThis cannot be undone.`)) return;
    history = [];
    renderAll();
    flash("✓ History cleared — save history.json to apply");
  };

  // ── Image actions ──
  const setCoverImage = (imgIdx) => {
    if (imgIdx <= 0 || imgIdx >= editorImages.length) return;
    const [moved] = editorImages.splice(imgIdx, 1);
    editorImages.unshift(moved);
    renderImageGrid();
  };

  const removeImage = (imgIdx) => {
    const name = editorImages[imgIdx];
    if (!name) return;
    if (!confirm(`Remove "${name}" from this collection?`)) return;
    editorImages.splice(imgIdx, 1);
    renderImageGrid();
  };

  const addImagesByName = () => {
    const input = prompt(
      "Enter image filenames (one per line).\n\n" +
      "These must match actual files in the collection folder.\n" +
      "Example:\n  photo1.jpg\n  screenshot.png\n  demo.webp",
      ""
    );
    if (!input) return;
    const names = splitLines(input);
    if (!names.length) return;
    editorImages.push(...names);
    renderImageGrid();
    flash(`✓ Added ${names.length} image(s)`);
  };

  // When user picks files via the file input, we grab just the filenames
  const handleFileSelect = () => {
    const files = imgFileInput?.files;
    if (!files || !files.length) return;
    const names = [];
    for (let i = 0; i < files.length; i++) {
      const name = files[i].name;
      if (!editorImages.includes(name)) {
        editorImages.push(name);
        names.push(name);
      }
    }
    imgFileInput.value = "";
    renderImageGrid();
    if (names.length) {
      flash(`✓ Added ${names.length} filename(s) — copy the actual files to the collection folder`);
    }
  };

  // ── Auto-slug ──
  const handleTitleInput = () => {
    if (!edFolder.dataset.manual) {
      edFolder.value = `image/gallery/${slugify(edTitle.value)}`;
    }
    renderImageGrid();
  };

  // ── Events ──
  const initEvents = () => {
    // Tabs
    document.querySelectorAll("[data-gs-tab]").forEach((btn) => {
      btn.addEventListener("click", () => {
        document.querySelectorAll(".gs-tab-btn").forEach((b) => b.classList.remove("active"));
        document.querySelectorAll(".gs-tab-panel").forEach((p) => p.classList.remove("active"));
        btn.classList.add("active");
        $(btn.dataset.gsTab)?.classList.add("active");
      });
    });

    // New collection
    $("gs-new-btn")?.addEventListener("click", () => openEditor(-1));
    $("gs-new-btn-2")?.addEventListener("click", () => openEditor(-1));

    // Editor controls
    $("gs-editor-close")?.addEventListener("click", closeEditor);
    $("gs-editor-cancel")?.addEventListener("click", closeEditor);
    editorBackdrop?.addEventListener("click", (e) => { if (e.target === editorBackdrop) closeEditor(); });
    editorForm?.addEventListener("submit", (e) => { e.preventDefault(); saveEditor(); });

    edTitle?.addEventListener("input", handleTitleInput);
    edFolder?.addEventListener("input", () => { edFolder.dataset.manual = "1"; renderImageGrid(); });

    // Image manager
    $("gs-img-add-btn")?.addEventListener("click", () => {
      // Show two options: file picker or manual entry
      const choice = confirm(
        "Choose how to add images:\n\n" +
        "OK = Pick files from your computer (filenames will be recorded)\n" +
        "Cancel = Type filenames manually"
      );
      if (choice) {
        imgFileInput?.click();
      } else {
        addImagesByName();
      }
    });

    imgFileInput?.addEventListener("change", handleFileSelect);

    // Image grid click events (cover + remove)
    imgGrid?.addEventListener("click", (e) => {
      const removeBtn = e.target.closest("[data-remove-idx]");
      if (removeBtn) {
        removeImage(Number(removeBtn.dataset.removeIdx));
        return;
      }
      const imgItem = e.target.closest("[data-img-idx]");
      if (imgItem) {
        setCoverImage(Number(imgItem.dataset.imgIdx));
      }
    });

    // Collection list actions
    collectionList?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const idx = Number(btn.dataset.idx);
      if (btn.dataset.action === "edit") openEditor(idx);
      if (btn.dataset.action === "delete") deleteCollection(idx);
    });

    // History list actions
    historyList?.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-action]");
      if (!btn) return;
      const idx = Number(btn.dataset.idx);
      if (btn.dataset.action === "restore") restoreFromHistory(idx);
      if (btn.dataset.action === "purge") purgeFromHistory(idx);
    });

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
      flash("✓ gallery-history.json downloaded — replace image/gallery-history.json");
    });

    // Theme
    const applyTheme = (theme) => {
      const isLight = theme === "light";
      document.body.classList.toggle("light-mode", isLight);
      const icon = themeBtn?.querySelector("i");
      if (icon) icon.className = isLight ? "fas fa-moon" : "fas fa-sun";
    };
    applyTheme(localStorage.getItem(THEME_KEY) || "dark");
    themeBtn?.addEventListener("click", () => {
      const next = document.body.classList.contains("light-mode") ? "dark" : "light";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });

    // Scroll
    const updateScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      if (progressBar) progressBar.style.width = `${h > 0 ? Math.min((window.scrollY / h) * 100, 100) : 0}%`;
      backToTopBtn?.classList.toggle("visible", window.scrollY > 420);
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
    const loader = $("global-loader");
    if (document.readyState === "complete") loader?.classList.add("hidden");
    else window.addEventListener("load", () => loader?.classList.add("hidden"), { once: true });
  });
})();
