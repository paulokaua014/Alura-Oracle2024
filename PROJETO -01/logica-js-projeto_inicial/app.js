alert('Baos Vindas ao jogo do numero secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);
let chute;
while (chute!= numeroSecreto) {
    chute = prompt('Escolha o numero de 1 a 100');
    if(chute == numeroSecreto){
        alert('isso ai!! voce acertou o numero secreto');
    }else{
        if (chute > numeroSecreto) {
            alert('Numero secreto e menor '+chute)
        }else{
        alert('Numero secreto e maior '+chute);
        }
    };
}
