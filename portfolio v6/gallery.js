document.addEventListener("DOMContentLoaded", async () => {
  // This file controls the public gallery page:
  // it loads collections, renders the cards, and powers the image modal.
  const store = window.portfolioStore;
  const THEME_KEY = "portfolio-v5-theme";
  const collectionsRoot = document.getElementById("gallery-collections");
  const collectionCount = document.getElementById("gallery-collection-count");
  const imageCount = document.getElementById("gallery-image-count");
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const progressBar = document.getElementById("progressBar");
  const modal = document.getElementById("gallery-modal");
  const modalImage = document.getElementById("gallery-modal-image");
  const modalMeta = document.getElementById("gallery-modal-meta");
  const modalTitle = document.getElementById("gallery-modal-title");
  const modalDescription = document.getElementById("gallery-modal-description");
  const modalFolder = document.getElementById("gallery-modal-folder");
  const modalTechnologiesSection = document.getElementById("gallery-modal-technologies-section");
  const modalTechnologies = document.getElementById("gallery-modal-technologies");
  const modalTags = document.getElementById("gallery-modal-tags");
  const modalNotesSection = document.getElementById("gallery-modal-notes-section");
  const modalNotes = document.getElementById("gallery-modal-notes");
  const modalThumbnails = document.getElementById("gallery-modal-thumbnails");

  const escapeHtml = (value) =>
    String(value || "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");

  const data = store ? await store.init() : { gallery: [] };

  // Small shared helpers from the store keep the public page aligned
  // with the admin page's folder and image rules.
  const getGalleryImages = (item) =>
    typeof store?.getGalleryImages === "function"
      ? store.getGalleryImages(item)
      : (Array.isArray(item?.images) ? item.images : []);

  const resolveGalleryImage = (item, imageRef) =>
    typeof store?.resolveGalleryImage === "function"
      ? store.resolveGalleryImage(item, imageRef)
      : String(imageRef || "").trim();

  const getCollectionFolder = (item) =>
    String(
      item?.folder ||
        (typeof store?.buildGalleryFolder === "function" ? store.buildGalleryFolder(item?.title || "") : "")
    )
      .replace(/\\/g, "/")
      .replace(/\/$/, "");

  const normalizeCollections = () =>
    // Turn raw gallery data into ready-to-render collections.
    (Array.isArray(data.gallery) ? data.gallery : [])
      .map((collection) => {
        const folder = getCollectionFolder(collection);
        const images = getGalleryImages(collection)
          .map((image, index) => {
            const file = String(image || "").trim();
            if (!file) {
              return null;
            }

            const src = resolveGalleryImage({ ...collection, folder }, file);
            return {
              src,
              name: file,
              alt: `${collection.title || "Gallery"} image ${index + 1}`
            };
          })
          .filter(Boolean);

        return {
          id: String(collection.id || ""),
          title: String(collection.title || "Untitled Collection"),
          description: String(collection.description || ""),
          folder,
          technologies: Array.isArray(collection.technologies)
            ? collection.technologies.map((technology) => String(technology || "").trim()).filter(Boolean)
            : [],
          tags: Array.isArray(collection.tags) ? collection.tags.map((tag) => String(tag || "").trim()).filter(Boolean) : [],
          notes: Array.isArray(collection.notes) ? collection.notes.map((note) => String(note || "").trim()).filter(Boolean) : [],
          images
        };
      })
      .filter((collection) => collection.images.length);

  const collections = normalizeCollections();
  let activeCollectionIndex = -1;
  let activeImageIndex = 0;

  // Theme handling keeps gallery dark/light mode in sync with the rest of the site.
  const applyTheme = (theme) => {
    const isLight = theme === "light";
    document.body.classList.toggle("light-mode", isLight);

    if (!themeToggleBtn) {
      return;
    }

    const icon = themeToggleBtn.querySelector("i");
    if (icon) {
      icon.className = isLight ? "fas fa-moon" : "fas fa-sun";
    }
    themeToggleBtn.setAttribute("aria-label", isLight ? "Switch to dark mode" : "Switch to light mode");
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

  const renderStats = () => {
    // Update the top numbers: how many collections and how many images.
    const totalImages = collections.reduce((sum, collection) => sum + collection.images.length, 0);

    if (collectionCount) {
      collectionCount.textContent = String(collections.length).padStart(2, "0");
    }

    if (imageCount) {
      imageCount.textContent = String(totalImages).padStart(2, "0");
    }
  };

  const buildThumbnailPreview = (collection) => {
    // Show a few extra preview images on each card so users know the card has a mini album inside.
    const previewItems = collection.images.slice(0, 3);
    const hiddenCount = Math.max(collection.images.length - previewItems.length, 0);

    return `
      <div class="gallery-card-thumbs">
        ${previewItems
          .map(
            (image) => `
              <div class="gallery-card-thumb">
                <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async" />
              </div>
            `
          )
          .join("")}
        ${
          hiddenCount
            ? `<div class="gallery-card-thumb gallery-card-thumb-more">+${hiddenCount}</div>`
            : ""
        }
      </div>
    `;
  };

  const renderCollections = () => {
    // Build the visible gallery cards on the page.
    if (!collectionsRoot) {
      return;
    }

    collectionsRoot.innerHTML = collections.length
      ? collections
          .map((collection, index) => {
            const cover = collection.images[0];
            return `
              <article class="gallery-card reveal-up">
                <div class="gallery-card-button" role="button" tabindex="0" data-collection-index="${index}" aria-label="Open ${escapeHtml(collection.title)} collection">
                  <div class="gallery-card-cover-wrap">
                    <img class="gallery-card-cover" src="${escapeHtml(cover.src)}" alt="${escapeHtml(cover.alt)}" loading="lazy" decoding="async" />
                    <div class="gallery-card-overlay"></div>
                    <div class="gallery-card-topline">
                      <span class="gallery-card-count">${collection.images.length} images</span>
                      <span class="gallery-card-folder-badge">${escapeHtml((collection.folder.split("/").pop() || "gallery").trim())}</span>
                    </div>
                  </div>
                  ${buildThumbnailPreview(collection)}
                  <div class="gallery-card-body">
                    <div class="gallery-card-heading">
                      <h3>${escapeHtml(collection.title)}</h3>
                      <span class="gallery-card-open">Open</span>
                    </div>
                    <p>${escapeHtml(collection.description)}</p>
                    <code class="gallery-card-folder">${escapeHtml(collection.folder)}</code>
                    ${
                      collection.technologies.length
                        ? `<div class="gallery-card-tech">${collection.technologies.map((technology) => `<span>${escapeHtml(technology)}</span>`).join("")}</div>`
                        : ""
                    }
                    ${
                      collection.tags.length
                        ? `<div class="gallery-card-tags">${collection.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("")}</div>`
                        : ""
                    }
                  </div>
                </div>
              </article>
            `;
          })
          .join("")
      : `<article class="glass-panel gallery-empty-card"><h3>No gallery collections yet</h3><p>Create a collection in Gallery Studio or add one to <code>data/gallery.json</code> and it will appear here.</p></article>`;
  };

  const updateModal = () => {
    // Refresh the big modal viewer when the user changes image or collection.
    const collection = collections[activeCollectionIndex];
    if (!collection || !modalImage) {
      return;
    }

    const currentImage = collection.images[activeImageIndex];
    if (!currentImage) {
      return;
    }

    modalImage.src = currentImage.src;
    modalImage.alt = currentImage.alt;

    if (modalMeta) {
      modalMeta.textContent = `${activeImageIndex + 1} / ${collection.images.length} images`;
    }

    if (modalTitle) {
      modalTitle.textContent = collection.title;
    }

    if (modalDescription) {
      modalDescription.textContent = collection.description;
    }

    if (modalFolder) {
      modalFolder.textContent = collection.folder;
    }

    if (modalTechnologiesSection && modalTechnologies) {
      modalTechnologiesSection.hidden = !collection.technologies.length;
      modalTechnologies.innerHTML = collection.technologies.map((technology) => `<span>${escapeHtml(technology)}</span>`).join("");
    }

    if (modalTags) {
      modalTags.hidden = !collection.tags.length;
      modalTags.innerHTML = collection.tags.map((tag) => `<span>${escapeHtml(tag)}</span>`).join("");
    }

    if (modalNotesSection && modalNotes) {
      modalNotesSection.hidden = !collection.notes.length;
      modalNotes.innerHTML = collection.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("");
    }

    if (modalThumbnails) {
      modalThumbnails.innerHTML = collection.images
        .map(
          (image, index) => `
            <button
              class="gallery-modal-thumb ${index === activeImageIndex ? "is-active" : ""}"
              type="button"
              data-thumb-index="${index}"
              aria-label="Show image ${index + 1} from ${escapeHtml(collection.title)}"
            >
              <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" loading="lazy" decoding="async" />
            </button>
          `
        )
        .join("");
    }
  };

  const openCollection = (collectionIndex, imageIndex = 0) => {
    // Open one collection and start on its selected image.
    if (!modal || !collections[collectionIndex]) {
      return;
    }

    activeCollectionIndex = collectionIndex;
    activeImageIndex = imageIndex;
    updateModal();

    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("gallery-modal-open");
  };

  const closeCollection = () => {
    // Hide the modal and return to the page.
    if (!modal) {
      return;
    }

    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("gallery-modal-open");
  };

  const stepImage = (step) => {
    // Move left or right through the images in the current collection.
    const collection = collections[activeCollectionIndex];
    if (!collection) {
      return;
    }

    activeImageIndex = (activeImageIndex + step + collection.images.length) % collection.images.length;
    updateModal();
  };

  const initCollectionEvents = () => {
    // Click and keyboard controls for cards, modal arrows, close button, and thumbnails.
    collectionsRoot?.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      const trigger = event.target.closest("[data-collection-index]");
      if (!(trigger instanceof HTMLElement)) {
        return;
      }

      openCollection(Number(trigger.dataset.collectionIndex));
    });

    collectionsRoot?.addEventListener("keydown", (event) => {
      if (!(event.target instanceof HTMLElement)) {
        return;
      }

      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const trigger = event.target.closest("[data-collection-index]");
      if (!(trigger instanceof HTMLElement)) {
        return;
      }

      event.preventDefault();
      openCollection(Number(trigger.dataset.collectionIndex));
    });

    modal?.addEventListener("click", (event) => {
      if (!(event.target instanceof Element)) {
        return;
      }

      if (event.target.closest("[data-gallery-close]")) {
        closeCollection();
        return;
      }

      const navTrigger = event.target.closest("[data-image-step]");
      if (navTrigger instanceof HTMLElement) {
        stepImage(Number(navTrigger.dataset.imageStep || 0));
        return;
      }

      const thumbTrigger = event.target.closest("[data-thumb-index]");
      if (thumbTrigger instanceof HTMLElement) {
        activeImageIndex = Number(thumbTrigger.dataset.thumbIndex || 0);
        updateModal();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (!modal?.classList.contains("is-open")) {
        return;
      }

      if (event.key === "Escape") {
        closeCollection();
      }

      if (event.key === "ArrowRight") {
        stepImage(1);
      }

      if (event.key === "ArrowLeft") {
        stepImage(-1);
      }
    });
  };

  const initReveal = () => {
    // Small scroll-in animation for the cards.
    const revealItems = document.querySelectorAll(".reveal-up");

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
      { threshold: 0.12 }
    );

    revealItems.forEach((item) => observer.observe(item));
  };

  const updateScrollUi = () => {
    // Top progress bar + back-to-top button.
    const scrollTop = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = documentHeight > 0 ? (scrollTop / documentHeight) * 100 : 0;

    if (progressBar) {
      progressBar.style.width = `${Math.min(progress, 100)}%`;
    }

    backToTopBtn?.classList.toggle("visible", scrollTop > 420);
  };

  const hideLoader = () => {
    const loader = document.getElementById("global-loader");
    loader?.classList.add("hidden");
  };

  renderStats();
  renderCollections();
  initTheme();
  initCollectionEvents();
  initReveal();
  updateScrollUi();

  backToTopBtn?.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateScrollUi, { passive: true });

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
  }
});
