const textArea = document.querySelector (".input");
const mensagem = document.querySelector (".mensagem");
var boneco = document.querySelector (".img-boneco");
var alertaTexto = document.querySelector(".alerta-mensagem")

// A letra "e" é convertida para "enter"
// A letra "i" é convertida para "imes"
// A letra "a" é convertida para "ai"
// A letra "o" é convertida para "ober"
// A letra "u" é convertida para "ufat"


function botaoCriptografar() {
    const textoCriptografado = criptografar(textArea.value);
    mensagem.value = textoCriptografado;
    textArea.value = "";
}

function botaoDesincriptografar() {
    const textoDesincriptografado = desencriptografar(textArea.value);
    mensagem.value = textoDesincriptografado;
    textArea.value = "";
}


function criptografar (stringCriptografar) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringCriptografar = stringCriptografar.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringCriptografar.includes(matrizCodigo[i][0])) {
            stringCriptografar = stringCriptografar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    if(boneco.style.visibility !== 'hidden') {
        boneco.style.visibility = 'hidden';
    }
    if(copiar.style.visibility !== 'visible') {
        copiar.style.visibility = 'visible';
    }

    if(alertaTexto.style.visibility !== 'hidden') {
        alertaTexto.style.visibility = 'hidden';
    }
    if(copiar.style.visibility !== 'visible') {
        copiar.style.visibility = 'visible';
    }

    return stringCriptografar;
}

function desencriptografar (stringDesincriptografar) {
    let matrizCodigo = [["e" , "enter"] , ["i" , "imes"] , ["a" , "ai"] , ["o" , "ober"] , ["u" , "ufat"]];
    stringDesincriptografar = stringDesincriptografar.toLowerCase();

    for(let i = 0; i <matrizCodigo.length; i++) {
        if(stringDesincriptografar.includes(matrizCodigo[i][0])) {
            stringDesincriptografar = stringDesincriptografar.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    if(boneco.style.visibility !== 'hidden') {
        boneco.style.visibility = 'hidden';
    }
    if(copiar.style.visibility !== 'visible') {
        copiar.style.visibility = 'visible';
    }
    if(alertaTexto.style.visibility !== 'hidden') {
        alertaTexto.style.visibility = 'hidden';
    }
    if(copiar.style.visibility !== 'visible') {
        copiar.style.visibility = 'visible';
    }
    return stringDesincriptografar;
}

function botaoCopiar () {
    navigator.clipboard.writeText(mensagem.value).then(() => {
    })
}
