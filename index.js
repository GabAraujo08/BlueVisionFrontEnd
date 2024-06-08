document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
   
    event.preventDefault();

  
    document.getElementById("nameError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("messageError").innerText = "";

   
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

   
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

    
    if (isValid) {
        
        alert("Formulário enviado com sucesso!");
        document.getElementById("contactForm").reset(); 
    }
});


function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

window.watsonAssistantChatOptions = {
    integrationID: "0e9f5777-403f-4a6a-b52f-608f0a3f3f0d", 
    region: "au-syd", 
    serviceInstanceID: "125b9053-fe7c-4e87-bf89-fc5c0ce12065", 
    onLoad: async (instance) => { await instance.render(); }
  };
  setTimeout(function(){
    const t=document.createElement('script');
    t.src="https://web-chat.global.assistant.watson.appdomain.cloud/versions/" + (window.watsonAssistantChatOptions.clientVersion || 'latest') + "/WatsonAssistantChatEntry.js";
    document.head.appendChild(t);
  });


   // Obtém o elemento onde o ano atual será exibido
   var currentYearElement = document.querySelector('.current-year');

   // Obtém o ano atual
   var currentYear = new Date().getFullYear();

   // Insere o ano atual no elemento
   currentYearElement.textContent = currentYear;



   document.getElementById("contactForm").addEventListener("submit", function(event) {
    // Previne o comportamento padrão de envio do formulário
    event.preventDefault();

    // Resetar mensagens de erro anteriores
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("messageError").textContent = "";

    // Obter valores do formulário
    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();

    // Verificar se todos os campos foram preenchidos corretamente
    var isValid = true;
    if (name === "") {
        document.getElementById("nameError").textContent = "Por favor, insira seu nome.";
        isValid = false;
    }
    if (email === "") {
        document.getElementById("emailError").textContent = "Por favor, insira seu e-mail.";
        isValid = false;
    } else if (!isValidEmail(email)) {
        document.getElementById("emailError").textContent = "Por favor, insira um e-mail válido.";
        isValid = false;
    }
    if (message === "") {
        document.getElementById("messageError").textContent = "Por favor, insira sua mensagem.";
        isValid = false;
    }

    // Se todos os campos estiverem preenchidos corretamente, exibe um alerta
    if (isValid) {
        alert("O formulário foi enviado com sucesso!");
        // Aqui você pode enviar o formulário via AJAX ou qualquer outra ação necessária
    }
});

// Função para validar o formato do e-mail
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}