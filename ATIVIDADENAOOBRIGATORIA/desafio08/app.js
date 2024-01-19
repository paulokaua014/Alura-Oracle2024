let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function verificarButtonConsole() {
    console.log('Esse butão estar sendo pressionado');
    
};
function verificarButtonAlert() {
    alert('Eu amo js')
}
function verificarButtonPrompt() {
    let cidadeUsuario = prompt('Qual e sua cidade??');
    alert("Estive em " + cidadeUsuario);
}
function verificarButtonSoma() {
    let valor1 = parseInt(prompt('Digite um valor para soma??'));
    let valor2 = parseInt(prompt('Digite o segundo valor pra a somar??'));
    let resultadoSoma = valor1 + valor2;
    alert('A soma dos valores '+ valor1+ ' e ' +valor2+' e igual a ' +resultadoSoma+'.');
    
}