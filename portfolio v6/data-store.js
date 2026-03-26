(function () {
  const STORAGE_KEY = "portfolio-v6-content";
  let memoryData = null;

  const createId = () => `project-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  const defaultDataFallback = {
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

  const normalizeStringArray = (value) =>
    Array.isArray(value)
      ? value.map((item) => String(item || "").trim()).filter(Boolean)
      : [];

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

  const normalizeGallery = (galleryItems) =>
    Array.isArray(galleryItems)
      ? galleryItems.map((item) => ({
          id: String(item.id || createId()),
          title: String(item.title || "Untitled Image"),
          description: String(item.description || ""),
          image: String(item.image || "image/placeholder.jpg")
        }))
      : [];

  const normalizeData = (input) => {
    const source = input && typeof input === "object" ? input : {};
    const normalized = deepClone(defaultDataFallback);

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

  const loadDataLocally = () => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) return normalizeData(JSON.parse(raw));
    } catch (e) {}
    return null;
  };

  const fetchJson = async (url) => {
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

    // First try localStorage
    const local = loadDataLocally();
    if (local) {
      memoryData = local;
      return local;
    }

    // Try fetching from individual JSON config files
    try {
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

      memoryData = fetchedData;
      return fetchedData;
    } catch (e) {
      return normalizeData(defaultDataFallback);
    }
  };

  const load = () => {
    return memoryData || normalizeData(defaultDataFallback);
  };

  const save = (data) => {
    const normalized = normalizeData(data);
    memoryData = deepClone(normalized);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    } catch (error) {}
    return normalized;
  };

  const reset = () => {
    memoryData = null;
    try { window.localStorage.removeItem(STORAGE_KEY); } catch (error) {}
    return normalizeData(defaultDataFallback);
  };

  const exportJson = (data) => JSON.stringify(normalizeData(data || load()), null, 2);

  window.portfolioStore = {
    storageKey: STORAGE_KEY,
    defaults: deepClone(defaultDataFallback),
    createId,
    init,
    load,
    save,
    reset,
    exportJson,
    normalizeData
  };
})();
