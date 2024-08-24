/* . p/clase  - # para id */
const textArea = document.querySelector(".text-area");
const mensajeEncriptado = document.querySelector(".msg-encriptado");

function encriptarTexto(stringEncriptado) {
    // Array multidimensional con las letras y sus equivalentes encriptados
    let letrasEncriptadas = [
        ['e', 'enter'],
        ['i', 'imes'],
        ['a', 'ai'],
        ['o', 'ober'],
        ['u', 'ufat']
    ];
    stringEncriptado = stringEncriptado.toLowerCase();

    // Recorrer el array multidimensional y reemplazar las letras
    for (let i = 0; i < letrasEncriptadas.length; i++) {
        // verificar que las letras están dentro del array
        if (stringEncriptado.includes(letrasEncriptadas[i][0])) {
            // Reemplazar la letra por su equivalente encriptado.  // replaceAll para que la expresión regular sea global y no se interrumpa en medio de una palabra
            stringEncriptado = stringEncriptado.replaceAll(letrasEncriptadas[i][0], letrasEncriptadas[i][1]);
        }
    }
    return stringEncriptado;
}


function desencriptarTexto(stringDesencriptado) {
    // Array multidimensional con las letras y sus equivalentes encriptados
    let letrasDesencriptadas = [
        ['enter', 'e'],
        ['imes', 'i'],
        ['ai', 'a'],
        ['ober', 'o'],
        ['ufat', 'u']
    ];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    // Recorrer el array multidimensional y reemplazar las letras
    for (let i = 0; i < letrasDesencriptadas.length; i++) {
        if (stringDesencriptado.includes(letrasDesencriptadas[i][0])) {
            stringDesencriptado = stringDesencriptado.replaceAll(letrasDesencriptadas[i][0], letrasDesencriptadas[i][1]);
        }
    }
    return stringDesencriptado;
}


function btnEncriptar() {
    // Mostrar el resultado en la pantalla
    mensajeEncriptado.value = encriptarTexto(textArea.value);
    // limpiar el área de texto original
    textArea.value = '';
    // Eliminar la imagen de fondo
    mensajeEncriptado.classList.add("sin-imagen");
}

function btnDesencriptar() {
    // Mostrar el resultado en la pantalla
    mensajeEncriptado.value = desencriptarTexto(textArea.value);
    // limpiar el área de texto original
    textArea.value = '';
    // Eliminar la imagen de fondo
    mensajeEncriptado.classList.add("sin-imagen");
}


// Función para copiar texto
document.querySelector(".btn-copiar").addEventListener("click", function () {
    // Seleccionar el contenido del textarea
    mensajeEncriptado.select();
    // Copiar el texto al portapapeles
    document.execCommand("copy");
    // Resetear el contenido del textarea .msg-encriptado
    mensajeEncriptado.value = '';
    // Mostrar la imagen de fondo nuevamente
    mensajeEncriptado.classList.remove("sin-imagen");
    // Establecer el foco en el textarea .text-area
    textArea.focus();
});




