const textArea = document.querySelector(".text-area");
const listaEncriptadas = document.querySelector(".lista-encriptadas");
const listaDesencriptadas = document.querySelector(".lista-desencriptadas");

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    agregarMensajeLista(listaEncriptadas, textoEncriptado);
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    agregarMensajeLista(listaDesencriptadas, textoDesencriptado);
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringDesencriptada;
}

function agregarMensajeLista(lista, mensaje) {
    const nuevoMensaje = document.createElement("li");
    nuevoMensaje.textContent = mensaje;
    lista.appendChild(nuevoMensaje);
}

function vaciarListas() {
    listaEncriptadas.innerHTML = '';
    listaDesencriptadas.innerHTML = '';
}
