/* Selecciona el área de texto */
const textArea = document.querySelector(".text-area");
/* Selecciona la lista de mensajes encriptados */
const listaEncriptadas = document.querySelector(".lista-encriptadas");
/* Selecciona la lista de mensajes desencriptados */
const listaDesencriptadas = document.querySelector(".lista-desencriptadas");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

/* Encripta el texto y agrega a la lista de encriptados */
function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    agregarMensajeLista(listaEncriptadas, textoEncriptado);
}

/* Desencripta el texto y agrega a la lista de desencriptados */
function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    agregarMensajeLista(listaDesencriptadas, textoDesencriptado);
}

/* Reemplaza caracteres según la matriz de encriptación */
function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    /* Reemplaza cada carácter en la matriz */
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

/* Reemplaza caracteres según la matriz de desencriptación */
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["enter", "e"], ["imes", "i"], ["ai", "a"], ["ober", "o"], ["ufat", "u"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    /* Reemplaza cada carácter en la matriz */
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][0])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringDesencriptada;
}

/* Agrega un mensaje con botón de copiar a la lista */
function agregarMensajeLista(lista, mensaje) {
    const nuevoMensaje = document.createElement("li");
    nuevoMensaje.textContent = mensaje;

    // Crear botón de copiar
    const botonCopiar = document.createElement("button");
    botonCopiar.classList.add("copiar-btn");
    botonCopiar.innerHTML = '<img src="imgs/copiar.png" alt="Copiar">'; // Asegúrate de tener una imagen llamada "copiar.png" en la carpeta imgs
    botonCopiar.onclick = function() {
        navigator.clipboard.writeText(mensaje).then(() => {
            mostrarPopup(); // Mostrar el pop-up
        });
    };

    nuevoMensaje.appendChild(botonCopiar);
    lista.appendChild(nuevoMensaje);
}

/* Limpia las listas de encriptados y desencriptados */
function vaciarListas() {
    listaEncriptadas.innerHTML = '';
    listaDesencriptadas.innerHTML = '';
}

