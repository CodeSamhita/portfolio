document.addEventListener("DOMContentLoaded", () => {
  const store = window.portfolioStore;
  if (!store) {
    return;
  }

  const THEME_KEY = "portfolio-v5-theme";
  let data = store.load();

  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-panel");
  const navLinks = [...document.querySelectorAll(".nav-panel a")];
  const revealItems = document.querySelectorAll(".reveal");

  const quickForm = document.getElementById("quick-form");
  const contentEditor = document.getElementById("content-editor");
  const quickStatus = document.getElementById("quick-status");
  const editorStatus = document.getElementById("editor-status");
  const projectList = document.getElementById("studio-project-list");
  const projectStats = document.getElementById("studio-stats");
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
    portrait: document.getElementById("studio-portrait"),
    github: document.getElementById("studio-github"),
    linkedin: document.getElementById("studio-linkedin"),
    instagram: document.getElementById("studio-instagram"),
    availability: document.getElementById("studio-availability")
  };

  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const setStatus = (target, text, isError = false) => {
    target.textContent = text;
    target.style.color = isError ? "#ff9b9b" : "";
  };

  const formatBytes = (bytes) => {
    if (!Number.isFinite(bytes)) {
      return "";
    }
    if (bytes < 1024) {
      return `${bytes} B`;
    }
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
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
      canvas.toBlob(
        (blob) => {
          if (blob) {
            resolve(blob);
          } else {
            reject(new Error("Unable to create optimized image."));
          }
        },
        type,
        quality
      );
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

      return {
        blob,
        dataUrl,
        width: outputWidth,
        height: outputHeight,
        originalWidth: image.width,
        originalHeight: image.height,
        originalSize: file.size,
        outputSize: blob.size,
        fileName: file.name.replace(/\.[^.]+$/, "") || "optimized-image",
        mimeType: blob.type || "image/webp"
      };
    } finally {
      URL.revokeObjectURL(inputUrl);
    }
  };

  const renderPreview = (frame, meta, source, infoText) => {
    if (source) {
      frame.innerHTML = `<img src="${source}" alt="Preview" />`;
    } else {
      frame.innerHTML = "<span>No image loaded</span>";
    }
    meta.textContent = infoText || "";
  };

  const syncQuickFields = () => {
    quickFields.name.value = data.profile.name || "";
    quickFields.label.value = data.profile.label || "";
    quickFields.eyebrow.value = data.profile.heroEyebrow || "";
    quickFields.title.value = data.profile.heroTitle || "";
    quickFields.lead.value = data.profile.heroLead || "";
    quickFields.status.value = data.profile.statusText || "";
    quickFields.location.value = data.profile.locationText || "";
    quickFields.email.value = data.profile.email || "";
    quickFields.resume.value = data.profile.resumeUrl || "";
    quickFields.portrait.value = data.profile.portrait || "";
    quickFields.github.value = data.profile.githubUrl || "";
    quickFields.linkedin.value = data.profile.linkedinUrl || "";
    quickFields.instagram.value = data.profile.instagramUrl || "";
    quickFields.availability.value = data.contact.availability || "";
  };

  const syncEditor = () => {
    contentEditor.value = store.exportJson(data);
  };

  const syncStats = () => {
    const stats = [
      `Projects: ${data.projects.length}`,
      `Capabilities: ${data.skills.capabilities.length}`,
      `Tools: ${data.skills.tools.length}`
    ];
    projectStats.innerHTML = stats.map((item) => `<span class="studio-stat">${escapeHtml(item)}</span>`).join("");
  };

  const syncImageTargets = () => {
    if (!imageTarget) {
      return;
    }

    const previous = imageTarget.value;
    const options = [
      `<option value="profile.portrait">Profile Portrait</option>`,
      ...data.projects.map(
        (project) =>
          `<option value="project:${escapeHtml(project.id)}">Project Image: ${escapeHtml(project.title)}</option>`
      )
    ];

    imageTarget.innerHTML = options.join("");

    if ([...imageTarget.options].some((option) => option.value === previous)) {
      imageTarget.value = previous;
    }
  };

  const syncProjectList = () => {
    if (!data.projects.length) {
      projectList.innerHTML = `
        <article class="studio-project-item">
          <strong>No projects yet</strong>
          <p class="studio-note">Use "Add Project Template" to create your first editable project entry.</p>
        </article>
      `;
      return;
    }

    projectList.innerHTML = data.projects
      .map(
        (project) => `
          <article class="studio-project-item" data-project-id="${escapeHtml(project.id)}">
            <div class="studio-project-top">
              <strong>${escapeHtml(project.title)}</strong>
              <span class="studio-stat">${escapeHtml(project.category)}</span>
            </div>
            <p class="studio-note">${escapeHtml(project.galleryDescription || project.description)}</p>
            <div class="studio-actions">
              <button type="button" class="button button-secondary" data-action="focus" data-id="${escapeHtml(project.id)}">Focus In JSON</button>
              <button type="button" class="button button-secondary" data-action="delete" data-id="${escapeHtml(project.id)}">Delete</button>
            </div>
          </article>
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
  };

  const persistData = (nextData, message) => {
    data = store.save(nextData);
    syncAll();
    setStatus(quickStatus, message, false);
    setStatus(editorStatus, message, false);
  };

  const parseEditorData = () => {
    try {
      return store.normalizeData(JSON.parse(contentEditor.value));
    } catch (error) {
      setStatus(editorStatus, "JSON is invalid. Fix the formatting before saving.", true);
      return null;
    }
  };

  const addProjectTemplate = () => {
    const nextData = store.normalizeData({
      ...data,
      projects: [
        ...data.projects,
        {
          id: store.createId(),
          title: "New Project",
          category: "software",
          type: "Project",
          description: "Describe what this project does.",
          technologies: ["HTML", "CSS"],
          highlight: "Add a strong one-line highlight.",
          image: "image/LAB.JPG",
          galleryTitle: "New Project",
          galleryDescription: "Write the gallery-facing version of this project story.",
          githubUrl: "",
          linkedinUrl: "",
          liveUrl: ""
        }
      ]
    });

    persistData(nextData, "Project template added.");
  };

  quickForm?.addEventListener("submit", (event) => {
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
        portrait: quickFields.portrait.value,
        githubUrl: quickFields.github.value,
        linkedinUrl: quickFields.linkedin.value,
        instagramUrl: quickFields.instagram.value
      },
      contact: {
        ...data.contact,
        availability: quickFields.availability.value
      }
    });

    persistData(nextData, "Quick fields saved.");
  });

  document.getElementById("add-project-btn")?.addEventListener("click", addProjectTemplate);

  projectList?.addEventListener("click", (event) => {
    const button = event.target.closest("[data-action]");
    if (!button) {
      return;
    }

    const action = button.dataset.action;
    const projectId = button.dataset.id;

    if (action === "delete") {
      const nextProjects = data.projects.filter((project) => project.id !== projectId);
      persistData({ ...data, projects: nextProjects }, "Project deleted.");
      return;
    }

    if (action === "focus") {
      const marker = `"id": "${projectId}"`;
      const position = contentEditor.value.indexOf(marker);
      contentEditor.focus();
      if (position >= 0) {
        contentEditor.setSelectionRange(position, position + marker.length);
      }
      setStatus(editorStatus, "Focused on the selected project entry in JSON.", false);
    }
  });

  document.getElementById("format-json-btn")?.addEventListener("click", () => {
    const parsed = parseEditorData();
    if (!parsed) {
      return;
    }
    data = parsed;
    syncAll();
    setStatus(editorStatus, "JSON formatted.", false);
  });

  document.getElementById("save-json-btn")?.addEventListener("click", () => {
    const parsed = parseEditorData();
    if (!parsed) {
      return;
    }
    persistData(parsed, "JSON saved. Portfolio V5 is updated.");
  });

  document.getElementById("export-json-btn")?.addEventListener("click", () => {
    const blob = new Blob([store.exportJson(data)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "portfolio-v5-content.json";
    link.click();
    URL.revokeObjectURL(url);
    setStatus(editorStatus, "JSON exported.", false);
  });

  document.getElementById("import-json-btn")?.addEventListener("click", () => {
    importFileInput?.click();
  });

  importFileInput?.addEventListener("change", async () => {
    const file = importFileInput.files?.[0];
    if (!file) {
      return;
    }

    const text = await file.text();
    try {
      const parsed = store.normalizeData(JSON.parse(text));
      persistData(parsed, "JSON imported successfully.");
      importFileInput.value = "";
    } catch (error) {
      setStatus(editorStatus, "Imported file is not valid JSON for this portfolio.", true);
    }
  });

  document.getElementById("reset-json-btn")?.addEventListener("click", () => {
    if (!window.confirm("Reset Portfolio V5 content to defaults?")) {
      return;
    }
    data = store.reset();
    syncAll();
    setStatus(editorStatus, "Portfolio V5 reset to defaults.", false);
    setStatus(quickStatus, "Portfolio V5 reset to defaults.", false);
  });

  const updateQualityFromPreset = () => {
    const preset = imagePresets[imagePreset.value] || imagePresets.project;
    imageQuality.value = String(Math.round(preset.quality * 100));
    imageQualityValue.textContent = `${imageQuality.value}%`;
  };

  imagePreset?.addEventListener("change", updateQualityFromPreset);
  imageQuality?.addEventListener("input", () => {
    imageQualityValue.textContent = `${imageQuality.value}%`;
  });

  imageFileInput?.addEventListener("change", async () => {
    const file = imageFileInput.files?.[0];
    optimizedAsset = null;

    if (originalPreviewUrl) {
      URL.revokeObjectURL(originalPreviewUrl);
      originalPreviewUrl = "";
    }

    if (!file) {
      renderPreview(originalImageFrame, originalImageMeta, "", "");
      renderPreview(optimizedImageFrame, optimizedImageMeta, "", "");
      setStatus(imageStatus, "Select an image to begin processing.", false);
      return;
    }

    const previewUrl = URL.createObjectURL(file);
    originalPreviewUrl = previewUrl;
    const previewImage = await loadImageElement(previewUrl);
    renderPreview(
      originalImageFrame,
      originalImageMeta,
      previewUrl,
      `${previewImage.width} x ${previewImage.height} • ${formatBytes(file.size)}`
    );
    renderPreview(optimizedImageFrame, optimizedImageMeta, "", "");
    setStatus(imageStatus, "Image loaded. Click Process Image to optimize it.", false);
  });

  processImageBtn?.addEventListener("click", async () => {
    const file = imageFileInput?.files?.[0];
    if (!file) {
      setStatus(imageStatus, "Choose an image first.", true);
      return;
    }

    setStatus(imageStatus, "Processing image...", false);

    try {
      optimizedAsset = await optimizeImageFile(file, imagePreset.value, Number(imageQuality.value));
      renderPreview(
        optimizedImageFrame,
        optimizedImageMeta,
        optimizedAsset.dataUrl,
        `${optimizedAsset.width} x ${optimizedAsset.height} • ${formatBytes(optimizedAsset.outputSize)}`
      );

      const savings = optimizedAsset.originalSize - optimizedAsset.outputSize;
      const savingsText =
        savings > 0 ? `Saved ${formatBytes(savings)} compared to the original.` : "Optimized version is ready.";

      setStatus(
        imageStatus,
        `${imagePresets[imagePreset.value].label} preset applied. ${savingsText}`,
        false
      );
    } catch (error) {
      optimizedAsset = null;
      setStatus(imageStatus, "Image processing failed. Try a different file.", true);
    }
  });

  applyImageBtn?.addEventListener("click", () => {
    if (!optimizedAsset) {
      setStatus(imageStatus, "Process an image before applying it.", true);
      return;
    }

    const target = imageTarget.value;
    if (!target) {
      setStatus(imageStatus, "Choose where the image should be used.", true);
      return;
    }

    let nextData = { ...data };

    if (target === "profile.portrait") {
      nextData = {
        ...data,
        profile: {
          ...data.profile,
          portrait: optimizedAsset.dataUrl
        }
      };
    } else if (target.startsWith("project:")) {
      const projectId = target.replace("project:", "");
      nextData = {
        ...data,
        projects: data.projects.map((project) =>
          project.id === projectId
            ? {
                ...project,
                image: optimizedAsset.dataUrl
              }
            : project
        )
      };
    }

    persistData(nextData, "Optimized image applied to the selected target.");
    setStatus(imageStatus, "Optimized image applied to the selected target.", false);
  });

  downloadImageBtn?.addEventListener("click", () => {
    if (!optimizedAsset) {
      setStatus(imageStatus, "Process an image before downloading it.", true);
      return;
    }

    const url = URL.createObjectURL(optimizedAsset.blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${optimizedAsset.fileName}-optimized.webp`;
    link.click();
    URL.revokeObjectURL(url);
    setStatus(imageStatus, "Optimized image downloaded.", false);
  });

  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("active"));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );
    revealItems.forEach((item) => observer.observe(item));
  }

  navToggle?.addEventListener("click", () => {
    const isOpen = navPanel?.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navPanel?.classList.remove("open");
      navToggle?.setAttribute("aria-expanded", "false");
    });
  });

  initTheme();
  updateQualityFromPreset();
  syncAll();
});
