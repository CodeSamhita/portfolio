// stats.js
// Displays static and animated statistics.

// Function to show a message box (replaces alert())
function showMessageBox(message, type = 'success') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.className = 'message-box show ' + type; // Add type class for styling (success/error)

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000); // Hide after 3 seconds
}

// Function to animate a number counter
function animateCounter(elementId, targetValue, duration = 1000) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let startValue = 0;
    const increment = targetValue / (duration / 10); // Calculate increment based on 10ms interval
    let currentValue = startValue;

    const updateCounter = () => {
        currentValue += increment;
        if (currentValue < targetValue) {
            element.textContent = Math.floor(currentValue);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = targetValue; // Ensure it ends exactly on target
        }
    };
    requestAnimationFrame(updateCounter);
}

// Using a static value for project count as per request to remove backend dependency.
function updateProjectCount() {
    const projectCountElement = document.getElementById('projectCount');
    if (!projectCountElement) return;

    const staticProjectCount = 10; // You can change this value
    animateCounter('projectCount', staticProjectCount);
}

// Placeholder for GitHub activity (static value)
function updateGitHubStats() {
    const githubReposElement = document.getElementById('githubRepos');
    if (githubReposElement) {
        animateCounter('githubRepos', 15); // Example static value, animated
    }
}

// Placeholder for Years Experience (calculated statically)
function updateYearsExperience() {
    const yearsExperienceElement = document.getElementById('yearsExperience');
    if (yearsExperienceElement) {
        const startYear = 2018; // Year you started your journey
        const currentYear = new Date().getFullYear();
        animateCounter('yearsExperience', currentYear - startYear);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateProjectCount();
    updateGitHubStats();
    updateYearsExperience();
});
