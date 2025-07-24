// project-modal.js
// Handles displaying projects from static data and opening project detail modals.

const projectsContainer = document.getElementById('projects-container');
const loadingProjectsMessage = document.getElementById('loading-projects');
const projectDetailModal = new bootstrap.Modal(document.getElementById('projectDetailModal'));

// Static Project Data (replace with your actual projects)
const staticProjects = [
    {
        id: "proj1",
        title: "Interactive Portfolio Website",
        description: "A modern, responsive portfolio website showcasing full-stack capabilities and interactive design principles.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        image: "https://placehold.co/600x400/333333/dddddd?text=Portfolio+Website", // Generic placeholder
        demoLink: "#", // Replace with actual demo link if available
        githubLink: "https://github.com/CodeSamhita", // Replace with actual GitHub link
        challenges: "Designing a clean, user-friendly interface and implementing dynamic content loading without a dedicated backend.",
        impact: "Successfully created a highly interactive online presence to showcase skills and projects.",
        likes: 12 // Static like count
    },
    {
        id: "proj2",
        title: "Humanoid Bot, Voice-Controlled Lip Sync",
        description: "A humanoid robot with voice-activated mouth movements, precisely synced using Whisper AI.",
        technologies: ["Raspberry Pi 5", "Python", "Whisper AI", "Servos", "Embedded C"],
        image: "https://placehold.co/600x400/555555/eeeeee?text=Humanoid+Bot", // Generic placeholder
        demoLink: "#",
        githubLink: "#",
        challenges: "Achieving real-time audio processing and low-latency servo control for natural lip-syncing.",
        impact: "Demonstrates advanced embedded AI and robotics integration, capable of natural human-robot interaction.",
        likes: 8
    },
    {
        id: "proj3",
        title: "Obstacle Avoidance Robot",
        description: "An autonomous robot designed to navigate complex environments by detecting and avoiding obstacles using multiple sensors.",
        technologies: ["Arduino", "L298N Motor Driver", "IR Sensors", "Ultrasonic Sensors"],
        image: "https://placehold.co/600x400/777777/ffffff?text=Obstacle+Robot", // Generic placeholder
        demoLink: "#",
        githubLink: "#",
        challenges: "Implementing robust sensor fusion algorithms and precise motor control for dynamic navigation.",
        impact: "A practical application of basic robotics principles, suitable for various autonomous tasks.",
        likes: 5
    },
    {
        id: "proj4",
        title: "Lab Management System with AI Chatbot",
        description: "A web-based application for efficient lab management, integrated with an AI chatbot for intelligent assistance and report generation.",
        technologies: ["Flask", "Python", "HTML", "CSS", "JavaScript", "AI Chatbot API"],
        image: "https://placehold.co/600x400/333333/dddddd?text=Lab+System", // Generic placeholder
        demoLink: "#",
        githubLink: "#",
        challenges: "Integrating third-party AI APIs and ensuring data consistency across the system.",
        impact: "Streamlines laboratory operations and provides intelligent support for users.",
        likes: 15
    }
];


// Function to show a message box (replaces alert())
function showMessageBox(message, type = 'success') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.className = 'message-box show ' + type; // Add type class for styling (success/error)

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000); // Hide after 3 seconds
}

// Function to render projects into the DOM from static data
function renderProjects() {
    projectsContainer.innerHTML = ''; // Clear existing projects
    if (staticProjects.length === 0) {
        projectsContainer.innerHTML = '<p class="text-center text-muted w-100">No projects found.</p>';
        return;
    }

    staticProjects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'col-md-6 col-lg-6'; // Adjust column size as needed
        projectCard.innerHTML = `
            <div class="project-card" data-project-id="${project.id}">
                <h5>${project.title}</h5>
                <p>${project.description}</p>
                <div class="tech-icons mb-3">
                    ${project.technologies.map(tech => `<i class="fa-solid fa-code"></i><span>${tech}</span>`).join('')}
                </div>
                <div class="card-footer">
                    <button class="like-btn" data-project-id="${project.id}">
                        <i class="fas fa-heart"></i> <span class="like-count">${project.likes || 0}</span>
                    </button>
                    <button class="btn btn-sm btn-outline-primary view-details-btn">View Details</button>
                </div>
            </div>
        `;
        projectsContainer.appendChild(projectCard);
    });

    // Hide loading message after rendering
    loadingProjectsMessage.style.display = 'none';

    // Add event listeners for "View Details" and "Like" buttons
    addProjectEventListeners();
}

// Function to add event listeners to dynamically created project cards
function addProjectEventListeners() {
    document.querySelectorAll('.project-card').forEach(card => {
        // Event listener for opening the modal
        card.querySelector('.view-details-btn').addEventListener('click', () => {
            const projectId = card.dataset.projectId;
            openProjectDetailModal(projectId);
        });

        // Event listener for liking a project (client-side only, no persistence)
        card.querySelector('.like-btn').addEventListener('click', (event) => {
            event.stopPropagation(); // Prevent card click from triggering modal
            const likeButton = event.currentTarget;
            const likeCountSpan = likeButton.querySelector('.like-count');

            // Simple client-side like toggle
            if (likeButton.classList.contains('liked')) {
                likeButton.classList.remove('liked');
                likeCountSpan.textContent = parseInt(likeCountSpan.textContent) - 1;
                showMessageBox('Unliked project.', 'success');
            } else {
                likeButton.classList.add('liked');
                likeCountSpan.textContent = parseInt(likeCountSpan.textContent) + 1;
                showMessageBox('Liked project!', 'success');
            }
        });
    });
}

// Function to open and populate the project detail modal
function openProjectDetailModal(projectId) {
    const project = staticProjects.find(p => p.id === projectId);

    if (project) {
        document.getElementById('modalProjectImage').src = project.image || 'https://placehold.co/600x400/cccccc/000000?text=No+Image';
        document.getElementById('modalProjectImage').alt = project.title;
        document.getElementById('projectDetailModalLabel').textContent = project.title;
        document.getElementById('modalProjectDescription').textContent = project.description;

        const techList = document.getElementById('modalProjectTech');
        techList.innerHTML = '';
        project.technologies.forEach(tech => {
            const li = document.createElement('li');
            li.innerHTML = `<i class="fas fa-check-circle me-2"></i>${tech}`;
            techList.appendChild(li);
        });

        document.getElementById('modalProjectChallenges').textContent = project.challenges || 'N/A';
        document.getElementById('modalProjectImpact').textContent = project.impact || 'N/A';

        const demoLink = document.getElementById('modalProjectDemoLink');
        if (project.demoLink && project.demoLink !== '#') {
            demoLink.href = project.demoLink;
            demoLink.style.display = 'inline-block';
        } else {
            demoLink.style.display = 'none';
        }

        const githubLink = document.getElementById('modalProjectGithubLink');
        if (project.githubLink && project.githubLink !== '#') {
            githubLink.href = project.githubLink;
            githubLink.style.display = 'inline-block';
        } else {
            githubLink.style.display = 'none';
        }

        projectDetailModal.show();
    } else {
        showMessageBox('Project details not found!', 'error');
    }
}

// Render projects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', renderProjects);
