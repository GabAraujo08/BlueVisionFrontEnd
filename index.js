document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();

    // Reset previous error messages
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

    // Get form values
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Validate form inputs
    var isValid = true;
    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").innerText = "Invalid email format";
        isValid = false;
    }
    if (message === "") {
        document.getElementById("messageError").innerText = "Message is required";
        isValid = false;
    }

    // If all inputs are valid, submit the form
    if (isValid) {
        // Here you can perform additional actions like AJAX submission
        alert("Form submitted successfully!");
        document.getElementById("contactForm").reset(); // Reset form after submission
    }
});

// Function to validate email format
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

window.watsonAssistantChatOptions = {
    integrationID: "0e9f5777-403f-4a6a-b52f-608f0a3f3f0d", // The ID of this integration.
    region: "au-syd", // The region your integration is hosted in.
    serviceInstanceID: "125b9053-fe7c-4e87-bf89-fc5c0ce12065", // The ID of your service instance.
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });