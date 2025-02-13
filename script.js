// Selectores Encrypt
const input = document.querySelector("#txt_input");
const btnEncrypt = document.querySelector("#encode_btn");
const btnDecrypt = document.querySelector("#decode_btn");
const outMessage = document.querySelector("#outMessage");
const btnCopy = document.querySelector("#copy_btn");


// Configuración inicial de la imagen de fondo en outMessage
outMessage.style.backgroundImage = "url('./Images/lock.png')";

inputVerificar();

// Captura la id en el momento del click y direcciona el programa para el método que ENCRIPTA el texto
btnEncrypt.onclick = (e) => {
    e.preventDefault();
    const encodedTxt = encrypt(input.value);
    outMessage.value = encodedTxt;
    input.value = "";
    outMessage.style.backgroundImage = "none"; // Quitar la imagen de fondo al codificar
    outMessage.classList.add("focused");
}

// Captura la id en el momento del click y direcciona el programa para el método que DESENCRIPTA el texto
btnDecrypt.onclick = (e) => {
    e.preventDefault();
    const decodedTxt = decrypt(input.value);
    outMessage.value = decodedTxt;
    input.value = "";
    outMessage.style.backgroundImage = "none"; // QuitaR la imagen de fondo al decodificar
    outMessage.classList.add("focused");
}

// Captura la id en el momento del click y hace la validación que copia el texto
btnCopy.onclick = (e) => {
    e.preventDefault();
    // Selecciona y copia el texto de outMessage
    outMessage.select();
    navigator.clipboard.writeText(outMessage.value).then(() => {
        // Una vez copiado, mueve el texto a txt_input
        input.value = outMessage.value;
        outMessage.value = "";
        outMessage.style.backgroundImage = "url('../Images/lock.png')"; // Restablecer la imagen de fondo
        outMessage.classList.remove("focused");
   
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// Encripta el texto
function encrypt(encodedString) {
    const keyArray = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let j = 0; j < keyArray.length; j++) {
        encodedString = encodedString.replaceAll(keyArray[j][0], keyArray[j][1]);

    }
    return encodedString;
}

// Desencripta el texto
function decrypt(decodedString) {
    const keyArray = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    for (let j = 0; j < keyArray.length; j++) {
        decodedString = decodedString.replaceAll(keyArray[j][1], keyArray[j][0]);
    }
    return decodedString;
}

// Verifica lo ingresado por el usuario y bloquea los caracteres que no sean letras
function inputVerificar() {
    input.addEventListener("keydown", function (e) {
        const keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 65) {
            e.preventDefault();
        }
    });
}


