// theme-manager.js
// Manages dynamic theme selection and dark/light mode toggling.

const themes = [
    {
        name: "Titanium Gray / Silver Ice",
        dark: {
            "--primary": "#9fa3a9",
            "--secondary": "#4f5d75",
            "--accent": "#e5e5e7",
            "--bg-dark": "#1c1c1e",
            "--bg-section": "#2c2c2e",
            "--card-bg": "rgba(44, 44, 46, 0.9)",
            "--text-main": "#e5e5e7",
            "--text-dim": "#a0a0a0",
            "--border-divider": "#3a3a3c",
            "--shadow": "0 8px 30px rgba(0, 0, 0, 0.4)",
            "--overlay-bg": "rgba(28, 28, 30, 0.95)"
        },
        light: {
            "--primary": "#6b6e76",
            "--secondary": "#c5c8ce",
            "--accent": "#1a1a1a",
            "--bg-dark": "#f5f7fa",
            "--bg-section": "#ffffff",
            "--card-bg": "rgba(255, 255, 255, 0.9)",
            "--text-main": "#1a1a1a",
            "--text-dim": "#6b6e76",
            "--border-divider": "#dcdde1",
            "--shadow": "0 6px 28px rgba(0, 0, 0, 0.15)",
            "--overlay-bg": "rgba(255, 255, 255, 0.95)"
        }
    },
    {
        name: "Chrome & Midnight Black",
        dark: {
            "--primary": "#d1d1d1",
            "--secondary": "#3f3f3f",
            "--accent": "#f5f5f5",
            "--bg-dark": "#0d0d0d",
            "--bg-section": "#1a1a1a",
            "--card-bg": "rgba(26, 26, 26, 0.9)",
            "--text-main": "#f5f5f5",
            "--text-dim": "#d1d1d1",
            "--border-divider": "#444444",
            "--shadow": "0 8px 30px rgba(0, 0, 0, 0.6)",
            "--overlay-bg": "rgba(13, 13, 13, 0.95)"
        },
        light: {
            "--primary": "#888888",
            "--secondary": "#cccccc",
            "--accent": "#111111",
            "--bg-dark": "#fafafa",
            "--bg-section": "#ffffff",
            "--card-bg": "rgba(255, 255, 255, 0.9)",
            "--text-main": "#111111",
            "--text-dim": "#888888",
            "--border-divider": "#d0d0d0",
            "--shadow": "0 6px 28px rgba(0, 0, 0, 0.1)",
            "--overlay-bg": "rgba(255, 255, 255, 0.95)"
        }
    },
    {
        name: "Rose Gold & Soft Champagne",
        dark: {
            "--primary": "#d1a7a0",
            "--secondary": "#b76e79",
            "--accent": "#f3e6e4",
            "--bg-dark": "#1b1212",
            "--bg-section": "#2a1d1d",
            "--card-bg": "rgba(42, 29, 29, 0.9)",
            "--text-main": "#f3e6e4",
            "--text-dim": "#d1a7a0",
            "--border-divider": "#70393f",
            "--shadow": "0 8px 30px rgba(0, 0, 0, 0.4)",
            "--overlay-bg": "rgba(27, 18, 18, 0.95)"
        },
        light: {
            "--primary": "#c78f85",
            "--secondary": "#ffe8e1",
            "--accent": "#2a2a2a",
            "--bg-dark": "#fdf6f3",
            "--bg-section": "#fffafa",
            "--card-bg": "rgba(255, 250, 250, 0.9)",
            "--text-main": "#2a2a2a",
            "--text-dim": "#c78f85",
            "--border-divider": "#e2c6c0",
            "--shadow": "0 6px 28px rgba(0, 0, 0, 0.1)",
            "--overlay-bg": "rgba(253, 246, 243, 0.95)"
        }
    },
    {
        name: "Brushed Steel & Royal Navy",
        dark: {
            "--primary": "#9ea9b3",
            "--secondary": "#324a5f",
            "--accent": "#d8dee9",
            "--bg-dark": "#121821",
            "--bg-section": "#1f2a36",
            "--card-bg": "rgba(31, 42, 54, 0.9)",
            "--text-main": "#d8dee9",
            "--text-dim": "#9ea9b3",
            "--border-divider": "#3c4752",
            "--shadow": "0 8px 30px rgba(0, 0, 0, 0.4)",
            "--overlay-bg": "rgba(18, 24, 33, 0.95)"
        },
        light: {
            "--primary": "#5b6e84",
            "--secondary": "#9caab6",
            "--accent": "#1c1f23",
            "--bg-dark": "#f0f2f5",
            "--bg-section": "#ffffff",
            "--card-bg": "rgba(255, 255, 255, 0.9)",
            "--text-main": "#1c1f23",
            "--text-dim": "#5b6e84",
            "--border-divider": "#d0d4d8",
            "--shadow": "0 6px 28px rgba(0, 0, 0, 0.1)",
            "--overlay-bg": "rgba(240, 242, 245, 0.95)"
        }
    },
    {
        name: "Obsidian Glass & Platinum",
        dark: {
            "--primary": "#bfbfbf",
            "--secondary": "#6e7681",
            "--accent": "#eaeaea",
            "--bg-dark": "#0a0c10",
            "--bg-section": "#161b22",
            "--card-bg": "rgba(22, 27, 34, 0.9)",
            "--text-main": "#eaeaea",
            "--text-dim": "#bfbfbf",
            "--border-divider": "#2a2d32",
            "--shadow": "0 8px 30px rgba(0, 0, 0, 0.6)",
            "--overlay-bg": "rgba(10, 12, 16, 0.95)"
        },
        light: {
            "--primary": "#6e6e6e",
            "--secondary": "#c0c0c0",
            "--accent": "#1e1e1e",
            "--bg-dark": "#fdfdfd",
            "--bg-section": "#ffffff",
            "--card-bg": "rgba(255, 255, 255, 0.9)",
            "--text-main": "#1e1e1e",
            "--text-dim": "#6e6e6e",
            "--border-divider": "#dddddd",
            "--shadow": "0 6px 28px rgba(0, 0, 0, 0.1)",
            "--overlay-bg": "rgba(253, 253, 253, 0.95)"
        }
    }
];

