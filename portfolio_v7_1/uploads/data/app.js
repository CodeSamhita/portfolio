document.addEventListener("DOMContentLoaded", async () => {
  const store = window.portfolioStore;
  const page = document.body.dataset.page || "home";
  const data = store ? await store.init() : null;

  const progressBar = document.getElementById("progressBar");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const messageBox = document.getElementById("messageBox");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const navToggle = document.querySelector(".nav-toggle");
  const navPanel = document.querySelector(".nav-links");
  const navLinks = [...document.querySelectorAll(".nav-link")];
  const revealItems = document.querySelectorAll(".reveal-up");
  const contactForm = document.getElementById("contact-form");
  const formMessage = document.getElementById("form-message");
  const THEME_KEY = "portfolio-v5-theme";

  if (!store || !data) {
    return;
  }

  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const setText = (id, value) => {
    const node = document.getElementById(id);
    if (node) {
      node.textContent = value || "";
    }
  };

  const setImage = (id, value, fallback) => {
    const node = document.getElementById(id);
    if (node) {
      node.src = value || fallback;
    }
  };

  const showMessage = (text, type = "") => {
    if (!messageBox) {
      return;
    }

    messageBox.textContent = text;
    messageBox.className = `message-box show ${type}`.trim();
    window.clearTimeout(showMessage.timeoutId);
    showMessage.timeoutId = window.setTimeout(() => {
      messageBox.className = "message-box";
    }, 2600);
  };

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

  const toLabel = (value) =>
    String(value || "")
      .replace(/[-_]+/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

  const buildLinkButton = (url, label, iconClass) => {
    if (!url) {
      return "";
    }
    return `<a class="project-link" href="${escapeHtml(url)}" target="_blank" rel="noreferrer"><i class="${escapeHtml(iconClass)}"></i><span>${escapeHtml(label)}</span></a>`;
  };

  const buildProjectImage = (project) => {
    if (project.image) {
      return `<img class="project-image" src="${escapeHtml(project.image)}" alt="${escapeHtml(project.galleryTitle || project.title)}" />`;
    }
    return `<div class="project-image project-image-fallback">No image</div>`;
  };

  const getGalleryImages = (item) => {
    const normalized = Array.isArray(item?.images)
      ? item.images.map((image) => String(image || "").trim()).filter(Boolean)
      : [];

    if (!normalized.length && item?.image) {
      normalized.push(String(item.image || "").trim());
    }

    return normalized;
  };

  const resolveGalleryImage = (item, imageRef) => {
    const file = String(imageRef || "").trim();
    if (!file) {
      return "image/placeholder.jpg";
    }

    if (/^(data:|https?:|blob:)/i.test(file) || file.includes("/")) {
      return file;
    }

    const folder = String(item?.folder || "").replace(/\\/g, "/").replace(/\/$/, "");
    return folder ? `${folder}/${file}` : file;
  };

  const getGalleryCover = (item) => resolveGalleryImage(item, getGalleryImages(item)[0]);

  const getGalleryImageCount = (item) => getGalleryImages(item).length;

  const orderProjects = (projects) =>
    [...projects].sort((left, right) => Number(Boolean(right.featured)) - Number(Boolean(left.featured)));

  const buildProjectCard = (project, withGalleryLink = true) => {
    const actionLinks = [
      buildLinkButton(project.githubUrl, "GitHub", "fab fa-github"),
      buildLinkButton(project.linkedinUrl, "LinkedIn", "fab fa-linkedin"),
      buildLinkButton(project.liveUrl, "Open", "fas fa-arrow-up-right-from-square"),
      withGalleryLink ? `<a class="project-link" href="gallery.html"><i class="fas fa-images"></i><span>Gallery</span></a>` : ""
    ]
      .filter(Boolean)
      .join("");

    return `
      <article class="project-card ${project.featured ? "featured-project-card" : ""}">
        ${buildProjectImage(project)}
        <div class="project-content">
          <div class="project-top">
            <div>
              <span class="project-type">${escapeHtml(project.type)}</span>
              <h3>${escapeHtml(project.title)}</h3>
            </div>
          </div>
          <p>${escapeHtml(project.description)}</p>
          ${
            project.upgradeNotes?.length
              ? `
                <ul class="project-evolution">
                  ${project.upgradeNotes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
                </ul>
              `
              : ""
          }
          <div class="tech-list">
            ${project.technologies.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}
          </div>
          <div class="project-meta">
            <span>${escapeHtml(project.highlight)}</span>
          </div>
          ${actionLinks ? `<div class="project-actions">${actionLinks}</div>` : ""}
        </div>
      </article>
    `;
  };

  const renderHome = () => {
    setText("hero-eyebrow", data.profile.heroEyebrow);
    setText("hero-title", data.profile.heroTitle);
    setText("hero-role", data.profile.label);
    setText("hero-lead", data.profile.heroLead);
    setText("status-label", data.profile.statusLabel);
    setText("status-text", data.profile.statusText);
    setText("location-label", data.profile.locationLabel);
    setText("location-text", data.profile.locationText);
    if (data.profile.languages && data.profile.languages.length) {
      setText("language-text", data.profile.languages.join(", "));
    }
    setImage("hero-portrait", data.profile.portrait, "profile.png");

    const resumeLink = document.getElementById("resume-link");
    if (resumeLink) {
      resumeLink.href = data.profile.resumeUrl || "resume.html";
    }

    setText("about-heading", data.about.heading);
    setText("skills-heading", data.skills.heading);
    setText("journey-heading", data.journey.heading);
    setText("contact-heading", data.contact.heading);
    setText("contact-intro", data.contact.intro);
    setText("availability-text", data.contact.availability);

    const aboutParagraphs = document.getElementById("about-paragraphs");
    if (aboutParagraphs) {
      aboutParagraphs.innerHTML = data.about.paragraphs
        .map((paragraph) => `<p>${escapeHtml(paragraph)}</p>`)
        .join("");
    }

    const aboutInsights = document.getElementById("about-insights");
    if (aboutInsights) {
      aboutInsights.innerHTML = data.about.insights
        .map(
          (item) => `
            <article class="glass-panel insight-card">
              <span class="tag">${escapeHtml(item.tag)}</span>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>
          `
        )
        .join("") + (data.profile.languages && data.profile.languages.length ? `
        <article class="glass-panel insight-card" style="grid-column: 1 / -1; display: flex; align-items: center; justify-content: center; gap: 0.5rem; padding: 1rem;">
          <i class="fas fa-language text-primary" style="font-size: 1.5rem;"></i>
          <h3 style="margin: 0;">Languages: <span style="font-weight: 400;">${escapeHtml(data.profile.languages.join(", "))}</span></h3>
        </article>
      ` : "");
    }

    const capabilityGrid = document.getElementById("capability-grid");
    if (capabilityGrid) {
      capabilityGrid.innerHTML = data.skills.capabilities
        .map(
          (item) => `
            <article class="glass-panel capability-card">
              <i class="${escapeHtml(item.icon)}"></i>
              <h3>${escapeHtml(item.title)}</h3>
              <p>${escapeHtml(item.text)}</p>
            </article>
          `
        )
        .join("");
    }

    const toolRibbon = document.getElementById("tool-ribbon");
    if (toolRibbon) {
      toolRibbon.innerHTML = data.skills.tools.map((item) => `<span>${escapeHtml(item)}</span>`).join("");
    }

    const educationList = document.getElementById("education-list");
    if (educationList) {
      educationList.innerHTML = data.journey.education
        .map(
          (item) => `
            <div class="timeline-item">
              <strong>${escapeHtml(item.title)}</strong>
              <span>${escapeHtml(item.place)}</span>
              <small>${escapeHtml(item.year)}</small>
            </div>
          `
        )
        .join("");
    }

    const highlightsList = document.getElementById("highlights-list");
    if (highlightsList) {
      highlightsList.innerHTML = data.journey.highlights
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
    }

    const activitiesList = document.getElementById("activities-list");
    if (activitiesList) {
      activitiesList.innerHTML = data.journey.activities
        .map((item) => `<li>${escapeHtml(item)}</li>`)
        .join("");
    }

    const preview = document.getElementById("gallery-preview");
    if (preview) {
      preview.innerHTML = (data.gallery || [])
        .filter((item) => getGalleryImageCount(item))
        .slice(0, 3)
        .map(
          (item) => `
            <a class="album-card" href="gallery.html" aria-label="Open ${escapeHtml(item.title)} gallery collection">
              <img src="${escapeHtml(getGalleryCover(item))}" alt="${escapeHtml(item.title)}" />
              <div class="album-overlay">
                <div class="album-copy">
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(`${getGalleryImageCount(item)} image${getGalleryImageCount(item) === 1 ? "" : "s"}`)}</p>
                </div>
              </div>
            </a>
          `
        )
        .join("");
    }

    const contactLinks = document.getElementById("contact-links");
    if (contactLinks) {
      const links = [];

      if (data.profile.email) {
        links.push({
          href: `mailto:${data.profile.email}`,
          icon: "fas fa-envelope",
          label: data.profile.email
        });
      }

      if (data.profile.githubUrl) {
        links.push({
          href: data.profile.githubUrl,
          icon: "fab fa-github",
          label: "GitHub"
        });
      }

      if (data.profile.linkedinUrl) {
        links.push({
          href: data.profile.linkedinUrl,
          icon: "fab fa-linkedin",
          label: "LinkedIn"
        });
      }

      if (data.profile.instagramUrl) {
        links.push({
          href: data.profile.instagramUrl,
          icon: "fab fa-instagram",
          label: "Instagram"
        });
      }

      if (data.profile.whatsappUrl) {
        links.push({
          href: data.profile.whatsappUrl,
          icon: "fab fa-whatsapp",
          label: "WhatsApp"
        });
      }

      contactLinks.innerHTML = links
        .map(
          (item) => `
            <a href="${escapeHtml(item.href)}" ${item.href.startsWith("mailto:") ? "" : 'target="_blank" rel="noreferrer"'}>
              <i class="${escapeHtml(item.icon)}"></i>
              <span>${escapeHtml(item.label)}</span>
            </a>
          `
        )
        .join("");
    }

    const projectCount = document.getElementById("project-count");
    if (projectCount) {
      projectCount.dataset.counter = String(data.projects.length);
    }

    const toolCount = document.getElementById("tool-count");
    if (toolCount) {
      toolCount.dataset.counter = String(data.skills.tools.length);
    }

    renderProjectFilters(data.projects);
    renderProjects(data.projects, "all");
    initTypeCycle(data.profile.focusAreas);
    initCounters();
  };

  const renderProjectFilters = (projects) => {
    const container = document.getElementById("project-filters");
    if (!container) {
      return;
    }

    const categories = ["all", ...new Set(orderProjects(projects).map((project) => project.category))];
    container.innerHTML = categories
      .map(
        (category, index) => `
          <button class="filter-chip ${index === 0 ? "active" : ""}" type="button" data-filter="${escapeHtml(category)}">
            ${escapeHtml(category === "all" ? "All" : toLabel(category))}
          </button>
        `
      )
      .join("");

    container.addEventListener("click", (event) => {
      const button = event.target.closest("[data-filter]");
      if (!button) {
        return;
      }

      container.querySelectorAll("[data-filter]").forEach((item) => {
        item.classList.toggle("active", item === button);
      });
      renderProjects(data.projects, button.dataset.filter);
    });
  };

  const renderProjects = (projects, filter) => {
    const container = document.getElementById("projects-container");
    if (!container) {
      return;
    }

    const visible =
      filter === "all"
        ? orderProjects(projects)
        : orderProjects(projects).filter((project) => project.category === filter);

    container.innerHTML = visible.length
      ? visible.map((project) => buildProjectCard(project)).join("")
      : `<article class="glass-panel empty-card"><h3>No projects yet</h3><p>Projects will appear here once content is added.</p></article>`;
  };

  const renderGallery = () => {
    const container = document.getElementById("gallery-projects");
    if (!container) {
      return;
    }

    const galleryItems = (data.gallery || []).filter((item) => getGalleryImageCount(item));

    container.innerHTML = galleryItems.length
      ? galleryItems
          .map(
            (item) => `
              <article class="project-card">
                <img class="project-image" src="${escapeHtml(getGalleryCover(item))}" alt="${escapeHtml(item.title)}" />
                <div class="project-content">
                  <span class="project-type">${escapeHtml(`${getGalleryImageCount(item)} image${getGalleryImageCount(item) === 1 ? "" : "s"}`)}</span>
                  <h3 style="margin-top: 0;">${escapeHtml(item.title)}</h3>
                  <p style="margin-bottom: 0;">${escapeHtml(item.description)}</p>
                </div>
              </article>
            `
          )
          .join("")
      : `<article class="glass-panel empty-card"><h3>No gallery collections yet</h3><p>Gallery collections will appear here once content is added.</p></article>`;
  };

  const initCounters = () => {
    const counterElements = document.querySelectorAll("[data-counter]");
    if (!("IntersectionObserver" in window)) {
      counterElements.forEach((element) => {
        element.textContent = element.dataset.counter;
      });
      return;
    }

    const statsObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          const element = entry.target;
          const target = Number(element.dataset.counter || 0);
          const start = performance.now();
          const duration = 1200;

          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            element.textContent = Math.floor(target * progress);
            if (progress < 1) {
              requestAnimationFrame(tick);
            } else {
              element.textContent = String(target);
            }
          };

          requestAnimationFrame(tick);
          statsObserver.unobserve(element);
        });
      },
      { threshold: 0.5 }
    );

    counterElements.forEach((element) => statsObserver.observe(element));
  };

  const initTypeCycle = (phrases) => {
    const typedText = document.getElementById("typed-text");
    if (!typedText || !phrases || !phrases.length) {
      return;
    }

    let phraseIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      typedText.textContent = deleting
        ? currentPhrase.slice(0, charIndex--)
        : currentPhrase.slice(0, charIndex++);

      if (!deleting && charIndex > currentPhrase.length) {
        deleting = true;
        window.setTimeout(type, 1300);
        return;
      }

      if (deleting && charIndex <= 0) {
        deleting = false;
        charIndex = 1;
        phraseIndex = (phraseIndex + 1) % phrases.length;
      }

      window.setTimeout(type, deleting ? 45 : 85);
    };

    type();
  };

  const updateScrollUi = () => {
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollableHeight > 0 ? (window.scrollY / scrollableHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${progress}%`;
    }

    if (backToTopBtn) {
      backToTopBtn.classList.toggle("show", window.scrollY > 280);
    }

    let currentSection = "";
    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (!href || !href.startsWith("#")) {
        return;
      }
      const section = document.querySelector(href);
      if (!section) {
        return;
      }
      const rect = section.getBoundingClientRect();
      if (rect.top <= 160 && rect.bottom >= 160) {
        currentSection = href;
      }
    });

    navLinks.forEach((link) => {
      if (link.getAttribute("href")?.startsWith("#")) {
        link.classList.toggle("active", link.getAttribute("href") === currentSection);
      }
    });
  };

  const initReveal = () => {
    if (!("IntersectionObserver" in window)) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  const hideLoader = () => {
    const loader = document.getElementById("global-loader");
    if (loader) loader.classList.add("hidden");
  };
  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader);

  if (page === "home") {
    renderHome();
  }

  if (page === "gallery") {
    renderGallery();
  }

  initTheme();
  initReveal();
  updateScrollUi();

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

  window.addEventListener("scroll", updateScrollUi, { passive: true });
  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (contactForm.action.includes("YOUR_FORM_ID")) {
      if (formMessage) {
        formMessage.textContent = "Add your Formspree form ID to activate this form.";
      }
      showMessage("Contact form still needs your Formspree ID.", "error");
      return;
    }

    const formData = new FormData(contactForm);
    if (formMessage) {
      formMessage.textContent = "Sending message...";
    }

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        throw new Error("Unable to send");
      }

      contactForm.reset();
      if (formMessage) {
        formMessage.textContent = "Message sent successfully.";
      }
      showMessage("Message sent successfully.");
    } catch (error) {
      if (formMessage) {
        formMessage.textContent = "There was a problem sending your message.";
      }
      showMessage("There was a problem sending your message.", "error");
    }
  });
});
