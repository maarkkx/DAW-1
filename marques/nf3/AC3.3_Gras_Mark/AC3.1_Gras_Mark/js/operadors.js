const opres1 = document.getElementById("opRes1")
const opres2 = document.getElementById("opRes2")
const opres3 = document.getElementById("opRes3")

//Exercici 1 suma de valors
let sum1 = 5;
let sum2 = 10;
let res = sum1+sum2;
opres1.innerHTML = "La suma de " + sum1 + " i " + sum2 + " és: " + res;

//Exercici 2 comprovació divisibilitat
let div1 = 15;
let div2 = 3;
let resultado = div1 % div2;
opres2.innerHTML = "El número " + div1 + " és divisible entre " + div2;

//Exercici 3 intercanvi de variables
let a = 3;
let b = 7;
let c;

c = a;
a = b;
b = c;

opres3.innerHTML = "Els valors intercanviats són: a = " + a + ", b = " + b;