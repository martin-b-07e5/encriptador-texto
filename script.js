const textArea = document.querySelector(".text-area");
const mensajeEncriptado = document.querySelector(".msg-encriptado");
const btnCopiar = document.querySelector(".btn-copiar");

function encriptarTexto(stringEncriptado) {
    const letrasEncriptadas = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringEncriptado = stringEncriptado.toLowerCase();

    // for (let i = 0; i < letrasEncriptadas.length; i++) {
    //     const [letra, encriptado] = letrasEncriptadas[i];
    //     stringEncriptado = stringEncriptado.replaceAll(letra, encriptado);
    // }

    // letrasEncriptadas.forEach(([letra, encriptado]) => {
    //     stringEncriptado = stringEncriptado.replaceAll(letra, encriptado);
    // });

    for (const [letra, encriptado] of letrasEncriptadas) {
        stringEncriptado = stringEncriptado.replaceAll(letra, encriptado);
    }

    return stringEncriptado;
}

function desencriptarTexto(stringDesencriptado) {
    const letrasDesencriptadas = [
        ['enter', 'e'],
        ['imes', 'i'],
        ['ai', 'a'],
        ['ober', 'o'],
        ['ufat', 'u']
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    letrasDesencriptadas.forEach(([encriptado, letra]) => {
        stringDesencriptado = stringDesencriptado.replaceAll(encriptado, letra);
    });

    return stringDesencriptado;
}

function actualizarMensaje(resultado) {
    mensajeEncriptado.value = resultado;
    mensajeEncriptado.style.backgroundImage = "none";
    habilitarBtnCopiar();
    textArea.value = '';
}

function btnEncriptar() {
    const resultado = encriptarTexto(textArea.value);
    actualizarMensaje(resultado);
}

function btnDesencriptar() {
    const resultado = desencriptarTexto(textArea.value);
    actualizarMensaje(resultado);
}

btnCopiar.addEventListener("click", function () {
    try {
        mensajeEncriptado.select();
        document.execCommand("copy");
        mensajeEncriptado.value = '';
        mensajeEncriptado.style.backgroundImage = "url(../images/muneco.png)";
        textArea.focus();
    } catch (error) {
        console.error("No se pudo copiar el texto: ", error);
    }
});

function deshabilitarBtnCopiar() {
    btnCopiar.disabled = true;
}

function habilitarBtnCopiar() {
    btnCopiar.disabled = false;
}

window.addEventListener("load", function () {
    textArea.focus();
    deshabilitarBtnCopiar();
});
