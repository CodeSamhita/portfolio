document.addEventListener("DOMContentLoaded", async () => {
  const store = window.portfolioStore;
  if (!store) {
    return;
  }

  const THEME_KEY = "portfolio-v5-theme";
  let data = await store.init();

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-links");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const revealItems = document.querySelectorAll(".reveal-up");

  const masterForm = document.getElementById("master-form");
  const quickStatus = document.getElementById("quick-status");
  const contentEditor = document.getElementById("content-editor");
  const editorStatus = document.getElementById("editor-status");
  
  const projectList = document.getElementById("studio-project-list");
  const projectStats = document.getElementById("studio-stats");
  const galleryList = document.getElementById("studio-gallery-list");
  const addGalleryBtn = document.getElementById("add-gallery-btn");
  
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
    status: document.getElementById("studio-status"),
    location: document.getElementById("studio-location"),
    email: document.getElementById("studio-email"),
    resume: document.getElementById("studio-resume"),
    github: document.getElementById("studio-github"),
    linkedin: document.getElementById("studio-linkedin"),
    availability: document.getElementById("studio-availability"),
    languages: document.getElementById("studio-languages"),

    aboutHeading: document.getElementById("studio-about-heading"),
    aboutParagraphs: document.getElementById("studio-about-paragraphs"),
    
    skillsHeading: document.getElementById("studio-skills-heading"),
    skillsTools: document.getElementById("studio-skills-tools"),
    
    journeyHeading: document.getElementById("studio-journey-heading"),
    journeyHighlights: document.getElementById("studio-journey-highlights"),
    journeyActivities: document.getElementById("studio-journey-activities"),
  };

  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

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
    if(quickFields.status) quickFields.status.value = data.profile.statusText || "";
    if(quickFields.location) quickFields.location.value = data.profile.locationText || "";
    if(quickFields.email) quickFields.email.value = data.profile.email || "";
    if(quickFields.resume) quickFields.resume.value = data.profile.resumeUrl || "";
    if(quickFields.github) quickFields.github.value = data.profile.githubUrl || "";
    if(quickFields.linkedin) quickFields.linkedin.value = data.profile.linkedinUrl || "";
    if(quickFields.availability) quickFields.availability.value = data.contact.availability || "";
    if(quickFields.languages) quickFields.languages.value = (data.profile.languages || []).join(", ");

    if(quickFields.aboutHeading) quickFields.aboutHeading.value = data.about.heading || "";
    if(quickFields.aboutParagraphs) quickFields.aboutParagraphs.value = (data.about.paragraphs || []).join("\n\n");

    if(quickFields.skillsHeading) quickFields.skillsHeading.value = data.skills.heading || "";
    if(quickFields.skillsTools) quickFields.skillsTools.value = (data.skills.tools || []).join(", ");

    if(quickFields.journeyHeading) quickFields.journeyHeading.value = data.journey.heading || "";
    if(quickFields.journeyHighlights) quickFields.journeyHighlights.value = (data.journey.highlights || []).join("\n");
    if(quickFields.journeyActivities) quickFields.journeyActivities.value = (data.journey.activities || []).join("\n");
  };

  const syncEditor = () => {
    if (contentEditor) contentEditor.value = store.exportJson(data);
  };

  const syncStats = () => {
    if (!projectStats) return;
    const stats = [
      `Projects: ${data.projects?.length || 0}`,
      `Capabilities: ${data.skills?.capabilities?.length || 0}`,
      `Tools: ${data.skills?.tools?.length || 0}`
    ];
    projectStats.innerHTML = stats.map((item) => `<span class="badge" style="margin-right: 1rem;"><i class="fas fa-database mb-1"></i> ${escapeHtml(item)}</span>`).join("");
  };

  const syncImageTargets = () => {
    if (!imageTarget) return;
    const previous = imageTarget.value;
    const pOpts = data.projects.map((p) => `<option value="proj|${escapeHtml(p.id)}">Project: ${escapeHtml(p.title)}</option>`).join("");
    const gOpts = (data.gallery || []).map((g) => `<option value="gal|${escapeHtml(g.id)}">Gallery: ${escapeHtml(g.title)}</option>`).join("");
    imageTarget.innerHTML = `<option value="profile">Profile Portrait</option><optgroup label="Projects">${pOpts}</optgroup><optgroup label="Gallery Items">${gOpts}</optgroup>`;
    
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

  const syncGalleryList = () => {
    if (!galleryList) return;
    if (!data.gallery || !data.gallery.length) {
      galleryList.innerHTML = `<article class="studio-project-item" style="padding:1rem;"><strong>No gallery images yet</strong></article>`;
      return;
    }
    galleryList.innerHTML = data.gallery
      .map(
        (item) => `
          <div class="project-list-item" style="flex-direction: column; gap: 1rem; padding: 1rem;" data-gallery-id="${escapeHtml(item.id)}">
            <img src="${escapeHtml(item.image)}" alt="Gallery Image" style="width: 100%; height: 120px; object-fit: cover; border-radius: 8px; border: 1px dashed var(--line);" />
            <div class="project-list-top" style="width: 100%;">
              <strong style="font-size: 1rem;">${escapeHtml(item.title)}</strong>
              <p class="admin-note" style="margin: 0; margin-top: 0.5rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; font-size: 0.8rem;">${escapeHtml(item.description)}</p>
            </div>
            <div class="project-actions" style="margin-top: auto; padding-top: 1rem; width: 100%; justify-content: space-between; border-top: 1px solid rgba(255,255,255,0.05); display: flex;">
              <button type="button" class="btn btn-outline btn-sm" style="padding: 6px 10px; font-size: 0.75rem;" data-action="focus-gallery" data-id="${escapeHtml(item.id)}"><i class="fas fa-search"></i> Inspect Source</button>
              <button type="button" class="btn btn-outline btn-sm" style="padding: 6px 10px; font-size: 0.75rem; color: #ff6b6b; border-color: rgba(255,107,107,0.3);" data-action="delete-gallery" data-id="${escapeHtml(item.id)}"><i class="fas fa-trash-alt"></i></button>
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
    syncGalleryList();
    syncImageTargets();
  };

  const persistData = (nextData, message) => {
    data = store.save(nextData);
    syncAll();
    setStatus(quickStatus, message, false);
    setStatus(editorStatus, message, false);
  };

  const downloadBackupZip = async (currentData) => {
    if (!window.JSZip) {
      window.open("data:text/json;charset=utf-8," + encodeURIComponent(store.exportJson(currentData)));
      return;
    }
    try {
      const zip = new window.JSZip();
      const folder = zip.folder("data");
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
      link.download = `portfolio-v6-backup-${new Date().toISOString().replace(/[:.]/g, "-")}.zip`;
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

    const nextData = store.normalizeData({
      ...data,
      profile: {
        ...data.profile,
        name: quickFields.name.value,
        label: quickFields.label.value,
        heroEyebrow: quickFields.eyebrow.value,
        heroTitle: quickFields.title.value,
        heroLead: quickFields.lead.value,
        statusText: quickFields.status.value,
        locationText: quickFields.location.value,
        email: quickFields.email.value,
        resumeUrl: quickFields.resume.value,
        githubUrl: quickFields.github.value,
        linkedinUrl: quickFields.linkedin.value,
        languages: quickFields.languages.value.split(",").map(s => s.trim()).filter(Boolean)
      },
      contact: {
        ...data.contact,
        availability: quickFields.availability.value
      },
      about: {
        ...data.about,
        heading: quickFields.aboutHeading.value,
        paragraphs: quickFields.aboutParagraphs.value.split(/\n\n+/).filter(Boolean).map(h => h.trim())
      },
      skills: {
        ...data.skills,
        heading: quickFields.skillsHeading.value,
        tools: quickFields.skillsTools.value.split(",").map(i => i.trim()).filter(Boolean)
      },
      journey: {
        ...data.journey,
        heading: quickFields.journeyHeading.value,
        highlights: quickFields.journeyHighlights.value.split(/\n+/).filter(Boolean).map(h => h.trim()),
        activities: quickFields.journeyActivities.value.split(/\n+/).filter(Boolean).map(h => h.trim())
      }
    });

    persistData(nextData, "All standard text sections saved successfully.");
    downloadBackupZip(nextData);
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

  const addGalleryForm = document.getElementById("add-gallery-form");
  addGalleryForm?.addEventListener("submit", async (e) => {
    e.preventDefault();
    const title = document.getElementById("new-gallery-title").value;
    const desc = document.getElementById("new-gallery-desc").value;
    const file = document.getElementById("new-gallery-file").files[0];
    if(!file) return;
    
    setStatus(quickStatus, "Compressing and uploading image...", false);
    
    try {
        const optimized = await optimizeImageFile(file, "gallery", 85);
        const id = "gal-" + Date.now();
        const nextData = store.normalizeData({
          ...data,
          gallery: [
            { id, title, description: desc, image: optimized.dataUrl },
            ...(data.gallery || [])
          ]
        });
        persistData(nextData, "Upload success! Gallery expanded.");
        addGalleryForm.reset();
        setTimeout(() => { if(galleryList) galleryList.scrollIntoView({behavior: "smooth"}); }, 100);
    } catch (err) {
        setStatus(quickStatus, "Image compression failed.", true);
    }
  });

  galleryList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) return;
    const action = button.dataset.action;
    const id = button.dataset.id;
    if (action === "delete-gallery" && confirm("Permanently delete this gallery item?")) {
      const nextGallery = (data.gallery || []).filter((g) => g.id !== id);
      persistData({ ...data, gallery: nextGallery }, "Gallery item deleted.");
    } else if (action === "focus-gallery") {
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
        nextData.gallery = (data.gallery || []).map((g) => g.id === id ? { ...g, image: optimizedAsset.dataUrl } : g);
        persistData(nextData, "Gallery frame injected successfully.");
      }
    }
  });

  downloadImageBtn?.addEventListener("click", () => {
    if (!optimizedAsset) { setStatus(imageStatus, "Compression buffer is empty.", true); return; }
    const url = URL.createObjectURL(optimizedAsset.blob);
    const link = document.createElement("a"); link.href = url; link.download = `${optimizedAsset.fileName}-compiled.webp`; link.click();
    URL.revokeObjectURL(url); setStatus(imageStatus, "Download initialized.", false);
  });

  if (!("IntersectionObserver" in window)) { revealItems.forEach((item) => item.classList.add("is-visible")); }
  else {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); } });
    }, { threshold: 0.14 });
    revealItems.forEach((item) => observer.observe(item));
  }
  navToggle?.addEventListener("click", () => navToggle.setAttribute("aria-expanded", String(Boolean(navPanel?.classList.toggle("open")))));
  navLinks.forEach((link) => link.addEventListener("click", () => { navPanel?.classList.remove("open"); navToggle?.setAttribute("aria-expanded", "false"); }));
  const hideLoader = () => document.getElementById("global-loader")?.classList.add("hidden");
  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader);

  initTheme();
  updateQualityFromPreset();
  syncAll();
});
