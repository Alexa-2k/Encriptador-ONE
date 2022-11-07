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
  var imagen = document.getElementById("outMessage");
  imagen.style.backgroundImage = "none";
}

//captura el id en el momento del click y direcciona el programa para el método que desencripta el texto
document.getElementById('decode_btn').onclick = (e) => {
  e.preventDefault();
  const decodedTxt = decrypt(input.value);
  outMessage.value = decodedTxt;
  input.value = "";
}

// //captura el id en el momento del click y hace la validación que copia el texto
 document.getElementById('copy_btn').onclick = (e) => {
    e.preventDefault();
    const outMessage = document.querySelector(".outMessage");
    outMessage.select();
    console.log(outMessage.value);
    document.getElementById('txt_input').value = outMessage.value;
    navigator.clipboard.writeText(outMessage.value);
    outMessage.value = "";
    imagenVuelve = document.getElementById("output_box");
    imagenVuelve.style.backgroundImage = url("../Images/lock.png");
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


var imagenVuelve = document.getElementById("outMessage");
imagen.style.backgroundImage = url("../Images/lock.png");
