let numeroSecreto = gerarNumeroAleatorio();

function exiberTextoNaTela(tag, texto) {
    let = campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}
exiberTextoNaTela('h1', 'Jogo do Numero Secreto')
exiberTextoNaTela('p', 'Escolha um numero entre 1 e 10')

function verificarChute() {
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exiberTextoNaTela('h1', 'Acertou!!');
        exiberTextoNaTela('p','Parabens por acertar o numero secreto');
    }else{
    if (chute > numeroSecreto) {
        exiberTextoNaTela('p','O numero secreto e menor!!');
    }else{
        exiberTextoNaTela('p', 'O numero secreto e maior!!');
    }
    }
};
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
    
}
