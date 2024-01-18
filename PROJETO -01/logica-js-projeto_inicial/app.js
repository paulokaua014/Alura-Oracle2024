alert('Boas Vindas ao jogo do numero secreto');
let numeroMaximo = 5000;
let numeroSecreto =parseInt(Math.random()* numeroMaximo +1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute!= numeroSecreto) {
    chute = prompt('Escolha o numero de 1 a ' + numeroMaximo);
    if(chute == numeroSecreto){
        break;
    }else{
        if (chute > numeroSecreto) {
            alert('Numero secreto e menor '+chute);
        }else{
        alert('Numero secreto e maior '+chute);
        }
    };
    tentativas++;
}
let palavratentativa = tentativas > 1 ? ' tentativas' : ' tentativa'
alert('isso ai!! voce acertou o numero secreto com ' +tentativas + palavratentativa);

