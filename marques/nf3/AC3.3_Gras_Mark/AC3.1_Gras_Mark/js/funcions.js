const fuRes1 = document.getElementById("fuRes1");
const fuRes2 = document.getElementById("fuRes2");

//Exercici 10 Funcio Suma
let num1 = 10;
let num2 = 15;

fuRes1.innerHTML = "Valors sumats: " + suma(num1, num2)

function suma(a, b) {
    return a + b;
}

//Exercici 11 Funcio maxim
let n1 = 122;
let n2 = 133;

fuRes2.innerHTML = "Valor màxim: " + max(n1, n2)

function max(a, b) {
    if (a < b) return b;
    else return a;
}