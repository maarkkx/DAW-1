let ousAvui = parseFloat(prompt("Escriu el nombre d'ous"));
let oueres = parseFloat(prompt("Escriu la capacitat de les oueres"));
let guardar = 0;
let calculs;
let calculs2;

if (ousAvui < oueres) {
    guardar = oueres;
    oueres = ousAvui;
    ousAvui = guardar;
}
calculs = ousAvui % oueres;
calculs2 = parseInt(ousAvui / oueres);

if (calculs == 0) {
    alert("Necessitaràs " + calculs2 + " oueres")
} else {
    alert("Necessitaràs " + calculs2 + " oueres" + " i sobraran " + calculs + " ous");
}