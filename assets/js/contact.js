// Initialize EmailJS (Replace with your own credentials)
(function() {
    emailjs.init("YOUR_USER_ID"); // Get this from EmailJS dashboard
})();

// Form submission handler
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form elements
    const form = e.target;
    const formMessage = document.getElementById('formMessage');
    const button = form.querySelector('button');
    
    // Show loading state
    button.disabled = true;
    button.textContent = 'Sending...';
    formMessage.textContent = '';
    formMessage.classList.remove('success', 'error');

    // Validate email format
    const email = document.getElementById('email').value;
    if (!validateEmail(email)) {
        showError(formMessage, 'Please enter a valid email address', button);
        return;
    }

    // Prepare service parameters
    const params = {
        from_name: document.getElementById('name').value,
        from_email: email,
        message: document.getElementById('message').value,
        to_email: 'popularbelbase92@gmail.com' // Add the Gmail address here
    };

    // Send email using EmailJS
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', params)
        .then(function() {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.classList.add('success');
            form.reset();
        })
        .catch(function(error) {
            showError(formMessage, 'Failed to send message. Please try again.', button);
        })
        .finally(() => {
            button.disabled = false;
            button.textContent = 'Send';
        });
});

// Email validation helper
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Error handling helper
function showError(element, message, button) {
    element.textContent = message;
    element.classList.add('error');
    button.disabled = false;
    button.textContent = 'Send';
}