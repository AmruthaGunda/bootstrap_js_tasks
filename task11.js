const form = document.getElementById('contactForm');
form.addEventListener('submit', function(event) {
    // Prevent form submission
    event.preventDefault();

    // Reset error messages
    resetErrors();

    // Validate name
    const name = document.getElementById('name').value;
    if (!name) {
        displayError('nameError', 'Name is required.');
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (!isValidEmail(email)) {
        displayError('emailError', 'Invalid email format.');
    }

    // Validate website
    const website = document.getElementById('website').value;
    if (!isValidUrl(website)) {
        displayError('websiteError', 'Invalid website URL.');
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (!message) {
        displayError('messageError', 'Message is required.');
    }

    // If all fields are valid, you can submit the form here
    if (name && isValidEmail(email) && isValidUrl(website) && message) {
        alert('Form submitted successfully!');
        form.reset(); // Reset the form
    }
});

// Helper function to display error messages
function displayError(elementId, errorMessage) {
    document.getElementById(elementId).textContent = errorMessage;
}

// Helper function to reset error messages
function resetErrors() {
    const errorElements = document.querySelectorAll('[id$="Error"]');
    errorElements.forEach(element => {
        element.textContent = '';
    });
}

// Helper function to validate email format
    function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

// Helper function to validate URL format
function isValidUrl(url) {
    try {
        new URL(url);
        return true;
    } catch (error) {
        return false;
    }
}