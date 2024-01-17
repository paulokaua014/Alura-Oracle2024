alert('Boas vindas ao nosso sistema');
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
let mensagemDeErro = 'Erro!!Preencha todos os campos'
alert(mensagemDeErro);
let nome = prompt('qual e o seu nome??');
let idade = prompt('Qual e sua idade??');

if (idade >= 18) {
    alert('pode tirar a habilitaçao')
}else{
    alert('voce nao pode tirar sua habilitaçao')
}