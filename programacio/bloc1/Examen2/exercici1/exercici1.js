"use strict";
const frase = " U DOS TRES QUATRE CINC SIS SET VUiT NOU DEU ONZE DOTZE TRETZE CATORZE QUINZE SETZE DISSET DIVUIT DINOU VINT";
let fraseArray = frase.split(" ");
let num = parseInt(prompt("Introdueix un numero del 1 al 20"));
while (num < 0 || num > 20) {
    num = parseInt(prompt("Numero incorrecte, torna a introduir un numero del 1 al 20"));
}
console.log("Has introduit el numero: " + fraseArray[num]);
