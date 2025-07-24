// contact-form.js
// Handles the submission of the contact form without a backend.

const contactForm = document.getElementById('contact-form');
const formMessageDiv = document.getElementById('form-message');

// Function to show a message box (replaces alert())
function showMessageBox(message, type = 'success') {
    const messageBox = document.getElementById('messageBox');
    messageBox.textContent = message;
    messageBox.className = 'message-box show ' + type; // Add type class for styling (success/error)

    setTimeout(() => {
        messageBox.classList.remove('show');
    }, 3000); // Hide after 3 seconds
}

if (contactForm) {
    contactForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('contactName').value;
        const email = document.getElementById('contactEmail').value;
        const message = document.getElementById('contactMessage').value;

        // Basic client-side validation
        if (!name || !email || !message) {
            showMessageBox('Please fill in all fields.', 'error');
            return;
        }

        // Email format validation (simple regex)
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showMessageBox('Please enter a valid email address.', 'error');
            return;
        }

        formMessageDiv.innerHTML = '<div class="text-info">Simulating message send...</div>';

        // Simulate a successful submission without a backend
        setTimeout(() => {
            formMessageDiv.innerHTML = '<div class="text-success">Message sent successfully! (No backend configured)</div>';
            showMessageBox('Message sent successfully!', 'success');
            contactForm.reset(); // Clear the form
        }, 1500); // Simulate network delay
    });
}
