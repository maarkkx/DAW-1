const coRes1 = document.getElementById("coRes1");
const coRes2 = document.getElementById("coRes2");

//Exercici 4 Comparador edat
let edat = 15;

if (edat >= 0 && edat < 10) {
    coRes1.innerHTML = "Està en la categoria infantil."
} else if (edat >= 10 && edat < 18) {
    coRes1.innerHTML = "Està en la categoria jove"
} else if (edat >= 18 && edat < 60) {
    coRes1.innerHTML = "Està en la categoria adult"
} else if (edat >= 60) {
    coRes1.innerHTML = "Està en la categoria sènior"
}

//Exercici 5 Numero perfecte
let num = 8;
let numDivisibles = [];
let posicio = 0;
let suma = 0;

for (let x = 0; x < num; x++) {
    if ((num % x) == 0) {
        numDivisibles[posicio] = x;
        suma += numDivisibles[posicio]
        posicio++;
    }
}

if (suma == num) {
    coRes2.innerHTML = "El número " + num + " és perfecte"
} else {
    coRes2.innerHTML = "El número " + num + " no és perfecte"
}