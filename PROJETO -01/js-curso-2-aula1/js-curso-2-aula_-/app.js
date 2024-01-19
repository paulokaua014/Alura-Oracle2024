let numeroSecreto = gerarNumeroAleatorio();

function exiberTextoNaTela(tag, texto) {
    let = campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}
exiberTextoNaTela('h1', 'Jogo do Numero Secreto')
exiberTextoNaTela('p', 'Escolha um numero entre 1 e 100')

function verificarChute() {
    console.log(numeroSecreto);
};
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
    
}