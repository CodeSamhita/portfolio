document.addEventListener("DOMContentLoaded", () => {
  const store = window.portfolioStore;
  if (!store) {
    return;
  }

  let data = store.load();

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

  syncAll();
});
