document.addEventListener('DOMContentLoaded', () => {

    // --- Background Animation ---
    // Initializes Particles.js on any page that has the 'particles-js' element.
    if (document.getElementById('particles-js')) {
        particlesJS("particles-js", {
            "particles": {
                "number": { "value": 60, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": true },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 1.5, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // --- Content Fade-In Animation ---
    // A generic Intersection Observer to animate any element with the class '.fade-in-on-scroll'.
    const scrollObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target); // Stop observing after it's visible
            }
        });
    }, { threshold: 0.1 });

    // Find all elements that should fade in on initial page load and observe them.
    const elementsToFadeIn = document.querySelectorAll('.fade-in-on-scroll');
    elementsToFadeIn.forEach(el => scrollObserver.observe(el));

    // Also, set up a MutationObserver to catch elements added dynamically later.
    const mainContainer = document.getElementById('main-container');
    if (mainContainer) {
        const mutationObserver = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1) { // Check if it's an element
                        // If the added node itself should be animated
                        if (node.classList.contains('fade-in-on-scroll')) {
                            scrollObserver.observe(node);
                        }
                        // Find any children of the added node that should be animated
                        node.querySelectorAll('.fade-in-on-scroll').forEach(child => {
                            scrollObserver.observe(child);
                        });
                    }
                });
            });
        });

        mutationObserver.observe(mainContainer, { childList: true, subtree: true });
    }

    // --- Mobile Navigation Toggle ---
    // Handles the click event for the hamburger menu.
    const navToggle = document.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            document.body.classList.toggle('nav-open');
        });
    }
});