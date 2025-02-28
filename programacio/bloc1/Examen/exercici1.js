let corredorNom1 = prompt("Escriu el nom del corredor 1");
let tempsCorredor1 = parseFloat(prompt("Escriu el temps del corredor 1"));

let corredorNom2 = prompt("Escriu el nom del corredor 2");
let tempsCorredor2 = parseFloat(prompt("Escriu el temps del corredor 2"));


if (tempsCorredor1 > tempsCorredor2) {
    alert("El guanyador a sigut "  + corredorNom2 + " amb un temps de " + tempsCorredor2);
} else {
    alert("El guanyador a sigut "  + corredorNom1 + " amb un temps de " + tempsCorredor1);
}