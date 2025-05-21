function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMessageElement = document.getElementById("error-message");

  const senhaSalva = localStorage.getItem(username);

  if (senhaSalva && senhaSalva === password) {
    window.location.href = "index.html";
  } else {
    errorMessageElement.textContent = "Usuário ou senha inválidos.";
  }
}