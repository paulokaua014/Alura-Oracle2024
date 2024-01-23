var input1 = document.querySelector('textarea#txt-area1');
var input2 = document.querySelector('textarea#txt-area2');
var message = document.getElementById("msg")

var button1 = document.querySelector('button.btn-1');
button1.onclick = encrypt;

var button2 = document.querySelector('button.btn-2');
button2.onclick = decrypt;

document.getElementById('none').innerHTML = '';
input1.focus();
function encrypt() {
    
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = '<h2 id="none">Nenhuma mensagem encontrada</h2>';
        input1.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';

        var text = input1.value;
        var txt =  text.replace(/e/igm, 'enter');
        var txt = txt.replace(/i/igm, 'imes');
        var txt = txt.replace(/a/igm, 'ai');
        var txt = txt.replace(/o/igm, 'ober');
        var txt = txt.replace(/u/igm, 'ufat');

        document.getElementById('txt-area2').innerHTML = `${txt}`;
       
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
       
    }
}
function decrypt() {
    if (input1.value.length == 0) {
        document.getElementById('none').innerHTML = ' <h2 id="none">Nenhuma mensagem encontrada</h2>';
        document.querySelector('img.icone').style.display;
        input1.focus();
    } else {
        document.getElementById('none').innerHTML = '';
        document.querySelector('img.icone').style.display = 'none';
        document.getElementById('txt-area1').innerHTML = '';
 
        var text = input1.value;
        var txt =  text.replace(/enter/igm, 'e');
        txt = txt.replace(/imes/igm, 'i');
        txt = txt.replace(/ai/igm, 'a');
        txt = txt.replace(/ober/igm, 'o');
        txt = txt.replace(/ufat/igm, 'u');
        

        document.getElementById('txt-area2').innerHTML = `${txt}`;
     
      
        document.getElementById('copy').innerHTML = '<button class="button btn-3" onclick="copy()">Copiar</button>';
    }
}

function copy() {
    document.querySelector('#txt-area2').select();
    document.execCommand('copy');
    message.innerHTML = "O texto copiado já está na área de transferência!";
    document.querySelector("#txt-area1").value = "";
}