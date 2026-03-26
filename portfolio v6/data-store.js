(function () {
  const STORAGE_KEY = "portfolio-v5-content";
  let memoryData = null;

  const createId = () => `project-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;

  const defaultData = {
    profile: {
      name: "Aditya Sharma",
      label: "Full Stack Developer & Innovator",
      heroEyebrow: "Full Stack Developer",
      heroTitle: "Hey! I'm Aditya Sharma",
      heroLead:
        "Passionate Full Stack Developer and Innovator with a strong foundation in programming, embedded systems, Designing and 3D printing.",
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
        "A Full Stack Developer.",
        "An Innovator.",
        "A Hardware Enthusiast.",
        "A Problem Solver."
      ]
    },
    about: {
      heading: "About Me",
      paragraphs: [
        "As a Computer Science student with a deep interest in intelligent systems, I work at the intersection of code and hardware. Using platforms like Raspberry Pi, ESP32, Arduino, and Jetson Nano, I build end-to-end solutions that combine embedded computing with real-time decision-making.",
        "My foundation in Computer Science extends beyond hardware integration into the core principles of computing—data structures, algorithms, operating systems, computer networks, and software architecture. I’ve explored AI and NLP concepts through projects involving speech recognition, classification, and text analysis, and I actively experiment with deploying lightweight models on edge devices.",
        "I enjoy building systems that are efficient, responsive, and dependable—whether it’s a real-time robotics project, an AI-powered tool, or a sensor-driven device. I focus on clarity, usability, and performance, ensuring each solution is designed to work seamlessly in practical environments.",
        "I thrive in practical, collaborative environments where ideas are exchanged freely, challenges are tackled together, and learning happens through doing."
      ],
      insights: [
        {
          tag: "Goal",
          title: "Build it to matter",
          text: "I don’t just build things to work - I build them to matter."
        },
        {
          tag: "Experience",
          title: "Hardware Integration",
          text: "From syncing servo motion to live audio using Whisper AI to designing systems that run offline with low-latency responsiveness."
        },
        {
          tag: "Software",
          title: "Systems Programming",
          text: "Comfortable managing system-level programming on Linux, optimizing performance at the OS layer, and working with APIs and multithreading."
        }
      ]
    },
    skills: {
      heading: "Skills & Tools",
      capabilities: [
        {
          icon: "fas fa-code",
          title: "Programming Languages",
          text: "Python, C, C++, Java, JavaScript, C#"
        },
        {
          icon: "fas fa-globe",
          title: "Web Technologies & Frameworks",
          text: "HTML, CSS, Bootstrap, NodeJS, React.js, Flask, RESTful APIs, Client-Server Architecture"
        },
        {
          icon: "fas fa-microchip",
          title: "Embedded & Platforms",
          text: "ROS 2, Arduino, Raspberry Pi, Ubuntu, Power BI, MySQL"
        },
        {
          icon: "fas fa-brain",
          title: "AI, ML & Computer Vision",
          text: "TensorFlow, PyTorch, OpenCV, Scikit-learn, Numpy, Pandas, LangChain, Whisper AI"
        },
        {
          icon: "fas fa-users",
          title: "Soft Skills & Methodologies",
          text: "Leadership, Team Collaboration, Agile Methodology, Mentorship, Problem-Solving, Critical Thinking"
        },
        {
          icon: "fas fa-language",
          title: "Spoken Languages",
          text: "English, Hindi, Himachali (Native)"
        }
      ],
      tools: [
        "VS Code", "GitHub", "Git", "Tinkercad", "Ubuntu", "Raspberry Pi", "Arduino", "ROS 2"
      ]
    },
    journey: {
      heading: "Education, Experience & Recognition",
      education: [
        {
          title: "B.Tech in Computer Science & Engineering (CGPA: 8.76)",
          place: "Presidency University, Bengaluru",
          year: "Aug 2023 - Present"
        },
        {
          title: "Diploma in Computer Science & Engineering",
          place: "RR Polytechnic, Bengaluru",
          year: "Apr 2018 - Mar 2023"
        }
      ],
      highlights: [
        "Best Innovator Award (2025) - For outstanding leadership and robotics innovation at MakerSpace.",
        "Student Project Expo 2024 - Top 25 among 450 Projects (Showcased Humanoid AI & Healthcare Platform).",
        "Anveshan 2024 (South Zone) - Represented Presidency University for robotics research.",
        "Core Member & Robotics Developer/Mentor at Build Club MakerSpace (Jul 2024 - Present)."
      ],
      activities: [
        "Mentored 10+ members on programming, debugging, and robotic control frameworks.",
        "The Complete Full-Stack Web Development Bootcamp",
        "Data Visualization Techniques – Infosys Springboard",
        "Machine Learning with Python – SimpliLearn SkillUP",
        "Problem Solving & DSA using Java – CodeChef",
        "Introduction to ROS 2 & Robotic Simulation"
      ]
    },
    contact: {
      heading: "Get In Touch",
      intro: "Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.",
      availability:
        "Mobile: +91 8217450041 | Open to connecting with fellow developers and innovators."
    },
    projects: [
      {
        id: "project-robodog",
        title: "RoboDog – AI Voice-Controlled Robotic Dog",
        category: "Robotics",
        type: "Robotics",
        description:
          "An AI-enabled quadruped robot capable of offline speech recognition using Whisper AI and Ollama.",
        technologies: ["Raspberry Pi 5", "Python", "ROS 2", "OpenCV"],
        highlight: "Integrated PCA9685 servo controller and NeoPixel LED eyes for motion and expression synchronization.",
        image: "image/humonoid eye.jpg",
        galleryTitle: "RoboDog System",
        galleryDescription:
          "A 3D-printed robotic dog functioning on offline LLMs.",
        githubUrl: "",
        linkedinUrl: "",
        liveUrl: "",
        featured: true,
        upgradeNotes: []
      },
      {
        id: "project-humanoid",
        title: "Humanoid Robot",
        category: "AI",
        type: "Robotics",
        description:
          "A semi-autonomous humanoid using ROS 2 for motion control, animation, and expressive LED features.",
        technologies: ["Raspberry Pi", "Python", "PCA9685", "NeoPixel", "HD Cameras"],
        highlight: "Implemented synchronized servo actions with API calls.",
        image: "image/humonoid eye.jpg",
        galleryTitle: "Humanoid Robot Platform",
        galleryDescription:
          "A fully integrated humanoid robot demonstrating AI and hardware synchronization.",
        githubUrl: "",
        linkedinUrl: "",
        liveUrl: "",
        featured: true,
        upgradeNotes: []
      },
      {
        id: "project-traffic",
        title: "AI Smart Traffic System",
        category: "Hardware",
        type: "Systems",
        description:
          "An object detection-based adaptive traffic controller prioritizing real-time density.",
        technologies: ["UNO Board", "Ultrasonic Sensors", "IR Sensors", "YOLO Models"],
        highlight: "Optimized frame rates and latency through resource-efficient AI processing.",
        image: "image/Path finder bot.jpg",
        galleryTitle: "Smart Traffic System",
        galleryDescription:
          "Adaptive traffic lights based on YOLO vision models.",
        githubUrl: "",
        linkedinUrl: "",
        liveUrl: "",
        featured: false,
        upgradeNotes: []
      },
      {
        id: "project-signlanguage",
        title: "Sign Language Detection System",
        category: "AI",
        type: "Software",
        description:
          "A gesture recognition system built to translate hand signs into text.",
        technologies: ["Python", "OpenCV", "TensorFlow"],
        highlight: "Leveraged machine learning vision models for precise tracking.",
        image: "image/Best Innovator.jpg",
        galleryTitle: "Sign Language Translator",
        galleryDescription:
          "Real-time sign language processing using Deep Learning.",
        githubUrl: "",
        linkedinUrl: "",
        liveUrl: "",
        featured: false,
        upgradeNotes: []
      },
      {
        id: "project-portfolio",
        title: "Interactive Portfolio Website",
        category: "Web",
        type: "Software",
        description:
          "A personal portfolio website featuring smooth animations and responsive sections.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap 5"],
        highlight: "Custom-built front-end focusing on clean interaction and high-performance glassmorphism.",
        image: "image/LAB.JPG",
        galleryTitle: "Interactive Portfolio",
        galleryDescription:
          "A from-scratch web project displaying responsive, design-driven development.",
        githubUrl: "https://github.com/CodeSamhita",
        linkedinUrl: "https://www.linkedin.com/in/aditya-sharma-8679802b3",
        liveUrl: "index.html",
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
