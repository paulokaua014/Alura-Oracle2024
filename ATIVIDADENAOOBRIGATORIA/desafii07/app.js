console.log("Boas Vindas");
let nome ='Paulo';

console.log('ola ' + nome);
alert('Ola ' + nome);

let liguagemPreferida = prompt("Qual e sua liguagem de progamaçao favorita??");
console.log(liguagemPreferida);

let valor1 = 2;
let valor2 = 3;
let resultado = valor1 + valor2;
console.log('A soma de '+valor1 +' e ' +valor2+ ' é igual '+ resultado);

let idade = prompt('Qual e a sua idade??');
if (idade >= 18) {
    console.log('Voce e maior de idade');
}else{
    console.log('Voce nao e maior de idade');
}

var numero1 = parseFloat(prompt("Digite um número:"));


if (numero1 > 0) {
    console.log("O número é positivo.");
} else if (numero1 < 0) {
    console.log("O número é negativo.");
} else {
    console.log("O número é zero.");
}

let numero2 = 1;
while (numero2 <= 10) {
    console.log(numero2);
    numero2++;
}

let nota = 8; 

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

let numeroAleatorio = Math.random();
console.log(numeroAleatorio);

let numeroInteiroAleatorio = parseInt(Math.random() * 10) + 1;
console.log(numeroInteiroAleatorio);

let numeroInteiroAleatorio1 = parseInt(Math.random() * 1000) + 1;
console.log(numeroInteiroAleatorio1);


