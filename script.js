// Selectores Encrypt
const input = document.querySelector("#txt_input");
const btnEncrypt = document.querySelector("#encode_btn");
const btnDecrypt = document.querySelector("#decode_btn");
const outMessage = document.querySelector("#outMessage");
const btnCopy = document.querySelector("#copy_btn");

inputVerificar();

// Captura el id en el momento del click y direcciona el programa para el método que encripta el texto
btnEncrypt.onclick = (e) => {
    e.preventDefault();
    const encodedTxt = encrypt(input.value);
    outMessage.value = encodedTxt;
    input.value = "";
    outMessage.style.backgroundImage = "none"; // Quitar la imagen de fondo al codificar
}

// Captura el id en el momento del click y direcciona el programa para el método que desencripta el texto
btnDecrypt.onclick = (e) => {
    e.preventDefault();
    const decodedTxt = decrypt(input.value);
    outMessage.value = decodedTxt;
    input.value = "";
    outMessage.style.backgroundImage = "none"; // Quitar la imagen de fondo al decodificar
}

// Captura el id en el momento del click y hace la validación que copia el texto
btnCopy.onclick = (e) => {
    e.preventDefault();
    // Selecciona y copia el texto de outMessage
    outMessage.select();
    navigator.clipboard.writeText(outMessage.value).then(() => {
        // Una vez copiado, mueve el texto a txt_input
        input.value = outMessage.value;
        outMessage.value = "";
        outMessage.style.backgroundImage = "url('../Images/lock.png')"; // Restablecer la imagen de fondo
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

// Verifica lo ingresado por el usuario
function inputVerificar() {
    input.addEventListener("keydown", function (e) {
        const keyCode = (e.keyCode ? e.keyCode : e.which);
        if (keyCode > 47 && keyCode < 65) {
            e.preventDefault();
        }
    });
}

// Configuración inicial de la imagen de fondo en outMessage
outMessage.style.backgroundImage = "url('../Images/lock.png')";
