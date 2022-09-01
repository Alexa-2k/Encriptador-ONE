//Selectoresencrypt
const input = document.querySelector("#txt_input");
const btnEncrypt = document.querySelector("#encode_btn");
const btnDecrypt = document.querySelector("#decode_btn");
const outMessage = document.querySelector("#outMessage");
const btnCopy = document.querySelector("#copy_btn");

inputverificar();

//captura el id en el momento del click y direcciona el programa para el método que encripta el texto
document.getElementById('encode_btn').onclick = (e) => {
  e.preventDefault();
  const encodedTxt = encrypt(input.value);
  outMessage.value = encodedTxt;
  input.value = "";
  // shows()
}

//captura el id en el momento del click y direcciona el programa para el método que desencripta el texto
document.getElementById('decode_btn').onclick = (e) => {
  e.preventDefault();
  const decodedTxt = decrypt(input.value);
  outMessage.value = decodedTxt;
  input.value = "";
  // shows()
}

//captura el id en el momento del click y hace la validación que copia el texto
document.getElementById('copy_btn').onclick = (e) => {
  e.preventDefault();
  const outMessage = document.querySelector(".outMessage");
  outMessage.select();
  navigator.clipboard.writeText(outMessage.value)
  outMessage.value = "";
  alert("Texto copiado. Por favor péguelo en la ventana izquierda");
}

//encripta el texto
function encrypt(encodedString) {
  let keyArray = [["e", "enter"],["i", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];
 
  for (let j = 0; j < keyArray.length; j++) {
    if (encodedString.includes(keyArray[j][0])) {
      encodedString = encodedString.replaceAll(keyArray[j][0], keyArray[j][1])
    }
  }
  return encodedString
}

//desencripta el texto
function decrypt(decodedString) {
   var keyArray = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]

  for (let j = 0; j < keyArray.length; j++) {
    if (decodedString.includes(keyArray[j][1])) {
      decodedString = decodedString.replaceAll(keyArray[j][1], keyArray[j][0])
    }
  }
  return decodedString
}

//verifica lo ingresado por el usuario.
function inputverificar() {
  var inputPalabra = document.querySelector(".txt_input");
  inputPalabra.addEventListener("keydown", function (e) {
    var keyCode = (e.keyCode ? e.keyCode : e.which);

    if (keyCode > 47 && keyCode < 65) {
      e.preventDefault();
    }
  });
}

const target = document.querySelector('div.target');

target.addEventListener('paste', (event) => {
    event.preventDefault();

    let paste = (event.clipboardData || window.clipboardData).getData('text');
    paste = paste.toUpperCase();
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    selection.deleteFromDocument();
    selection.getRangeAt(0).insertNode(document.createTextNode(paste));
});
