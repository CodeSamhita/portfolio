// skills-interactivity.js
// Handles interactive skill chips.

const skillDetailModal = new bootstrap.Modal(document.getElementById('skillDetailModal'));

// Sample skill data (can be fetched from backend if dynamic)
const skillData = {
    "Programming Languages": {
        description: "Proficient in C, C++, Java, Python, HTML5, CSS3, and JavaScript. Strong foundation in data structures and algorithms.",
        relatedProjects: ["Interactive Portfolio Website", "Humanoid Bot", "Lab Management System"],
        relatedCertifications: ["30 Days of Python – Udemy", "Python and Application Development – Rediron"]
    },
    "Web Technologies": {
        description: "Experienced in Full-Stack Development, Responsive Design, and frameworks like Flask and React. Familiar with Bootstrap for UI.",
        relatedProjects: ["Interactive Portfolio Website", "Lab Management System"],
        relatedCertifications: []
    },
    "Embedded Systems & Hardware": {
        description: "Hands-on experience with Arduino, ESP32, Raspberry Pi, and Jetson Nano. Skilled in GPIO, I2C, UART, and system integration. Knowledge of ROS and 3D printing.",
        relatedProjects: ["Humanoid Bot", "Obstacle Avoidance Robot", "PCA9685 Servo Controller Build", "WALL-E Bot"],
        relatedCertifications: []
    },
    "AI/ML & NLP": {
        description: "Explored Prompt Engineering, OpenAI APIs, Whisper, Hugging Face Transformers, NLTK, and SpaCy for AI/ML and Natural Language Processing applications.",
        relatedProjects: ["Humanoid Bot", "Lab Management System with AI Chatbot", "NLP Toolkit Portfolio", "Smart Traffic System (AI)", "Sign Language Detection System"],
        relatedCertifications: []
    },
    "Tools & Platforms": {
        description: "Comfortable with Ubuntu (GUI & Terminal), Windows (GUI & CMD), Git, VS Code, and Tinkercad.",
        relatedProjects: [],
        relatedCertifications: []
    },
    "Creative & Media Tools": {
        description: "Proficient in Adobe Photoshop, Premiere Pro, After Effects, and Media Encoder for creative design and media production.",
        relatedProjects: [],
        relatedCertifications: []
    },
    "UI/UX & Interfacing": {
        description: "Experience in UI/UX Design principles and integrating audio & camera functionalities into projects.",
        relatedProjects: [],
        relatedCertifications: []
    },
    "Problem Solving": {
        description: "Strong analytical and critical thinking skills to identify and solve complex technical challenges.",
        relatedProjects: [],
        relatedCertifications: []
    },
    "Creative Design": {
        description: "Ability to approach problems with innovative and creative design solutions.",
        relatedProjects: [],
        relatedCertifications: []
    },
    "Team Collaboration": {
        description: "Excellent teamwork and communication skills, thriving in collaborative environments.",
        relatedProjects: [],
        relatedCertifications: []
    },
    "Adaptability": {
        description: "Quick learner and adaptable to new technologies, tools, and challenges.",
        relatedProjects: [],
        relatedCertifications: []
    }
};

// Function to show a message box (replaces alert())
function showMessageBox(message, type = 'success') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.className = 'message-box show ' + type; // Add type class for styling (success/error)

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000); // Hide after 3 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    // Attach click listeners to all skill list items
    document.querySelectorAll('#skills .custom-list li').forEach(item => {
        item.addEventListener('click', () => {
            const skillName = item.dataset.skill; // Get skill name from data-skill attribute
            const skillInfo = skillData[skillName];

            if (skillInfo) {
                document.getElementById('skillDetailModalLabel').textContent = skillName;
                document.getElementById('skillModalDescription').textContent = skillInfo.description;

                const relatedProjectsList = document.getElementById('skillModalRelatedProjects');
                relatedProjectsList.innerHTML = '';
                if (skillInfo.relatedProjects && skillInfo.relatedProjects.length > 0) {
                    skillInfo.relatedProjects.forEach(project => {
                        const li = document.createElement('li');
                        li.textContent = project;
                        relatedProjectsList.appendChild(li);
                    });
                } else {
                    relatedProjectsList.innerHTML = '<li>No related projects found.</li>';
                }

                const relatedCertificationsList = document.getElementById('skillModalRelatedCertifications');
                relatedCertificationsList.innerHTML = '';
                if (skillInfo.relatedCertifications && skillInfo.relatedCertifications.length > 0) {
                    skillInfo.relatedCertifications.forEach(cert => {
                        const li = document.createElement('li');
                        li.textContent = cert;
                        relatedCertificationsList.appendChild(li);
                    });
                } else {
                    relatedCertificationsList.innerHTML = '<li>No related certifications found.</li>';
                }

                skillDetailModal.show();
            } else {
                showMessageBox('Skill details not available.', 'error');
            }
        });
    });
});
