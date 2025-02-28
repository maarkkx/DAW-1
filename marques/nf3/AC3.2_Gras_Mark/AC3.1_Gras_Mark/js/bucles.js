const buRes1 = document.getElementById("buRes1");
const buRes2 = document.getElementById("buRes2");

//Exercici 6 Taula de multiplicar
let num = 5;
let multiplicacions = 10;
let resultat = "";
let res = 0;

for (let x = 0; x <= 10; x++) {
    res = num * x;
    resultat += num + " x " + x + " = " + res + "<br>";
}

buRes1.innerHTML = resultat;

//Exercici 7 numeros primers
let resultat2 = "";
let end = 20;
for(let num2 = 1; num2 <= end; num2++){
    let comprobar = true;

    if (num2 > 1){
        for (let div = 2; div < num2; div++){

            if (num2 % div == 0){
                comprobar = false;
                break;
            }
        }
        if (comprobar){
            resultat2 += "El número " + num2 + " és un número primer" + "<br>";
        }
    }
}
buRes2.innerHTML = resultat2;