// Remove dynamic color cycling for CSS variables.
// Let CSS handle the gradient background animation smoothly.

// You can still keep your dark/light mode toggle logic here, example:

const modeBtn = document.getElementById('toggleModeBtn');
const icon = modeBtn?.querySelector('i');
const navbar = document.querySelector('.navbar');
const resumeBtn = document.querySelector('.resume-btn');
const backToTopBtn = document.getElementById('backToTopBtn');

function setLightMode(on) {
  if (!navbar || !resumeBtn || !backToTopBtn) return; // Ensure elements exist
  if (on) {
    navbar.classList.remove('navbar-dark');
    navbar.classList.add('navbar-light');
    resumeBtn.classList.remove('btn-primary');
    resumeBtn.classList.add('btn-outline-dark');
    backToTopBtn.classList.remove('btn-primary');
    backToTopBtn.classList.add('btn-outline-dark');
    localStorage.setItem('light-mode', 'true'); // Persist choice
  } else {
    navbar.classList.remove('navbar-light');
    navbar.classList.add('navbar-dark');
    resumeBtn.classList.add('btn-primary');
    resumeBtn.classList.remove('btn-outline-dark');
    backToTopBtn.classList.add('btn-primary');
    backToTopBtn.classList.remove('btn-outline-dark');
    localStorage.setItem('light-mode', 'false'); // Persist choice
  }
}

// Event listener for the mode toggle button
modeBtn?.addEventListener('click', () => {
  document.body.classList.toggle('light-mode');
  const isLight = document.body.classList.contains('light-mode');
  if (icon) {
    if (isLight) {
      icon.classList.add('fa-sun');
      icon.classList.remove('fa-moon');
    } else {
      icon.classList.add('fa-moon');
      icon.classList.remove('fa-sun');
    }
  }
  setLightMode(isLight);
});

// Set initial mode on page load based on localStorage
window.addEventListener('DOMContentLoaded', () => {
    const isLightModeStored = localStorage.getItem('light-mode') === 'true';
    if (isLightModeStored) {
        document.body.classList.add('light-mode');
        if (icon) {
            icon.classList.add('fa-sun');
            icon.classList.remove('fa-moon');
        }
    } else {
        document.body.classList.remove('light-mode');
        if (icon) {
            icon.classList.add('fa-moon');
            icon.classList.remove('fa-sun');
        }
    }
    // Apply initial mode to navbar and buttons after DOM is loaded
    setLightMode(isLightModeStored);
});