let currentThemeIndex; // Will be set randomly or from sessionStorage
let isLightMode; // Will be loaded from localStorage

const modeBtn = document.getElementById('toggleModeBtn');
const icon = modeBtn?.querySelector('i');
const navbar = document.querySelector('.navbar');
const resumeBtn = document.querySelector('.resume-btn');
const backToTopBtn = document.getElementById('backToTopBtn');

// Function to apply theme variables to :root
function applyTheme(themeMode) {
    const selectedTheme = themes[currentThemeIndex];
    const colors = selectedTheme[themeMode];
    const root = document.documentElement;

    for (const [key, value] of Object.entries(colors)) {
        root.style.setProperty(key, value);
    }

    // Update background gradient based on new primary, secondary, accent
    // Ensure this matches the gradient definition in style.css
    document.body.style.backgroundImage = `linear-gradient(-45deg, var(--primary), var(--secondary), var(--accent))`;

    // Adjust specific elements that might need class changes
    if (navbar && resumeBtn && backToTopBtn) {
        if (themeMode === 'light') {
            navbar.classList.remove('navbar-dark');
            navbar.classList.add('navbar-light');
            resumeBtn.classList.remove('btn-primary');
            resumeBtn.classList.add('btn-outline-dark');
            backToTopBtn.classList.remove('btn-primary');
            backToTopBtn.classList.add('btn-outline-dark');
        } else {
            navbar.classList.remove('navbar-light');
            navbar.classList.add('navbar-dark');
            resumeBtn.classList.add('btn-primary');
            resumeBtn.classList.remove('btn-outline-dark');
            backToTopBtn.classList.add('btn-primary');
            backToTopBtn.classList.remove('btn-outline-dark');
        }
    }
}

// Function to toggle between light and dark mode for the current theme
function toggleMode() {
    isLightMode = !isLightMode;
    document.body.classList.toggle('light-mode', isLightMode);
    localStorage.setItem('light-mode', isLightMode); // Persist mode choice

    if (icon) {
        if (isLightMode) {
            icon.classList.add('fa-sun');
            icon.classList.remove('fa-moon');
        } else {
            icon.classList.add('fa-moon');
            icon.classList.remove('fa-sun');
        }
    }
    applyTheme(isLightMode ? 'light' : 'dark');
}

// Initialize theme on page load
window.addEventListener('DOMContentLoaded', () => {
    // 1. Randomly select a theme or load from sessionStorage
    const storedThemeIndex = sessionStorage.getItem('current-theme-index');
    if (storedThemeIndex !== null && !isNaN(parseInt(storedThemeIndex))) {
        currentThemeIndex = parseInt(storedThemeIndex);
    } else {
        currentThemeIndex = Math.floor(Math.random() * themes.length);
        sessionStorage.setItem('current-theme-index', currentThemeIndex); // Persist selected theme for the session
    }

    // 2. Load mode preference from localStorage
    isLightMode = localStorage.getItem('light-mode') === 'true';

    // 3. Apply initial theme and mode
    document.body.classList.toggle('light-mode', isLightMode); // Apply light-mode class if needed
    applyTheme(isLightMode ? 'light' : 'dark');

    // 4. Set initial icon (if modeBtn exists)
    if (modeBtn) {
        if (isLightMode) {
            icon.classList.add('fa-sun');
            icon.classList.remove('fa-moon');
        } else {
            icon.classList.add('fa-moon');
            icon.classList.remove('fa-sun');
        }
    }

    // Attach toggle button listener (if modeBtn exists)
    modeBtn?.addEventListener('click', toggleMode);
});
