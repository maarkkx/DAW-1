"use strict";
let num = parseInt(prompt("Escriu un numero"));
let arrayBi = [];

for(let j = 0; j < num; j++) {
    arrayBi[j] = [];
    for (let y = 0; y < num; y++) {
        arrayBi[j][y] = "-";
  
    }
}
for(let j = 0; j < num; j++) {
    for (let y = 0; y < num; y++) {
        arrayBi[j][j] = "*";
    }
}
let j2 = 0;
for(let j = num -1; j >= 0; j--) {
    for (let y = 0; y < num; y++) {
        arrayBi[j][j2] = "*";
    }
    j2++;
}


let resultat = "";
for(let j = 0; j < num; j++) {
    for(let y = 0; y < num; y++){
        resultat += arrayBi[j][y] + " ";
    }
    resultat += "\n"
}
console.log(resultat)