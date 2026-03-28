(function () {
  // This file is the single shared "data brain" for the portfolio.
  // Every page reads from here so profile data, projects, and gallery collections stay in sync.
  const STORAGE_KEY = "portfolio-v6-content";
  // Increase this when we make a storage format change that needs a one-time migration.
  const SCHEMA_VERSION = 3;
  let memoryData = null;

  const createId = () => `project-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  // Safe fallback content used when JSON files or local storage are unavailable.
  const defaultDataFallback = {
    schemaVersion: SCHEMA_VERSION,
    profile: {
      name: "Aditya Sharma",
      label: "Full Stack Developer",
      heroEyebrow: "Full Stack Developer",
      heroTitle: "Hey! I'm Aditya Sharma",
      heroLead: "Passionate Full Stack Developer and Innovator.",
      statusLabel: "Currently",
      statusText: "B.Tech CSE student",
      locationLabel: "Based in",
      locationText: "Bengaluru, Karnataka",
      portrait: "profile.png",
      resumeUrl: "resume.html",
      email: "adisharma102000@gmail.com",
      languages: [],
      focusAreas: []
    },
    about: { heading: "About Me", paragraphs: [], insights: [] },
    skills: { heading: "Skills", capabilities: [], tools: [] },
    journey: { heading: "Experience", education: [], highlights: [], activities: [] },
    contact: { heading: "Contact", intro: "", availability: "" },
    projects: [],
    gallery: []
  };

  const deepClone = (value) => JSON.parse(JSON.stringify(value));

  // Turn a human title like "Interactive Portfolio Website" into
  // a folder-safe slug like "interactive-portfolio-website".
  const slugify = (value) => {
    const normalized = String(value || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");

    return normalized || "untitled-collection";
  };

  const normalizeGalleryFolder = (folder, title) => {
    // If a folder is missing, we build one automatically from the title.
    // If the user only gave the last folder name, we attach it to image/gallery.
    const normalized = String(folder || "")
      .trim()
      .replace(/\\/g, "/")
      .replace(/\/+$/g, "");

    if (!normalized) {
      return `image/gallery/${slugify(title)}`;
    }

    return normalized.includes("/") ? normalized : `image/gallery/${normalized}`;
  };

  const normalizeStringArray = (value) =>
    Array.isArray(value)
      ? value.map((item) => String(item || "").trim()).filter(Boolean)
      : [];

  // Make sure every project always has the fields the site expects.
  const normalizeProjects = (projects) =>
    Array.isArray(projects)
      ? projects.map((project) => ({
          id: String(project.id || createId()),
          title: String(project.title || "Untitled Project"),
          category: String(project.category || "software").toLowerCase(),
          type: String(project.type || "Project"),
          description: String(project.description || ""),
          technologies: normalizeStringArray(project.technologies),
          highlight: String(project.highlight || ""),
          image: String(project.image || "image/placeholder.jpg"),
          galleryTitle: String(project.galleryTitle || project.title || ""),
          galleryDescription: String(project.galleryDescription || project.description || ""),
          githubUrl: String(project.githubUrl || ""),
          linkedinUrl: String(project.linkedinUrl || ""),
          liveUrl: String(project.liveUrl || ""),
          featured: Boolean(project.featured),
          upgradeNotes: normalizeStringArray(project.upgradeNotes)
        }))
      : [];

  const normalizeGalleryImages = (images, legacyImage) => {
    // Gallery images may come from older formats, plain strings, or objects.
    // We flatten those into one clean array of image references.
    const normalized = Array.isArray(images)
      ? images
          .map((item) => {
            if (typeof item === "string") {
              return String(item || "").trim();
            }

            if (item && typeof item === "object") {
              return String(item.src || item.file || item.path || "").trim();
            }

            return "";
          })
          .filter(Boolean)
      : [];

    const fallbackImage = String(legacyImage || "").trim();
    if (!normalized.length && fallbackImage) {
      normalized.push(fallbackImage);
    }

    return normalized;
  };

  const normalizeGalleryNotes = (notes, legacyHighlights) => {
    const preferredNotes = Array.isArray(notes) ? (notes.length ? notes : legacyHighlights) : notes || legacyHighlights;
    return normalizeStringArray(preferredNotes);
  };

  const getGalleryImages = (item) => normalizeGalleryImages(item?.images, item?.image);

  const resolveGalleryImage = (item, imageRef) => {
    // If the image is already a full path or a data URL, keep it as-is.
    // Otherwise, join it with the collection folder.
    const file = String(imageRef || "").trim();
    if (!file) {
      return "image/placeholder.jpg";
    }

    if (/^(data:|https?:|blob:)/i.test(file) || file.includes("/")) {
      return file;
    }

    const folder = normalizeGalleryFolder(item?.folder, item?.title || "");
    return folder ? `${folder}/${file}` : file;
  };

  const normalizeGallery = (galleryItems) =>
    Array.isArray(galleryItems)
      ? galleryItems.map((item) => {
          // Each collection becomes one consistent object shape for the whole site.
          const title = String(item.title || "Untitled Collection");
          return {
            id: String(item.id || createId()),
            title,
            description: String(item.description || ""),
            folder: normalizeGalleryFolder(item.folder, title),
            technologies: normalizeStringArray(item.technologies),
            tags: normalizeStringArray(item.tags),
            notes: normalizeGalleryNotes(item.notes, item.highlights),
            images: normalizeGalleryImages(item.images, item.image)
          };
        })
      : [];

  const getGalleryMergeKey = (item) => normalizeGalleryFolder(item?.folder, item?.title || "").toLowerCase();

  const mergeGalleryCollections = (preferredGallery, fallbackGallery) => {
    // During migration, we keep the user's saved collections when they exist,
    // but we can also fill gaps from the file-based defaults.
    const merged = new Map();

    normalizeGallery(fallbackGallery).forEach((item) => {
      merged.set(getGalleryMergeKey(item), item);
    });

    normalizeGallery(preferredGallery).forEach((item) => {
      merged.set(getGalleryMergeKey(item), item);
    });

    return [...merged.values()];
  };

  const normalizeData = (input) => {
    // This is the main cleanup step. No matter what shape comes in,
    // we return one predictable structure for the site.
    const source = input && typeof input === "object" ? input : {};
    const normalized = deepClone(defaultDataFallback);
    normalized.schemaVersion = SCHEMA_VERSION;

    normalized.profile = {
      ...normalized.profile,
      ...(source.profile || {}),
      languages: normalizeStringArray(source.profile?.languages || normalized.profile.languages),
      focusAreas: normalizeStringArray(source.profile?.focusAreas || normalized.profile.focusAreas)
    };

    normalized.about = {
      ...normalized.about,
      ...(source.about || {}),
      paragraphs: normalizeStringArray(source.about?.paragraphs || normalized.about.paragraphs),
      insights: Array.isArray(source.about?.insights)
        ? source.about.insights.map((item) => ({
            tag: String(item.tag || ""),
            title: String(item.title || ""),
            text: String(item.text || "")
          }))
        : normalized.about.insights
    };

    normalized.skills = {
      ...normalized.skills,
      ...(source.skills || {}),
      capabilities: Array.isArray(source.skills?.capabilities)
        ? source.skills.capabilities.map((item) => ({
            icon: String(item.icon || "fas fa-star"),
            title: String(item.title || ""),
            text: String(item.text || "")
          }))
        : normalized.skills.capabilities,
      tools: normalizeStringArray(source.skills?.tools || normalized.skills.tools)
    };

    normalized.journey = {
      ...normalized.journey,
      ...(source.journey || {}),
      education: Array.isArray(source.journey?.education)
        ? source.journey.education.map((item) => ({
            title: String(item.title || ""),
            place: String(item.place || ""),
            year: String(item.year || "")
          }))
        : normalized.journey.education,
      highlights: normalizeStringArray(source.journey?.highlights || normalized.journey.highlights),
      activities: normalizeStringArray(source.journey?.activities || normalized.journey.activities)
    };

    normalized.contact = {
      ...normalized.contact,
      ...(source.contact || {})
    };

    normalized.projects = normalizeProjects(source.projects);
    normalized.gallery = normalizeGallery(source.gallery);

    return normalized;
  };

  const loadDataLocallyRaw = () => {
    // Read the user's saved edits from local storage without modifying them yet.
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) {}
    return null;
  };

  const fetchJson = async (url) => {
    // Load the default JSON files that ship with the portfolio.
    try {
      const res = await fetch(url);
      if (res.ok) return await res.json();
    } catch (e) {
      console.warn("Could not fetch JSON configs from disk:", url);
    }
    return null;
  };

  const init = async () => {
    if (memoryData) return memoryData;

    // 1. Try the user's saved browser data first.
    const localRaw = loadDataLocallyRaw();
    const local = localRaw ? normalizeData(localRaw) : null;

    try {
      // 2. Load the default file-based content from the project.
      const [profile, contact, about, skills, journey, projects, gallery] = await Promise.all([
        fetchJson("data/profile.json"),
        fetchJson("data/contact.json"),
        fetchJson("data/about.json"),
        fetchJson("data/skills.json"),
        fetchJson("data/journey.json"),
        fetchJson("data/projects.json"),
        fetchJson("data/gallery.json")
      ]);

      const fetchedData = normalizeData({ 
        profile: profile || undefined, 
        contact: contact || undefined, 
        about: about || undefined, 
        skills: skills || undefined, 
        journey: journey || undefined, 
        projects: projects || undefined, 
        gallery: gallery || undefined 
      });

      if (local) {
        // 3. Merge browser edits with file-based content.
        // Gallery prefers the file version so Gallery Studio changes saved to disk win over stale local data.
        const migrated = normalizeData({
          ...fetchedData,
          ...local,
          profile: local.profile,
          contact: local.contact,
          about: local.about,
          skills: local.skills,
          journey: local.journey,
          projects: local.projects,
          gallery: mergeGalleryCollections(fetchedData.gallery, local.gallery),
          schemaVersion: SCHEMA_VERSION
        });

        memoryData = migrated;
        try {
          window.localStorage.setItem(STORAGE_KEY, JSON.stringify(migrated));
        } catch (error) {}
        return migrated;
      }

      memoryData = fetchedData;
      return fetchedData;
    } catch (e) {
      // 4. If file loading fails, fall back to local data or the hardcoded defaults.
      memoryData = local || normalizeData(defaultDataFallback);
      return memoryData;
    }
  };

  const load = () => {
    return memoryData || normalizeData(defaultDataFallback);
  };

  const save = (data) => {
    // Save normalized content back into browser storage.
    const normalized = normalizeData(data);
    memoryData = deepClone(normalized);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    } catch (error) {}
    return normalized;
  };

  const reset = () => {
    // Clear browser-saved edits and go back to defaults.
    memoryData = null;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (error) {}
    return normalizeData(defaultDataFallback);
  };

  const exportJson = (data) => JSON.stringify(normalizeData(data || load()), null, 2);

  window.portfolioStore = {
    // These helpers are shared so the admin page and public gallery
    // both build image paths in the same way.
    storageKey: STORAGE_KEY,
    defaults: deepClone(defaultDataFallback),
    createId,
    slugify,
    buildGalleryFolder: (title) => normalizeGalleryFolder("", title),
    getGalleryImages,
    resolveGalleryImage,
    init,
    load,
    save,
    reset,
    exportJson,
    normalizeData
  };
})();
