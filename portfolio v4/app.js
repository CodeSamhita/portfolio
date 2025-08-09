/**
 * app.js
 * * This file consolidates all JavaScript functionality for the portfolio website.
 * It handles:
 * - Theme (Dark/Light Mode) Toggling & Persistence
 * - Typed.js Initialization
 * - Dynamic Project Loading, Filtering & Likes
 * - Interactive Modals for Projects & Skills
 * - Back to Top Button Visibility
 * - Contact Form Submission (via Formspree)
 * - Animated Statistics
 * - Lightbox for Gallery Images
 * - General UI enhancements (Scroll Progress, Fade-in Animations)
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- Element Selectors ---
    const body = document.body;
    const progressBar = document.getElementById('progressBar');
    const faders = document.querySelectorAll('.fadein');
    const toggleModeBtn = document.getElementById('toggleModeBtn');
    const backToTopBtn = document.getElementById('backToTopBtn');
    
    // --- Initial Page Setup ---
    body.classList.add('loaded');
    
    // --- Helper Functions ---
    const showMessageBox = (message, type = 'success') => {
        const messageBox = document.getElementById('messageBox');
        if (!messageBox) return;
        messageBox.textContent = message;
        messageBox.className = `message-box ${type} show`;
        setTimeout(() => {
            messageBox.classList.remove('show');
        }, 3000);
    };

    // --- Theme Manager ---
    const themeHandler = (() => {
        const icon = toggleModeBtn?.querySelector('i');

        const applyTheme = (isLight) => {
            body.classList.toggle('light-mode', isLight);
            if (icon) {
                icon.classList.toggle('fa-sun', isLight);
                icon.classList.toggle('fa-moon', !isLight);
            }
            localStorage.setItem('light-mode', isLight);
        };

        const init = () => {
            if (!toggleModeBtn) return; // Exit if the button isn't on the page
            const isLightModeStored = localStorage.getItem('light-mode') === 'true';
            applyTheme(isLightModeStored);
            toggleModeBtn.addEventListener('click', () => {
                applyTheme(!body.classList.contains('light-mode'));
            });
        };

        return { init };
    })();

    // --- Typed.js Text Animation ---
    const typedTextHandler = (() => {
        const init = () => {
            // The check for 'Typed' and the element ID is already safe.
            if (typeof Typed !== 'undefined' && document.getElementById('typed-text')) {
                new Typed('#typed-text', {
                    strings: [
                        'A Full Stack Developer.',
                        'An Innovator.',
                        'A Hardware Enthusiast.',
                        'A Problem Solver.'
                    ],
                    typeSpeed: 50,
                    backSpeed: 25,
                    backDelay: 2000,
                    startDelay: 500,
                    loop: true,
                    showCursor: true,
                    cursorChar: '|',
                });
            }
        };
        return { init };
    })();

    // --- Live Statistics Counter ---
    const statsHandler = (() => {
        const animateCounter = (element, targetValue, duration = 1500) => {
            if (!element) return;
            let startValue = 0;
            const increment = targetValue / (duration / 16);
            let currentValue = 0;

            const updateCounter = () => {
                currentValue += increment;
                if (currentValue < targetValue) {
                    element.textContent = Math.floor(currentValue);
                    requestAnimationFrame(updateCounter);
                } else {
                    element.textContent = targetValue;
                }
            };
            requestAnimationFrame(updateCounter);
        };

        const init = () => {
            const statsSection = document.getElementById('stats');
            // The check for statsSection makes this safe.
            if (statsSection) {
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting) {
                            const projectCountEl = document.getElementById('projectCount');
                            const githubReposEl = document.getElementById('githubRepos');
                            const yearsExperienceEl = document.getElementById('yearsExperience');
                            
                            animateCounter(projectCountEl, 12);
                            animateCounter(githubReposEl, 25);
                            animateCounter(yearsExperienceEl, new Date().getFullYear() - 2018);
                            
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.5 });
                observer.observe(statsSection);
            }
        };
        return { init };
    })();
    
    // --- Project Loader, Filter & Likes ---
    const projectHandler = (() => {
        const container = document.getElementById('projects-container');
        // **FIX**: If the projects container doesn't exist, this handler is not needed.
        if (!container) {
            return { init: () => {} }; // Return a dummy init function.
        }

        const loadingMsg = document.getElementById('loading-projects');
        const filters = document.getElementById('project-filters');
        const modal = new bootstrap.Modal(document.getElementById('projectDetailModal'));

        const projectData = [
            { id: "proj1", title: "Interactive Portfolio Website", category: "Web", description: "A modern, responsive portfolio website showcasing full-stack capabilities.", technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"], image: "https://placehold.co/600x400/333/ddd?text=Portfolio", demoLink: "#", githubLink: "#", challenges: "Designing a clean, user-friendly interface.", impact: "Created a highly interactive online presence.", likes: 42 },
            { id: "proj2", title: "Humanoid Bot: Voice-Controlled Lip Sync", category: "AI", description: "A humanoid robot with voice-activated mouth movements, precisely synced using Whisper AI.", technologies: ["Raspberry Pi 5", "Python", "Whisper AI", "Servos"], image: "https://placehold.co/600x400/555/eee?text=Humanoid+Bot", demoLink: "#", githubLink: "#", challenges: "Real-time audio processing and low-latency servo control.", impact: "Demonstrates advanced embedded AI and robotics integration.", likes: 128 },
            { id: "proj3", title: "Obstacle Avoidance Robot", category: "Hardware", description: "An autonomous robot designed to navigate complex environments using multiple sensors.", technologies: ["Arduino", "L298N Motor Driver", "IR & Ultrasonic Sensors"], image: "https://placehold.co/600x400/777/fff?text=Obstacle+Robot", demoLink: "#", githubLink: "#", challenges: "Implementing robust sensor fusion algorithms.", impact: "A practical application of basic robotics principles.", likes: 77 },
            { id: "proj4", title: "Lab Management System with AI Chatbot", category: "Web", description: "A web-based application for lab management, integrated with an AI chatbot for assistance.", technologies: ["Flask", "Python", "HTML/CSS", "AI Chatbot API"], image: "https://placehold.co/600x400/333/ddd?text=Lab+System", demoLink: "#", githubLink: "#", challenges: "Integrating third-party AI APIs and ensuring data consistency.", impact: "Streamlines laboratory operations.", likes: 95 }
        ];

        const renderProjects = (filter = 'all') => {
            if (!container) return;
            container.innerHTML = '';
            const filteredProjects = filter === 'all' ? projectData : projectData.filter(p => p.category === filter);
            
            if (filteredProjects.length === 0) {
                container.innerHTML = '<p class="text-center text-muted w-100">No projects found in this category.</p>';
                return;
            }

            filteredProjects.forEach(project => {
                const card = document.createElement('div');
                card.className = 'col-md-6 col-lg-6';
                card.innerHTML = `
                    <div class="project-card" data-project-id="${project.id}">
                        <h5>${project.title}</h5>
                        <p>${project.description}</p>
                        <div class="tech-icons mb-3">
                            <small>${project.technologies.join(' &middot; ')}</small>
                        </div>
                        <div class="card-footer">
                            <button class="like-btn" aria-label="Like this project">
                                <i class="far fa-heart"></i> <span class="like-count">${project.likes || 0}</span>
                            </button>
                            <button class="btn btn-sm btn-outline-primary view-details-btn">View Details</button>
                        </div>
                    </div>`;
                container.appendChild(card);
            });
        };

        const openModal = (projectId) => {
            const project = projectData.find(p => p.id === projectId);
            if (!project) return;
            
            document.getElementById('projectDetailModalLabel').textContent = project.title;
            document.getElementById('modalProjectImage').src = project.image;
            document.getElementById('modalProjectDescription').textContent = project.description;
            document.getElementById('modalProjectChallenges').textContent = project.challenges;
            document.getElementById('modalProjectImpact').textContent = project.impact;
            
            const techList = document.getElementById('modalProjectTech');
            techList.innerHTML = project.technologies.map(tech => `<li><i class="fas fa-check-circle me-2 text-primary"></i>${tech}</li>`).join('');

            const demoLink = document.getElementById('modalProjectDemoLink');
            demoLink.style.display = (project.demoLink && project.demoLink !== '#') ? 'inline-block' : 'none';
            demoLink.href = project.demoLink;

            const githubLink = document.getElementById('modalProjectGithubLink');
            githubLink.style.display = (project.githubLink && project.githubLink !== '#') ? 'inline-block' : 'none';
            githubLink.href = project.githubLink;

            modal.show();
        };

        const handleLike = (likeButton) => {
            const likeIcon = likeButton.querySelector('i');
            const likeCountSpan = likeButton.querySelector('.like-count');
            let currentLikes = parseInt(likeCountSpan.textContent);

            if (likeButton.classList.contains('liked')) {
                likeButton.classList.remove('liked');
                likeIcon.classList.replace('fas', 'far');
                likeCountSpan.textContent = currentLikes - 1;
                showMessageBox('You unliked this project.', 'info');
            } else {
                likeButton.classList.add('liked');
                likeIcon.classList.replace('far', 'fas');
                likeCountSpan.textContent = currentLikes + 1;
                showMessageBox('You liked this project!', 'success');
            }
        };

        const init = () => {
            if (loadingMsg) loadingMsg.style.display = 'none';
            renderProjects();

            filters?.addEventListener('click', (e) => {
                if (e.target.tagName === 'BUTTON') {
                    filters.querySelector('.active').classList.remove('active');
                    e.target.classList.add('active');
                    renderProjects(e.target.dataset.filter);
                }
            });

            container?.addEventListener('click', (e) => {
                const likeBtn = e.target.closest('.like-btn');
                const detailsBtn = e.target.closest('.view-details-btn');
                const card = e.target.closest('.project-card');

                if (likeBtn) {
                    e.stopPropagation();
                    handleLike(likeBtn);
                } else if (card) {
                    openModal(card.dataset.projectId);
                }
            });
        };
        
        return { init };
    })();

    // --- Skills Modal ---
    const skillsHandler = (() => {
        const skillsSection = document.getElementById('skills');
        // **FIX**: If the skills section doesn't exist, this handler is not needed.
        if (!skillsSection) {
            return { init: () => {} };
        }
        
        const modal = new bootstrap.Modal(document.getElementById('skillDetailModal'));
        const skillData = {
            "Programming Languages": { description: "Proficient in C, C++, Java, Python, HTML5, CSS3, and JavaScript.", relatedProjects: ["Interactive Portfolio Website", "Humanoid Bot"], relatedCertifications: ["30 Days of Python"] },
            "Web Technologies": { description: "Experienced in Full-Stack Development, Responsive Design, and frameworks like Flask and React.", relatedProjects: ["Interactive Portfolio Website", "Lab Management System"], relatedCertifications: [] },
            "Embedded Systems & Hardware": { description: "Hands-on experience with Arduino, ESP32, Raspberry Pi, and Jetson Nano.", relatedProjects: ["Humanoid Bot", "Obstacle Avoidance Robot"], relatedCertifications: [] },
            "AI/ML & NLP": { description: "Explored Prompt Engineering, OpenAI APIs, Whisper, and Hugging Face Transformers.", relatedProjects: ["Humanoid Bot", "Lab Management System"], relatedCertifications: [] },
            "Tools & Platforms": { description: "Comfortable with Ubuntu, Windows, Git, VS Code, and Tinkercad.", relatedProjects: [], relatedCertifications: [] },
            "Problem Solving": { description: "Strong analytical and critical thinking skills to identify and solve complex technical challenges.", relatedProjects: [], relatedCertifications: [] },
            "Creative Design": { description: "Ability to approach problems with innovative and creative design solutions.", relatedProjects: [], relatedCertifications: [] },
            "Team Collaboration": { description: "Excellent teamwork and communication skills, thriving in collaborative environments.", relatedProjects: [], relatedCertifications: [] },
            "Adaptability": { description: "Quick learner and adaptable to new technologies, tools, and challenges.", relatedProjects: [], relatedCertifications: [] }
        };

        const openModal = (skillName) => {
            const skillInfo = skillData[skillName];
            if (!skillInfo) {
                showMessageBox('Skill details not available.', 'error');
                return;
            }

            document.getElementById('skillDetailModalLabel').textContent = skillName;
            document.getElementById('skillModalDescription').textContent = skillInfo.description;
            
            const relatedProjectsList = document.getElementById('skillModalRelatedProjects');
            relatedProjectsList.innerHTML = skillInfo.relatedProjects.length > 0
                ? skillInfo.relatedProjects.map(p => `<li>${p}</li>`).join('')
                : '<li>No related projects found.</li>';

            const relatedCertsList = document.getElementById('skillModalRelatedCertifications');
            relatedCertsList.innerHTML = skillInfo.relatedCertifications.length > 0
                ? skillInfo.relatedCertifications.map(c => `<li>${c}</li>`).join('')
                : '<li>No related certifications found.</li>';

            modal.show();
        };

        const init = () => {
            skillsSection.querySelectorAll('.custom-list li').forEach(item => {
                item.addEventListener('click', () => {
                    const skillName = item.dataset.skill;
                    if (skillName) {
                        openModal(skillName);
                    }
                });
            });
        };
        
        return { init };
    })();

    // --- Contact Form ---
    const contactFormHandler = (() => {
        const form = document.getElementById('contact-form');
        // **FIX**: If the form doesn't exist, this handler is not needed.
        if (!form) {
            return { init: () => {} };
        }

        const formMessage = document.getElementById('form-message');

        const init = () => {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const formData = new FormData(form);
                formMessage.innerHTML = '<div class="text-info">Sending...</div>';

                try {
                    const response = await fetch(form.action, {
                        method: 'POST',
                        body: formData,
                        headers: { 'Accept': 'application/json' }
                    });
                    
                    if (response.ok) {
                        showMessageBox('Message sent successfully!', 'success');
                        form.reset();
                        formMessage.innerHTML = '';
                    } else {
                        throw new Error('Network response was not ok.');
                    }
                } catch (error) {
                    formMessage.innerHTML = '';
                    showMessageBox('Oops! There was a problem sending your message.', 'error');
                }
            });
        };
        return { init };
    })();
    
    // --- Gallery Lightbox ---
    const lightboxHandler = (() => {
        const lightbox = document.getElementById('lightbox');
        // This handler is safe because it checks for the lightbox element.
        if (!lightbox) {
            return { init: () => {} };
        }

        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = lightbox.querySelector('.lightbox-close');
        
        const openLightbox = (imgSrc, caption) => {
            if (!lightboxImg || !lightboxCaption) return;
            lightbox.style.display = "block";
            lightboxImg.src = imgSrc;
            lightboxCaption.innerHTML = caption;
        };
        
        const closeLightbox = () => {
            lightbox.style.display = "none";
        };

        const init = () => {
            document.querySelectorAll('.gallery-lightbox-item').forEach(item => {
                item.addEventListener('click', () => {
                    openLightbox(item.src, item.dataset.caption || item.alt);
                });
            });
            closeBtn?.addEventListener('click', closeLightbox);
            lightbox.addEventListener('click', (e) => {
                if (e.target === lightbox) closeLightbox();
            });
        };
        
        return { init };
    })();

    // --- Scroll-based UI Handlers ---
    const scrollHandler = () => {
        // Progress Bar
        if (progressBar) {
            const totalHeight = body.scrollHeight - window.innerHeight;
            const progress = (window.scrollY / totalHeight) * 100;
            progressBar.style.width = `${progress}%`;
        }

        // Back to Top Button
        if (backToTopBtn) {
            const shouldShow = window.scrollY > 300;
            backToTopBtn.classList.toggle('show', shouldShow);
        }
    };
    
    const intersectionObserverHandler = () => {
        if (faders.length === 0) return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
        
        faders.forEach(fader => observer.observe(fader));
    };

    // --- Event Listeners ---
    window.addEventListener('scroll', scrollHandler);
    backToTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    // --- Initialize All Handlers ---
    themeHandler.init();
    typedTextHandler.init();
    statsHandler.init();
    projectHandler.init();
    skillsHandler.init();
    contactFormHandler.init();
    lightboxHandler.init();
    intersectionObserverHandler();
});
