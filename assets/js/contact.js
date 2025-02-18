document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validate fields
        if (name === "" || email === "" || message === "") {
            formMessage.textContent = "Please fill out all fields.";
            formMessage.style.color = "red";
            return;
        }

        // Simulate form submission (can be replaced with an actual backend request)
        formMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
        formMessage.style.color = "green";

        // Clear form
        form.reset();
    });
});
