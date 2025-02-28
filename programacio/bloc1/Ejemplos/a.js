let preu = 1000;
let descompte = preu*15/100;
const IVA = 0.21;
let preudescompte = preu - descompte;
let preuiva = preudescompte*21/100;
let total = preudescompte + preuiva;

alert("el preu es: " + total)
