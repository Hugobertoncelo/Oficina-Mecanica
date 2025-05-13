function cadastrar(event) {
  event.preventDefault();
  const novoUsuario = document.getElementById("novo-usuario").value;
  const novaSenha = document.getElementById("nova-senha").value;
  const confirmarSenha = document.getElementById("confirmar-senha").value;
  const mensagemElemento = document.getElementById("cadastro-mensagem");

  if (novaSenha === confirmarSenha) {
    localStorage.setItem(novoUsuario, novaSenha);
    mensagemElemento.textContent = `Usuário "${novoUsuario}" cadastrado com sucesso!`;
    mensagemElemento.style.color = "green";
    setTimeout(() => {
      window.location.href = "login.html";
    }, 2000);
  } else {
    mensagemElemento.textContent = "As senhas não coincidem.";
    mensagemElemento.style.color = "red";
  }
}