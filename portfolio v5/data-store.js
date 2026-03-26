(function () {
  const STORAGE_KEY = "portfolio-v5-content";
  let memoryData = null;

  const createId = () => `project-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  const defaultData = {
    profile: {
      name: "Aditya Sharma",
      label: "B.Tech Computer Science Student | Developer | Robotics Builder",
      heroEyebrow: "B.Tech Student x Software x Intelligent Systems",
      heroTitle: "B.Tech Computer Science student building software, systems, and robotics.",
      heroLead:
        "I am Aditya Sharma, a B.Tech Computer Science student at Presidency University, Bengaluru. I focus on software development, embedded systems, robotics, and product-style builds that solve practical problems and keep improving with each version.",
      statusLabel: "Currently",
      statusText: "B.Tech CSE student at Presidency University",
      locationLabel: "Based in",
      locationText: "Bengaluru, Karnataka, India",
      portrait: "profile.png",
      resumeUrl: "resume.html",
      email: "adisharma102000@gmail.com",
      githubUrl: "https://github.com/CodeSamhita",
      linkedinUrl: "https://www.linkedin.com/in/aditya-sharma-8679802b3",
      instagramUrl: "https://www.instagram.com/visionary_adi?igsh=MjI4Z2N3MzZxYnFk",
      focusAreas: [
        "Full-stack systems",
        "Robotics prototypes",
        "Embedded intelligence",
        "Interface-driven tools"
      ]
    },
    about: {
      heading: "Code, hardware, and design working together.",
      paragraphs: [
        "I work at the edge where digital experiences meet physical systems. From embedded controllers and robotics to responsive interfaces and workflow tools, I enjoy turning complex ideas into something clear, stable, and usable.",
        "My toolkit spans Raspberry Pi, ESP32, Arduino, Jetson Nano, Python, JavaScript, and modern web interfaces. I am especially interested in systems that need to be responsive, efficient, and practical in constrained environments.",
        "What matters most to me is impact. I like products that solve a real problem, communicate clearly, and still carry a sense of craft."
      ],
      insights: [
        {
          tag: "Strength",
          title: "End-to-end thinking",
          text: "I can move from sensor logic and hardware integration to frontend polish and user flow."
        },
        {
          tag: "Approach",
          title: "Fast iteration, clean delivery",
          text: "I prototype quickly, refine structure, and care about the final feel as much as the function."
        },
        {
          tag: "Mindset",
          title: "Build it to matter",
          text: "I focus on useful systems with strong performance, clarity, and a reason to exist."
        }
      ]
    },
    skills: {
      heading: "Skills arranged around what I actually build.",
      capabilities: [
        {
          icon: "fas fa-code",
          title: "Software Development",
          text: "Python, JavaScript, Java, C, C++, HTML, CSS, responsive web apps, APIs, and full-stack workflows."
        },
        {
          icon: "fas fa-microchip",
          title: "Embedded and Robotics",
          text: "ESP32, Arduino, Raspberry Pi, Jetson Nano, sensor integration, actuator control, and hardware debugging."
        },
        {
          icon: "fas fa-brain",
          title: "AI and Intelligent Systems",
          text: "OpenAI APIs, Whisper, NLP workflows, edge-device experimentation, and automation-oriented problem solving."
        },
        {
          icon: "fas fa-compass-drafting",
          title: "Design and Presentation",
          text: "UI direction, visual polish, media tooling, motion details, and experiences that feel structured and alive."
        }
      ],
      tools: [
        "Raspberry Pi",
        "ESP32",
        "Arduino",
        "Jetson Nano",
        "React",
        "Flask",
        "Bootstrap",
        "OpenAI APIs",
        "Whisper",
        "Git"
      ]
    },
    journey: {
      heading: "Education, recognition, and the communities that shaped me.",
      education: [
        {
          title: "B.Tech in Computer Science and Engineering",
          place: "Presidency University, Bengaluru",
          year: "2023 - Expected 2026"
        },
        {
          title: "Diploma in Computer Science and Engineering",
          place: "RR Polytechnic, Bengaluru",
          year: "2018 - 2022"
        },
        {
          title: "Sri Chaitanya Techno School",
          place: "Bengaluru",
          year: "2016 - 2018"
        }
      ],
      highlights: [
        "Best Mentor, WALL-E Project at Presidency University",
        "1st Prize in Coding, Photo Editing, and Treasure Hunt competitions",
        "Hands-on learning in cybersecurity, AWS, Python, and data exploration",
        "Participation in innovation and research programs including IITM and Anveshan"
      ],
      activities: [
        "Core member of the Build Club at MakerSpace, Presidency University",
        "Envision Program 2025 innovation workshop at IIT Madras",
        "Anveshan 2024 student research convention participant",
        "Innovate X 2025 national level tech fest contributor"
      ]
    },
    contact: {
      heading: "Open to collaboration, product work, and ambitious technical builds.",
      intro: "Use the form below if you want to discuss a project, a build idea, or a collaboration.",
      availability:
        "Software products, embedded systems, robotics work, student innovation, and experimental prototypes."
    },
    projects: [
      {
        id: "project-portfolio",
        title: "Portfolio V5: Responsive Content Platform",
        category: "software",
        type: "Flagship Build",
        description:
          "This portfolio is also a product project. Each major version upgrade introduces new structure, responsive layout behavior, editable content systems, and presentation improvements instead of being only a visual refresh.",
        technologies: ["HTML", "CSS", "JavaScript", "Responsive CSS", "Local JSON Store", "Content Studio"],
        highlight: "Each upgrade adds new technology and makes the portfolio behave more like a maintainable product.",
        image: "image/LAB.JPG",
        galleryTitle: "Portfolio V5: Responsive Content Platform",
        galleryDescription:
          "A versioned portfolio build where every upgrade introduces new implementation layers such as improved responsiveness, structured data rendering, editor tooling, and cleaner project storytelling.",
        githubUrl: "https://github.com/CodeSamhita",
        linkedinUrl: "https://www.linkedin.com/in/aditya-sharma-8679802b3",
        liveUrl: "index.html",
        featured: true,
        upgradeNotes: [
          "Early versions focused on static presentation and section layout.",
          "Later upgrades introduced stronger responsiveness, reusable styling, and animated UI patterns.",
          "V5 adds shared data rendering, a gallery system, and an editor studio for add, edit, delete, import, and export workflows."
        ]
      },
      {
        id: "project-humanoid",
        title: "Humanoid Bot Lip Sync",
        category: "robotics",
        type: "Robotics",
        description:
          "A humanoid robotics experiment using audio processing and synchronized actuator control to produce expressive speech motion.",
        technologies: ["Raspberry Pi 5", "Python", "Whisper", "Servo Control"],
        highlight: "Combines AI-assisted audio workflows with hardware response.",
        image: "image/Humonoid.jpg",
        galleryTitle: "Humanoid Bot Lip Sync",
        galleryDescription:
          "A robotics build focused on voice-linked motion, low-latency response, and expressive interaction.",
        githubUrl: "",
        linkedinUrl: "https://www.linkedin.com/in/aditya-sharma-8679802b3",
        liveUrl: "",
        featured: false,
        upgradeNotes: []
      },
      {
        id: "project-navigation",
        title: "Obstacle and Path Navigation Bot",
        category: "systems",
        type: "Systems",
        description:
          "A navigation-focused robot designed to improve movement decisions using multiple sensors and practical route logic.",
        technologies: ["Arduino", "Sensors", "Motor Driver", "Embedded Logic"],
        highlight: "Focused on usable automation and efficient navigation.",
        image: "image/Path finder bot.jpg",
        galleryTitle: "Path Navigation Bot",
        galleryDescription:
          "A practical hardware system built to reduce navigation effort through sensor-driven logic.",
        githubUrl: "",
        linkedinUrl: "",
        liveUrl: "",
        featured: false,
        upgradeNotes: []
      },
      {
        id: "project-lab",
        title: "Lab Management with AI Assistance",
        category: "software",
        type: "Software",
        description:
          "A management interface for lab workflows that pairs operational tooling with conversational support.",
        technologies: ["Flask", "Python", "HTML", "Automation"],
        highlight: "Brings clarity to process-heavy environments.",
        image: "image/Best Innovator.jpg",
        galleryTitle: "Lab Management with AI Assistance",
        galleryDescription:
          "A software concept designed to streamline operations while adding AI-supported guidance for users.",
        githubUrl: "",
        linkedinUrl: "",
        liveUrl: "",
        featured: false,
        upgradeNotes: []
      }
    ]
  };

  const deepClone = (value) => JSON.parse(JSON.stringify(value));
  const defaultProjectsById = Object.fromEntries(defaultData.projects.map((project) => [project.id, project]));
  const legacyProfileDefaults = {
    label: "Developer, builder, innovator",
    heroEyebrow: "Software x Robotics x Product Thinking",
    heroTitle: "Building systems that feel alive, useful, and memorable.",
    heroLead:
      "I am Aditya Sharma, a developer and innovator focused on full-stack products, embedded systems, intelligent automation, and hands-on engineering that works in the real world.",
    statusLabel: "Now building",
    statusText: "Robotics, AI tools, hardware-first workflows"
  };

  const normalizeStringArray = (value) =>
    Array.isArray(value)
      ? value.map((item) => String(item || "").trim()).filter(Boolean)
      : [];

  const normalizeProjects = (projects) =>
    Array.isArray(projects)
      ? projects.map((project) => ({
          ...(() => {
            const id = String(project.id || createId());
            const defaultsForProject = defaultProjectsById[id] || {};
            const title = String(project.title || defaultsForProject.title || "Untitled Project");
            const description = String(project.description || defaultsForProject.description || "");

            return {
              id,
              title,
              category: String(project.category || defaultsForProject.category || "software").toLowerCase(),
              type: String(project.type || defaultsForProject.type || "Project"),
              description,
              technologies: normalizeStringArray(project.technologies || defaultsForProject.technologies),
              highlight: String(project.highlight || defaultsForProject.highlight || ""),
              image: String(project.image || defaultsForProject.image || ""),
              galleryTitle: String(project.galleryTitle || defaultsForProject.galleryTitle || title),
              galleryDescription: String(
                project.galleryDescription || defaultsForProject.galleryDescription || description
              ),
              githubUrl: String(project.githubUrl || defaultsForProject.githubUrl || ""),
              linkedinUrl: String(project.linkedinUrl || defaultsForProject.linkedinUrl || ""),
              liveUrl: String(project.liveUrl || defaultsForProject.liveUrl || ""),
              featured: "featured" in project ? Boolean(project.featured) : Boolean(defaultsForProject.featured),
              upgradeNotes: normalizeStringArray(project.upgradeNotes || defaultsForProject.upgradeNotes)
            };
          })()
        }))
      : deepClone(defaultData.projects);

  const normalizeData = (input) => {
    const source = input && typeof input === "object" ? input : {};
    const normalized = deepClone(defaultData);

    normalized.profile = {
      ...normalized.profile,
      ...(source.profile || {}),
      focusAreas: normalizeStringArray(source.profile?.focusAreas || normalized.profile.focusAreas)
    };

    Object.entries(legacyProfileDefaults).forEach(([key, legacyValue]) => {
      if (!source.profile?.[key] || source.profile?.[key] === legacyValue) {
        normalized.profile[key] = defaultData.profile[key];
      }
    });

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

    return normalized;
  };

  const load = () => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) {
        return memoryData ? normalizeData(memoryData) : deepClone(defaultData);
      }
      return normalizeData(JSON.parse(raw));
    } catch (error) {
      return memoryData ? normalizeData(memoryData) : deepClone(defaultData);
    }
  };

  const save = (data) => {
    const normalized = normalizeData(data);
    memoryData = deepClone(normalized);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(normalized));
    } catch (error) {
      // Fallback keeps the page functional even when storage is restricted.
    }
    return normalized;
  };

  const reset = () => {
    memoryData = null;
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch (error) {
      // Ignore storage cleanup failures and fall back to defaults in memory.
    }
    return deepClone(defaultData);
  };

  const exportJson = (data) => JSON.stringify(normalizeData(data || load()), null, 2);

  window.portfolioStore = {
    storageKey: STORAGE_KEY,
    defaults: deepClone(defaultData),
    createId,
    load,
    save,
    reset,
    exportJson,
    normalizeData
  };
})();
