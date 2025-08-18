const fecharMensagem = document.querySelector("#fechar-mensagem");
const mensagem = document.querySelector(".mensagem");

fecharMensagem.addEventListener("click", () => {
  mensagem.style.display = "none";
});

setTimeout(() => {
  mensagem.style.display = "none";
}, 5000);
