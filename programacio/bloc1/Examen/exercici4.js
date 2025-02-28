let guardar;
let guardar2;
let mitjana;
let nota1 = parseFloat(prompt("Escriu la nota del examen 1"));

while (isNaN(nota1) || nota1 < 0 || nota1 > 10) {
    nota1 = prompt("Escriu una nota valida");
}

let nota2 = parseFloat(prompt("Escriu la nota del examen 2"));

while (isNaN(nota2) || nota2 < 0 || nota2 > 10) {
    nota2 = prompt("Escriu una nota valida");
}

let nota3 = parseFloat(prompt("Escriu la nota del examen 3"));

while (isNaN(nota3) || nota3 < 0 || nota3 > 10) {
    nota3 = prompt("Escriu una nota valida");
}

if (nota1 > nota2 && nota1 > nota3) {
    guardar = nota1;
} else if (nota2 > nota1 && nota2 > nota3) {
    guardar = nota2;
} else {
    guardar = nota3;
}

if (nota1 < nota2 && nota1 < nota3) {
    guardar2 = nota1;
} else if (nota2 < nota1 && nota2 < nota3) {
    guardar2 = nota2;
} else {
    guardar2 = nota3;
}

mitjana = nota1 + nota2 + nota3;
console.log(mitjana);
mitjana /= 3;

if (mitjana >= 5) {
    alert("Nota més alta=" + guardar + " Nota més baixa=" + guardar2 + " Mitjana=" + mitjana + " Aprobat");
} else {
    alert("Nota més alta=" + guardar + " Nota més baixa=" + guardar2 + " Mitjana=" + mitjana + " Suspes");
}