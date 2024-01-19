let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exiberTextoNaTela(tag, texto) {
    let = campo = document.querySelector(tag);
    campo.innerHTML = texto;    
}
function exiberMensagemInicial() {
    exiberTextoNaTela('h1', 'Jogo do Numero Secreto');
    exiberTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}
exiberMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value
    if(chute == numeroSecreto){
        exiberTextoNaTela('h1', 'Acertou!!');
        let palavraTentatia = tentativas > 1 ? 'Tentativas':'tentativa'
        let mensagemTentativas = `Parabens por acertar o numero secreto com ${tentativas} ${palavraTentatia}!!`;
        exiberTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
    if (chute > numeroSecreto) {
        exiberTextoNaTela('p','O numero secreto e menor!!');
    }else{
        exiberTextoNaTela('p', 'O numero secreto e maior!!');
    }
    tentativas++
    limparCampo();
    
    }
    
    
};
function gerarNumeroAleatorio() {
   return parseInt(Math.random() * 10 + 1);
    
}
function limparCampo() {
    let chute = document.querySelector('input');
    chute.value = ''
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exiberMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}