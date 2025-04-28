let customerInfoMssg = document.getElementById("customerInfoMssg");

document.addEventListener('DOMContentLoaded', function () {
    const phoneInput = document.getElementById("phone");
    const customerNameInput = document.getElementById("customerName");
    const contactForm = document.getElementById("contactForm");

    if (phoneInput) {
        phoneInput.addEventListener("input", function (event) {
            const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;

            if (!phoneRegex.test(this.value) && this.value.length > 0) {
                customerInfoMssg.innerHTML = "Por favor, insira um número de telefone válido.";
            } else {
                customerInfoMssg.innerHTML = "";
            }
        });
    }

    if (customerNameInput) {
        customerNameInput.addEventListener("input", function (event) {
            if (/[^a-zA-Z\s]/.test(this.value)) {
                customerInfoMssg.innerHTML =
                    "Por favor, insira apenas letras e espaços para o nome";
                this.value = this.value.replace(/[^a-zA-Z\s]/g, "");
            } else {
                customerInfoMssg.innerHTML = "";
            }
        });
    }

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            alert("Sua mensagem foi enviada!");
            setTimeout(() => {
                contactForm.reset();
            }, 500);
        });
    }
});
