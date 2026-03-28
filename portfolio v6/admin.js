document.addEventListener("DOMContentLoaded", async () => {
  const store = window.portfolioStore;
  if (!store) {
    return;
  }

  const THEME_KEY = "portfolio-v5-theme";
  const TAB_KEY = "portfolio-v6-admin-tab";
  const DRAFT_KEY = "portfolio-v6-admin-draft";
  let data = await store.init();

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-links");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const revealItems = document.querySelectorAll(".reveal-up");
  const progressBar = document.getElementById("progressBar");
  const backToTopBtn = document.getElementById("backToTopBtn");

  const masterForm = document.getElementById("master-form");
  const quickStatus = document.getElementById("quick-status");
  const contentEditor = document.getElementById("content-editor");
  const editorStatus = document.getElementById("editor-status");
  
  const projectList = document.getElementById("studio-project-list");
  const projectStats = document.getElementById("studio-stats");
  const overviewStats = document.getElementById("admin-overview-stats");
  
  const importFileInput = document.getElementById("import-json-file");
  const imageFileInput = document.getElementById("image-file-input");
  const imagePreset = document.getElementById("image-preset");
  const imageTarget = document.getElementById("image-target");
  const imageQuality = document.getElementById("image-quality");
  const imageQualityValue = document.getElementById("image-quality-value");
  const processImageBtn = document.getElementById("process-image-btn");
  const applyImageBtn = document.getElementById("apply-image-btn");
  const downloadImageBtn = document.getElementById("download-image-btn");
  const imageStatus = document.getElementById("image-status");
  const originalImageFrame = document.getElementById("original-image-frame");
  const optimizedImageFrame = document.getElementById("optimized-image-frame");
  const originalImageMeta = document.getElementById("original-image-meta");
  const optimizedImageMeta = document.getElementById("optimized-image-meta");

  const imagePresets = {
    portrait: { width: 1400, height: 1600, quality: 0.88, label: "Portrait" },
    project: { width: 1600, height: 1000, quality: 0.84, label: "Project Card" },
    gallery: { width: 1800, height: 1200, quality: 0.86, label: "Gallery Wide" }
  };

  let optimizedAsset = null;
  let originalPreviewUrl = "";

  const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.body.classList.toggle("light-mode", isLight);
    if (themeToggleBtn) {
      const icon = themeToggleBtn.querySelector("i");
      if (icon) {
        icon.className = isLight ? "fas fa-moon" : "fas fa-sun";
      }
      themeToggleBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
    }
  };

  const initTheme = () => {
    const savedTheme = window.localStorage.getItem(THEME_KEY) || "dark";
    applyTheme(savedTheme);
    themeToggleBtn?.addEventListener("click", () => {
      const nextTheme = document.body.classList.contains("light-mode") ? "dark" : "light";
      window.localStorage.setItem(THEME_KEY, nextTheme);
      applyTheme(nextTheme);
    });
  };

  const quickFields = {
    name: document.getElementById("studio-name"),
    label: document.getElementById("studio-label"),
    eyebrow: document.getElementById("studio-eyebrow"),
    title: document.getElementById("studio-title"),
    lead: document.getElementById("studio-lead"),
    statusLabel: document.getElementById("studio-status-label"),
    status: document.getElementById("studio-status"),
    locationLabel: document.getElementById("studio-location-label"),
    location: document.getElementById("studio-location"),
    email: document.getElementById("studio-email"),
    resume: document.getElementById("studio-resume"),
    github: document.getElementById("studio-github"),
    linkedin: document.getElementById("studio-linkedin"),
    instagram: document.getElementById("studio-instagram"),
    whatsappNumber: document.getElementById("studio-whatsapp-number"),
    whatsappMessage: document.getElementById("studio-whatsapp-message"),
    availability: document.getElementById("studio-availability"),
    languages: document.getElementById("studio-languages"),
    focusAreas: document.getElementById("studio-focus-areas"),

    aboutHeading: document.getElementById("studio-about-heading"),
    aboutParagraphs: document.getElementById("studio-about-paragraphs"),
    aboutInsights: document.getElementById("studio-about-insights"),

    skillsHeading: document.getElementById("studio-skills-heading"),
    skillsCapabilities: document.getElementById("studio-skills-capabilities"),
    skillsTools: document.getElementById("studio-skills-tools"),

    journeyHeading: document.getElementById("studio-journey-heading"),
    journeyEducation: document.getElementById("studio-journey-education"),
    journeyHighlights: document.getElementById("studio-journey-highlights"),
    journeyActivities: document.getElementById("studio-journey-activities"),

    contactHeading: document.getElementById("studio-contact-heading"),
    contactIntro: document.getElementById("studio-contact-intro"),
  };

  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const getGalleryImages = (item) => {
    const normalized = Array.isArray(item?.images)
      ? item.images.map((image) => String(image || "").trim()).filter(Boolean)
      : [];

    if (!normalized.length && item?.image) {
      normalized.push(String(item.image || "").trim());
    }

    return normalized;
  };

  const getGalleryImageCount = (item) => getGalleryImages(item).length;

  const setStatus = (target, text, isError = false) => {
    if(!target) return;
    target.textContent = text;
    target.style.color = isError ? "#ff9b9b" : "";
    setTimeout(() => { if(target) target.textContent = ""; }, 4000);
  };

  const formatBytes = (bytes) => {
    if (!Number.isFinite(bytes)) return "";
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const loadImageElement = (src) =>
    new Promise((resolve, reject) => {
      const image = new Image();
      image.onload = () => resolve(image);
      image.onerror = reject;
      image.src = src;
    });

  const blobToDataUrl = (blob) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = reject;
      reader.readAsDataURL(blob);
    });

  const canvasToBlob = (canvas, type, quality) =>
    new Promise((resolve, reject) => {
      canvas.toBlob((blob) => blob ? resolve(blob) : reject(new Error("Unable to create optimized image.")), type, quality);
    });

  const optimizeImageFile = async (file, presetName, qualityPercent) => {
    const preset = imagePresets[presetName] || imagePresets.project;
    const inputUrl = URL.createObjectURL(file);
    try {
      const image = await loadImageElement(inputUrl);
      const widthRatio = preset.width / image.width;
      const heightRatio = preset.height / image.height;
      const ratio = Math.min(widthRatio, heightRatio, 1);
      const outputWidth = Math.max(1, Math.round(image.width * ratio));
      const outputHeight = Math.max(1, Math.round(image.height * ratio));

      const canvas = document.createElement("canvas");
      canvas.width = outputWidth;
      canvas.height = outputHeight;

      const context = canvas.getContext("2d", { alpha: true });
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
      context.drawImage(image, 0, 0, outputWidth, outputHeight);

      const quality = Math.min(Math.max(qualityPercent / 100, 0.5), 0.96);
      let blob = await canvasToBlob(canvas, "image/webp", quality);

      if (blob.size > file.size && quality > 0.72) {
        blob = await canvasToBlob(canvas, "image/webp", Math.max(0.72, quality - 0.1));
      }
      const dataUrl = await blobToDataUrl(blob);
      return { blob, dataUrl, width: outputWidth, height: outputHeight, originalSize: file.size, outputSize: blob.size, fileName: file.name.replace(/\.[^.]+$/, "") || "optimized-image", mimeType: blob.type || "image/webp" };
    } finally {
      URL.revokeObjectURL(inputUrl);
    }
  };

  const renderPreview = (frame, meta, source, infoText) => {
    if (source) frame.innerHTML = `<img src="${source}" alt="Preview" style="max-height: 200px; max-width: 100%; object-fit: contain; border-radius: 8px;" />`;
    else frame.innerHTML = "<span>No image loaded</span>";
    meta.textContent = infoText || "";
  };

  const syncQuickFields = () => {
    if(quickFields.name) quickFields.name.value = data.profile.name || "";
    if(quickFields.label) quickFields.label.value = data.profile.label || "";
    if(quickFields.eyebrow) quickFields.eyebrow.value = data.profile.heroEyebrow || "";
    if(quickFields.title) quickFields.title.value = data.profile.heroTitle || "";
    if(quickFields.lead) quickFields.lead.value = data.profile.heroLead || "";
    if(quickFields.statusLabel) quickFields.statusLabel.value = data.profile.statusLabel || "";
    if(quickFields.status) quickFields.status.value = data.profile.statusText || "";
    if(quickFields.locationLabel) quickFields.locationLabel.value = data.profile.locationLabel || "";
    if(quickFields.location) quickFields.location.value = data.profile.locationText || "";
    if(quickFields.email) quickFields.email.value = data.profile.email || "";
    if(quickFields.resume) quickFields.resume.value = data.profile.resumeUrl || "";
    if(quickFields.github) quickFields.github.value = data.profile.githubUrl || "";
    if(quickFields.linkedin) quickFields.linkedin.value = data.profile.linkedinUrl || "";
    if(quickFields.instagram) quickFields.instagram.value = data.profile.instagramUrl || "";
    // Parse existing wa.me URL back into number + message for friendly display
    if(quickFields.whatsappNumber || quickFields.whatsappMessage) {
      const waUrl = data.profile.whatsappUrl || "";
      const numMatch = waUrl.match(/wa\.me\/(\d+)/);
      const msgMatch = waUrl.match(/[?&]text=([^&]*)/);
      if(quickFields.whatsappNumber) quickFields.whatsappNumber.value = numMatch ? numMatch[1] : "";
      if(quickFields.whatsappMessage) quickFields.whatsappMessage.value = msgMatch ? decodeURIComponent(msgMatch[1].replace(/\+/g, " ")) : "";
    }
    if(quickFields.availability) quickFields.availability.value = data.contact.availability || "";
    if(quickFields.languages) quickFields.languages.value = (data.profile.languages || []).join(", ");
    if(quickFields.focusAreas) quickFields.focusAreas.value = (data.profile.focusAreas || []).join("\n");

    if(quickFields.aboutHeading) quickFields.aboutHeading.value = data.about.heading || "";
    if(quickFields.aboutParagraphs) quickFields.aboutParagraphs.value = (data.about.paragraphs || []).join("\n\n");
    if(quickFields.aboutInsights) quickFields.aboutInsights.value = (data.about.insights || [])
      .map(i => `${i.tag} | ${i.title} | ${i.text}`).join("\n");

    if(quickFields.skillsHeading) quickFields.skillsHeading.value = data.skills.heading || "";
    if(quickFields.skillsCapabilities) quickFields.skillsCapabilities.value = (data.skills.capabilities || [])
      .map(c => `${c.icon} | ${c.title} | ${c.text}`).join("\n");
    if(quickFields.skillsTools) quickFields.skillsTools.value = (data.skills.tools || []).join(", ");

    if(quickFields.journeyHeading) quickFields.journeyHeading.value = data.journey.heading || "";
    if(quickFields.journeyEducation) quickFields.journeyEducation.value = (data.journey.education || [])
      .map(e => `${e.title} | ${e.place} | ${e.year}`).join("\n");
    if(quickFields.journeyHighlights) quickFields.journeyHighlights.value = (data.journey.highlights || []).join("\n");
    if(quickFields.journeyActivities) quickFields.journeyActivities.value = (data.journey.activities || []).join("\n");

    if(quickFields.contactHeading) quickFields.contactHeading.value = data.contact.heading || "";
    if(quickFields.contactIntro) quickFields.contactIntro.value = data.contact.intro || "";
  };

  const syncEditor = () => {
    if (contentEditor) contentEditor.value = store.exportJson(data);
  };

  const syncStats = () => {
    const totalGalleryImages = (data.gallery || []).reduce((sum, item) => sum + getGalleryImageCount(item), 0);
    const stats = [
      `Projects: ${data.projects?.length || 0}`,
      `Gallery Collections: ${data.gallery?.length || 0}`,
      `Gallery Images: ${totalGalleryImages}`,
      `Capabilities: ${data.skills?.capabilities?.length || 0}`,
      `Tools: ${data.skills?.tools?.length || 0}`
    ];

    if (projectStats) {
      projectStats.innerHTML = stats.map((item) => `<span class="badge" style="margin-right: 1rem;"><i class="fas fa-database mb-1"></i> ${escapeHtml(item)}</span>`).join("");
    }

    if (overviewStats) {
      overviewStats.innerHTML = [
        { label: "Projects", value: data.projects?.length || 0 },
        { label: "Gallery Sets", value: data.gallery?.length || 0 },
        { label: "Gallery Images", value: totalGalleryImages },
        { label: "Tools", value: data.skills?.tools?.length || 0 }
      ]
        .map(
          (item) => `
            <article class="admin-overview-card">
              <strong>${escapeHtml(String(item.value).padStart(2, "0"))}</strong>
              <span>${escapeHtml(item.label)}</span>
            </article>
          `
        )
        .join("");
    }
  };

  const syncImageTargets = () => {
    if (!imageTarget) return;
    const previous = imageTarget.value;
    const pOpts = data.projects.map((p) => `<option value="proj|${escapeHtml(p.id)}">Project: ${escapeHtml(p.title)}</option>`).join("");
    const gOpts = (data.gallery || [])
      .map((g) => `<option value="gal|${escapeHtml(g.id)}">Gallery: ${escapeHtml(g.title)} (${getGalleryImageCount(g)} imgs)</option>`)
      .join("");
    imageTarget.innerHTML = `<option value="profile">Profile Portrait</option><optgroup label="Projects">${pOpts}</optgroup><optgroup label="Gallery Collections">${gOpts}</optgroup>`;
    
    if ([...imageTarget.options].some((option) => option.value === previous)) {
      imageTarget.value = previous;
    }
  };

  const syncProjectList = () => {
    if (!projectList) return;
    if (!data.projects.length) {
      projectList.innerHTML = `<article class="studio-project-item" style="padding:1rem;"><strong>No projects yet</strong></article>`;
      return;
    }
    projectList.innerHTML = data.projects
      .map(
        (project) => `
          <div class="project-list-item" data-project-id="${escapeHtml(project.id)}">
            <div class="project-list-top">
              <strong style="font-size: 1.1rem;">${escapeHtml(project.title)}</strong>
              <span class="badge" style="margin-bottom: 0.5rem; display: block; margin-top: 0.5rem;">${escapeHtml(project.category)}</span>
              <p class="admin-note" style="margin: 0; max-width: 600px; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${escapeHtml(project.galleryDescription || project.description)}</p>
            </div>
            <div class="project-actions">
              <button type="button" class="btn btn-outline btn-sm" style="padding: 8px 16px; font-size: 0.8rem;" data-action="focus" data-id="${escapeHtml(project.id)}"><i class="fas fa-search"></i> Inspect Source</button>
              <button type="button" class="btn btn-outline btn-sm" style="padding: 8px 16px; font-size: 0.8rem; color: #ff6b6b; border-color: rgba(255,107,107,0.3);" data-action="delete" data-id="${escapeHtml(project.id)}"><i class="fas fa-trash-alt"></i></button>
            </div>
          </div>
        `
      )
      .join("");
  };

  const syncAll = () => {
    syncQuickFields();
    syncEditor();
    syncStats();
    syncProjectList();
    syncImageTargets();
    syncBackupList();
  };

  const persistData = (nextData, message) => {
    data = store.save(nextData);
    syncAll();
    setStatus(quickStatus, message, false);
    setStatus(editorStatus, message, false);
  };

  // ── Auto-Backup helpers ───────────────────────────────────────────
  const BACKUP_KEY_PREFIX = "portfolio-v6-autobak-";
  const MAX_BACKUPS = 10;

  const saveAutoBackup = (snapshot) => {
    try {
      const timestamp = new Date().toISOString();
      const key = BACKUP_KEY_PREFIX + timestamp;
      window.localStorage.setItem(key, JSON.stringify(snapshot));
      // Prune oldest if over limit
      const allKeys = Object.keys(window.localStorage)
        .filter(k => k.startsWith(BACKUP_KEY_PREFIX))
        .sort();
      while (allKeys.length > MAX_BACKUPS) {
        window.localStorage.removeItem(allKeys.shift());
      }
    } catch(e) {}
  };

  const syncBackupList = () => {
    const list = document.getElementById("backup-restore-list");
    if (!list) return;
    const allKeys = Object.keys(window.localStorage)
      .filter(k => k.startsWith(BACKUP_KEY_PREFIX))
      .sort()
      .reverse(); // newest first
    if (!allKeys.length) {
      list.innerHTML = `<p class="admin-note" style="font-size:0.85rem;">No auto-backups yet. They appear here after your first Save.</p>`;
      return;
    }
    list.innerHTML = allKeys.map(key => {
      const ts = key.replace(BACKUP_KEY_PREFIX, "");
      const label = new Date(ts).toLocaleString();
      return `<div style="display:flex; justify-content:space-between; align-items:center; padding:0.6rem 1rem; border:1px solid var(--line); border-radius:8px; background:rgba(255,255,255,0.02);">
        <span style="font-size:0.85rem;"><i class="fas fa-clock" style="opacity:0.5; margin-right:0.5rem;"></i>${label}</span>
        <div style="display:flex; gap:0.5rem;">
          <button type="button" class="btn btn-outline btn-sm" style="padding:4px 12px; font-size:0.75rem;" data-restore-key="${key}"><i class="fas fa-undo"></i> Restore</button>
          <button type="button" class="btn btn-outline btn-sm" style="padding:4px 12px; font-size:0.75rem; color:#ff6b6b; border-color:rgba(255,107,107,0.3);" data-delete-backup-key="${key}"><i class="fas fa-times"></i></button>
        </div>
      </div>`;
    }).join("");

    list.querySelectorAll("[data-restore-key]").forEach(btn => {
      btn.addEventListener("click", () => {
        if (!confirm("Restore this backup? Your current unsaved changes will be replaced.")) return;
        try {
          const restored = store.normalizeData(JSON.parse(window.localStorage.getItem(btn.dataset.restoreKey)));
          data = store.save(restored);
          syncAll();
          syncBackupList();
          setStatus(quickStatus, "✓ Backup restored successfully.", false);
        } catch(e) { alert("Could not restore this backup."); }
      });
    });

    list.querySelectorAll("[data-delete-backup-key]").forEach(btn => {
      btn.addEventListener("click", () => {
        window.localStorage.removeItem(btn.dataset.deleteBackupKey);
        syncBackupList();
      });
    });
  };

  const downloadBackupZip = async (currentData) => {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
    const folderName = `backup/backup-${timestamp}/`;
    if (!window.JSZip) {
      window.open("data:text/json;charset=utf-8," + encodeURIComponent(store.exportJson(currentData)));
      return;
    }
    try {
      const zip = new window.JSZip();
      const folder = zip.folder(folderName);
      folder.file("profile.json", JSON.stringify(currentData.profile || {}, null, 2));
      folder.file("contact.json", JSON.stringify(currentData.contact || {}, null, 2));
      folder.file("about.json", JSON.stringify(currentData.about || {}, null, 2));
      folder.file("skills.json", JSON.stringify(currentData.skills || {}, null, 2));
      folder.file("journey.json", JSON.stringify(currentData.journey || {}, null, 2));
      folder.file("projects.json", JSON.stringify(currentData.projects || [], null, 2));
      folder.file("gallery.json", JSON.stringify(currentData.gallery || [], null, 2));
      const blob = await zip.generateAsync({ type: "blob" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `portfolio-v6-backup-${timestamp}.zip`;
      link.click();
      URL.revokeObjectURL(url);
    } catch(err) {}
  };

  document.getElementById("floating-backup-btn")?.addEventListener("click", () => {
    downloadBackupZip(data);
    setStatus(quickStatus, "Backup ZIP generated successfully.", false);
  });

  const parseEditorData = () => {
    try {
      return store.normalizeData(JSON.parse(contentEditor.value));
    } catch (error) {
      setStatus(editorStatus, "JSON is invalid. Fix the formatting before saving.", true);
      return null;
    }
  };

  masterForm?.addEventListener("submit", (event) => {
    event.preventDefault();

    const parseInsights = (raw) => raw.split(/\n+/).filter(Boolean).map(line => {
      const [tag = "", title = "", ...rest] = line.split("|").map(s => s.trim());
      return { tag, title, text: rest.join(" | ") };
    });

    const parseCapabilities = (raw) => raw.split(/\n+/).filter(Boolean).map(line => {
      const [icon = "", title = "", ...rest] = line.split("|").map(s => s.trim());
      return { icon, title, text: rest.join(" | ") };
    });

    const parseEducation = (raw) => raw.split(/\n+/).filter(Boolean).map(line => {
      const [title = "", place = "", year = ""] = line.split("|").map(s => s.trim());
      return { title, place, year };
    });

    const nextData = store.normalizeData({
      ...data,
      profile: {
        ...data.profile,
        name: quickFields.name.value,
        label: quickFields.label.value,
        heroEyebrow: quickFields.eyebrow.value,
        heroTitle: quickFields.title.value,
        heroLead: quickFields.lead.value,
        statusLabel: quickFields.statusLabel?.value || data.profile.statusLabel,
        statusText: quickFields.status.value,
        locationLabel: quickFields.locationLabel?.value || data.profile.locationLabel,
        locationText: quickFields.location.value,
        email: quickFields.email.value,
        resumeUrl: quickFields.resume.value,
        githubUrl: quickFields.github.value,
        linkedinUrl: quickFields.linkedin.value,
        instagramUrl: quickFields.instagram?.value || data.profile.instagramUrl,
        whatsappUrl: (() => {
          const num = (quickFields.whatsappNumber?.value || "").replace(/\D/g, "");
          const msg = (quickFields.whatsappMessage?.value || "").trim();
          if (num) return `https://wa.me/${num}${msg ? "?text=" + encodeURIComponent(msg) : ""}`;
          return data.profile.whatsappUrl || "";
        })(),
        languages: quickFields.languages.value.split(",").map(s => s.trim()).filter(Boolean),
        focusAreas: quickFields.focusAreas.value.split("\n").map(s => s.trim()).filter(Boolean)
      },
      contact: {
        ...data.contact,
        heading: quickFields.contactHeading?.value || data.contact.heading,
        intro: quickFields.contactIntro?.value || data.contact.intro,
        availability: quickFields.availability.value
      },
      about: {
        ...data.about,
        heading: quickFields.aboutHeading.value,
        paragraphs: quickFields.aboutParagraphs.value.split(/\n\n+/).filter(Boolean).map(h => h.trim()),
        insights: quickFields.aboutInsights?.value ? parseInsights(quickFields.aboutInsights.value) : data.about.insights
      },
      skills: {
        ...data.skills,
        heading: quickFields.skillsHeading.value,
        capabilities: quickFields.skillsCapabilities?.value ? parseCapabilities(quickFields.skillsCapabilities.value) : data.skills.capabilities,
        tools: quickFields.skillsTools.value.split(",").map(i => i.trim()).filter(Boolean)
      },
      journey: {
        ...data.journey,
        heading: quickFields.journeyHeading.value,
        education: quickFields.journeyEducation?.value ? parseEducation(quickFields.journeyEducation.value) : data.journey.education,
        highlights: quickFields.journeyHighlights.value.split(/\n+/).filter(Boolean).map(h => h.trim()),
        activities: quickFields.journeyActivities.value.split(/\n+/).filter(Boolean).map(h => h.trim())
      }
    });

    // Auto-backup CURRENT data before overwriting it
    saveAutoBackup(data);
    persistData(nextData, "✓ All sections saved. Auto-backup created.");
    // No auto-download — use the 'Download Backup ZIP' button manually
  });

  const focusProjectInJSON = (id) => {
    if (!contentEditor) return;
    const marker = `"id": "${id}"`;
    const position = contentEditor.value.indexOf(marker);
    contentEditor.focus();
    if (position >= 0) {
        contentEditor.setSelectionRange(position, position + marker.length);
        contentEditor.scrollTop = contentEditor.scrollHeight * (position / contentEditor.value.length);
    }
    setStatus(editorStatus, "Focused on the selected entry in JSON.", false);
  };

  document.getElementById("add-project-btn")?.addEventListener("click", () => {
    const nextData = store.normalizeData({
      ...data,
      projects: [
        {
          id: store.createId(),
          title: "New Project",
          category: "software",
          type: "Project",
          description: "Describe what this project does.",
          technologies: ["HTML", "CSS"],
          highlight: "Add a strong one-line highlight.",
          image: "image/placeholder.jpg",
          galleryTitle: "New Project",
          galleryDescription: "Write the gallery-facing version of this project story.",
          githubUrl: "",
          linkedinUrl: "",
          liveUrl: ""
        },
        ...data.projects
      ]
    });
    persistData(nextData, "Project template injected.");
    setTimeout(() => { if(projectList) projectList.scrollIntoView({behavior: "smooth"}); }, 100);
  });

  projectList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (action === "delete" && confirm("Permanently delete this project?")) {
      const nextProjects = data.projects.filter((p) => p.id !== id);
      persistData({ ...data, projects: nextProjects }, "Project deleted.");
    } else if (action === "focus") {
      focusProjectInJSON(id);
      if(contentEditor) contentEditor.scrollIntoView({ behavior: "smooth" });
    }
  });

  document.getElementById("format-json-btn")?.addEventListener("click", () => {
    const parsed = parseEditorData();
    if (parsed) { data = parsed; syncAll(); setStatus(editorStatus, "JSON auto-formatted.", false); }
  });

  document.getElementById("save-json-btn")?.addEventListener("click", () => {
    const parsed = parseEditorData();
    if (parsed) persistData(parsed, "Core JSON deployed! Data-store updated.");
  });

  document.getElementById("export-json-btn")?.addEventListener("click", () => {
    const blob = new Blob([store.exportJson(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url; link.download = "portfolio-v6-data.json"; link.click();
    URL.revokeObjectURL(url); setStatus(editorStatus, "Local backup downloaded.", false);
  });

  document.getElementById("import-json-btn")?.addEventListener("click", () => importFileInput?.click());
  importFileInput?.addEventListener("change", async () => {
    const file = importFileInput.files?.[0];
    if (file) {
      try {
        const parsed = store.normalizeData(JSON.parse(await file.text()));
        persistData(parsed, "Target JSON mapped and synchronized successfully.");
        importFileInput.value = "";
      } catch (error) { setStatus(editorStatus, "Import halted. Invalid JSON schema.", true); }
    }
  });

  document.getElementById("reset-json-btn")?.addEventListener("click", () => {
    if (window.confirm("WARNING: Hard Reset returning Data-Store to V5 factory defaults?")) {
      data = store.reset(); syncAll(); setStatus(editorStatus, "Factory Defaults loaded.", false);
    }
  });

  const updateQualityFromPreset = () => {
    const preset = imagePresets[imagePreset?.value] || imagePresets.project;
    if (imageQuality) imageQuality.value = String(Math.round(preset.quality * 100));
    if (imageQualityValue) imageQualityValue.textContent = `${imageQuality.value}%`;
  };
  imagePreset?.addEventListener("change", updateQualityFromPreset);
  imageQuality?.addEventListener("input", () => { if(imageQualityValue) imageQualityValue.textContent = `${imageQuality.value}%`});

  imageFileInput?.addEventListener("change", async () => {
    const file = imageFileInput.files?.[0];
    optimizedAsset = null;
    if (originalPreviewUrl) { URL.revokeObjectURL(originalPreviewUrl); originalPreviewUrl = ""; }
    if (!file) {
      renderPreview(originalImageFrame, originalImageMeta, "", "");
      renderPreview(optimizedImageFrame, optimizedImageMeta, "", "");
      setStatus(imageStatus, "Ready for next asset.", false); return;
    }
    const previewUrl = URL.createObjectURL(file);
    originalPreviewUrl = previewUrl;
    const previewImage = await loadImageElement(previewUrl);
    renderPreview(originalImageFrame, originalImageMeta, previewUrl, `${previewImage.width}x${previewImage.height} | ${formatBytes(file.size)}`);
    renderPreview(optimizedImageFrame, optimizedImageMeta, "", "");
    setStatus(imageStatus, "Source validated. Ready to compress.", false);
  });

  processImageBtn?.addEventListener("click", async () => {
    const file = imageFileInput?.files?.[0];
    if (!file) { setStatus(imageStatus, "No input source hooked.", true); return; }
    setStatus(imageStatus, "RAM compilation in progress...", false);
    try {
      optimizedAsset = await optimizeImageFile(file, imagePreset.value, Number(imageQuality.value));
      renderPreview(optimizedImageFrame, optimizedImageMeta, optimizedAsset.dataUrl, `${optimizedAsset.width}x${optimizedAsset.height} | ${formatBytes(optimizedAsset.outputSize)}`);
      const savings = optimizedAsset.originalSize - optimizedAsset.outputSize;
      const t = savings > 0 ? `Reduced by ${formatBytes(savings)}` : "Compiled locally.";
      setStatus(imageStatus, `Engine complete. ${t}`, false);
    } catch { optimizedAsset = null; setStatus(imageStatus, "Codec failure. Bad file format?", true); }
  });

  applyImageBtn?.addEventListener("click", () => {
    if (!optimizedAsset) { setStatus(imageStatus, "Require optimized buffer. Press Compress first.", true); return; }
    const targetVal = imageTarget?.value;
    if (!targetVal) { setStatus(imageStatus, "Target injection disabled.", true); return; }
    
    let nextData = { ...data };
    if (targetVal === "profile") {
      nextData.profile.portrait = optimizedAsset.dataUrl;
      persistData(nextData, "Profile portrait injected to link successfully.");
    } else {
      const [type, id] = targetVal.split("|");
      if (type === "proj") {
        nextData.projects = data.projects.map((p) => p.id === id ? { ...p, image: optimizedAsset.dataUrl } : p);
        persistData(nextData, "Project thumbnail updated dynamically.");
      } else if (type === "gal") {
        nextData.gallery = (data.gallery || []).map((g) => {
          if (g.id !== id) {
            return g;
          }

          const existingImages = getGalleryImages(g);
          return {
            ...g,
            images: existingImages.length ? [optimizedAsset.dataUrl, ...existingImages.slice(1)] : [optimizedAsset.dataUrl]
          };
        });
        persistData(nextData, "Gallery collection cover updated.");
      }
    }
  });

  downloadImageBtn?.addEventListener("click", () => {
    if (!optimizedAsset) { setStatus(imageStatus, "Compression buffer is empty.", true); return; }
    const url = URL.createObjectURL(optimizedAsset.blob);
    const link = document.createElement("a"); link.href = url; link.download = `${optimizedAsset.fileName}-compiled.webp`; link.click();
    URL.revokeObjectURL(url); setStatus(imageStatus, "Download initialized.", false);
  });

  const updateScrollUi = () => {
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }

    backToTopBtn?.classList.toggle("visible", scrollTop > 420);
  };

  if (!("IntersectionObserver" in window)) { revealItems.forEach((item) => item.classList.add("is-visible")); }
  else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); } });
    }, { threshold: 0.14 });
    revealItems.forEach((item) => observer.observe(item));
  }
  navToggle?.addEventListener("click", () => navToggle.setAttribute("aria-expanded", String(Boolean(navPanel?.classList.toggle("open")))));
  navLinks.forEach((link) => link.addEventListener("click", () => { navPanel?.classList.remove("open"); navToggle?.setAttribute("aria-expanded", "false"); }));
  window.addEventListener("scroll", updateScrollUi, { passive: true });
  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  const hideLoader = () => document.getElementById("global-loader")?.classList.add("hidden");
  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader);

  const adminTabs = document.querySelectorAll(".tab-btn");
  const tabSections = document.querySelectorAll(".tab-section");

  const activateTab = (tabId) => {
    adminTabs.forEach(b => b.classList.remove("active"));
    tabSections.forEach(s => s.classList.remove("active"));
    const btn = document.querySelector(`[data-tab="${tabId}"]`);
    const section = document.getElementById(tabId);
    if (btn) btn.classList.add("active");
    if (section) section.classList.add("active");
    try { window.localStorage.setItem(TAB_KEY, tabId); } catch(e) {}
  };

  adminTabs.forEach(btn => {
    btn.addEventListener("click", () => activateTab(btn.dataset.tab));
  });

  // Restore last active tab
  const savedTab = (() => { try { return window.localStorage.getItem(TAB_KEY); } catch(e) { return null; } })();
  if (savedTab && document.getElementById(savedTab)) activateTab(savedTab);

  // ── Auto-save Draft ──────────────────────────────────────────────
  let draftTimer = null;
  const saveDraft = () => {
    try {
      const draft = {};
      document.querySelectorAll("[id^='studio-']").forEach(el => {
        if (el.id) draft[el.id] = el.value;
      });
      window.localStorage.setItem(DRAFT_KEY, JSON.stringify(draft));
    } catch(e) {}
  };

  const restoreDraft = () => {
    try {
      const raw = window.localStorage.getItem(DRAFT_KEY);
      if (!raw) return;
      const draft = JSON.parse(raw);
      Object.entries(draft).forEach(([id, val]) => {
        const el = document.getElementById(id);
        if (el && el.value !== val) el.value = val;
      });
    } catch(e) {}
  };

  // Listen for any field change and auto-save draft
  masterForm?.addEventListener("input", () => {
    clearTimeout(draftTimer);
    draftTimer = setTimeout(saveDraft, 1500);
  });

  // Clear draft after a committed save
  const originalPersist = persistData;
  // Hook into submit — draft is cleared after real save
  masterForm?.addEventListener("submit", () => {
    try { window.localStorage.removeItem(DRAFT_KEY); } catch(e) {}
  }, { capture: true });

  initTheme();
  updateQualityFromPreset();
  syncAll();
  restoreDraft(); // restore any unsaved draft from previous session
  updateScrollUi();
});
