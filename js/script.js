'use strict';

// Declaración de variables
const encryptBtn = document.querySelector('#encrypt');
const decrypttBtn = document.querySelector('#decrypt');
const copytBtn = document.querySelector('#copy');
const inputText = document.querySelector('.input-container textarea');
const outputText = document.querySelector('.output-container textarea');

// Declaración de función
function changeUI() {
  // Ocultar elementos
  Array.from(outputText.closest('div').children).forEach(el => el.classList.add('hidden'));
  inputText.value = "";
  // Mostrar los elementos 
  outputText.classList.remove('hidden');
  copytBtn.classList.remove('hidden');
  outputText.scrollIntoView();
}

function print(param) {
	if (param == "") {
		alert("Por favor, Ingrese algún texto");
		return param.focus();
	}
}

function copyText() {
  alert("Texto copiado con éxito!");
  this.select();
  this.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(this.value);
  inputText.value = "";	
  // Mostrar los elementos 
  Array.from(outputText.closest('div').children).forEach(el => el.classList.remove('hidden'));
 // Ocultar elementos
  outputText.classList.add('hidden');
  copytBtn.classList.add('hidden');
  outputText.scrollIntoView();  
}

function encrypt() {
  // Poner en minúsculas el texto
  const text = this.value.trim().toLowerCase();
  
  // Cláusula
  print(text);
  changeUI();

  // Encriptar texto
  const encryptedText = text
    .split('')
    .map(cha => {
      if (cha === 'a') return 'ai';
      if (cha === 'e') return 'enter';
      if (cha === 'i') return 'imes';
      if (cha === 'o') return 'ober';
      if (cha === 'u') return 'ufat';
      return cha;
    })
    .join('');

  // Salida
  outputText.value = encryptedText;
}

function decrypt() {
  // Poner en minúsculas el texto
  const text = this.value.trim().toLowerCase();

  // Cláusula
  print(text);
  changeUI();

  // Decriptar texto
  const decryptedText = text
    .replaceAll('ai', 'a')
    .replaceAll('enter', 'e')
    .replaceAll('imes', 'i')
    .replaceAll('ober', 'o')
    .replaceAll('ufat', 'u');

  // Salida
  outputText.value = decryptedText;
}

// Eventos
encryptBtn.addEventListener('click', encrypt.bind(inputText));
decrypttBtn.addEventListener('click', decrypt.bind(inputText));
copytBtn.addEventListener('click', copyText.bind(outputText));