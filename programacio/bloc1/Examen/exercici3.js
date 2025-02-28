const frase = "En un lugar de la Mancha de cuyo nombre no quiero acordarme";
let a = 0;
let e = 0;
let i = 0;
let o = 0;
let u = 0;
let x = 0;
while (x < frase.length) {
    console.log(frase.charAt(x))
    if (frase.charAt(x) == "E" || frase.charAt(x) == "e") {
        console.log("hola")
        e++;
    }
    if (frase.charAt(x) == "A" || frase.charAt(x) == "a") {
        console.log("hola")
        a++;
    }
    if (frase.charAt(x) == "I" || frase.charAt(x) == "i") {
        console.log("hola")
        i++;
    }
    if (frase.charAt(x) == "O" || frase.charAt(x) == "o") {
        console.log("hola")
        o++;
    }
    if (frase.charAt(x) == "U" || frase.charAt(x) == "u") {
        console.log("hola")
        u++;
    }
    x++;
   
}
console.log("A=" + a + " E=" + e + " I=" + i + " O=" + o + " U=" + u);
alert("A=" + a + " E=" + e + " I=" + i + " O=" + o + " U=" + u);