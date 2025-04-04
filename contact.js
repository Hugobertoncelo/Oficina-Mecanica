let customerInfoMssg = document.getElementById("customerInfoMssg");
document
    .getElementById("phone")
    .addEventListener("input", function (event) {
        // Expressão regular para validar diferentes formatos de número de telefone
        const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

        if (!phoneRegex.test(this.value) && this.value.length > 0) {
            customerInfoMssg.innerHTML = "Por favor, insira um número de telefone válido.";
        } else {
            customerInfoMssg.innerHTML = "";
        }
    });
//  validação do nome do cliente
document
    .getElementById("customerName")
    .addEventListener("input", function (event) {
        // Verifique se o valor contém algum caractere que não seja o alfabeto inglês ou espaço
        if (/[^a-zA-Z\s]/.test(this.value)) {
            // Se isso acontecer, substitua esses caracteres por uma string vazia e mostre a mensagem
            customerInfoMssg.innerHTML =
                "Por favor, insira apenas letras e espaços para o nome";
            this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
        } else {
            customerInfoMssg.innerHTML = "";
        }
    });

// Função para manipular o envio de formulários
document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Impedir o comportamento de envio de formulário padrão

        // Mostrar uma mensagem de alerta
        alert("Sua mensagem foi enviada");
    });
