const btn = document.getElementById("backToTopBtn");

// Function to handle scroll visibility
window.onscroll = function () {
  if (btn) { // Ensure button exists
    if (window.scrollY > 320) {
      btn.classList.add('show'); // Use class for smooth transition
    } else {
      btn.classList.remove('show');
    }
  }
};

// Function to scroll to top
if (btn) { // Ensure button exists before attaching listener
  btn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
}
