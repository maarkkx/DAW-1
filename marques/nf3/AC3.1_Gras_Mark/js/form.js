const nom = document.getElementById("nom");
const prCognom = document.getElementById("prCognom");
const radioMasc = document.getElementById("masc");
const radioFem = document.getElementById("fem");
const diaNaix = document.getElementById("dia");
const mesNaix = document.getElementById("mes");
const anyNaix = document.getElementById("any");
const nif = document.getElementById("nif");
const email = document.getElementById("email");
const contrasenya = document.getElementById("passwd");
const contrasenyaRep = document.getElementById("passw");
const genere = document.getElementById("genere");

const enviar = document.getElementById("enviar")



enviar.addEventListener("click", env);

function env() {
    if (nom.value == "" || prCognom.value == "" || diaNaix.value == "" || mesNaix.value == "" || anyNaix.value == "" || nif.value == "" || email.value == "" || contrasenya.value == "" || (!radioFem.checked && !radioMasc.checked)) {
        alert("Has d'omplir els camps obligatioris (*)");
    }

    if (!radioFem.checked && !radioMasc.checked) {
        genere.style.backgroundColor = "rgb(251, 215, 215)";
    } else {
        genere.style.backgroundColor = "white";
    }

    let passwd = contrasenya.value;
    let passwd2 = contrasenyaRep.value;

    if (passwd != passwd2) {
        alert("Las contrasenyes han de coincidir");
    }

    if (passwd.length < 8) {
        alert("La contrasenya ha de ser de més de 8 caracters.")
    }

    if (nom.value == "") {
        nom.style.backgroundColor = "rgb(251, 215, 215)";
        nom.style.borderColor = "red";
    } else {
        nom.style.backgroundColor = "white";
        nom.style.borderColor = "black";
    }

    if (prCognom.value == "") {
        prCognom.style.backgroundColor = "rgb(251, 215, 215)";
        prCognom.style.borderColor = "red";
    } else {
        prCognom.style.backgroundColor = "white";
        prCognom.style.borderColor = "black";
    }


    if (diaNaix.value == "") {
        diaNaix.style.backgroundColor = "rgb(251, 215, 215)";
        diaNaix.style.borderColor = "red";
    } else {
        diaNaix.style.backgroundColor = "white";
        diaNaix.style.borderColor = "black";
    }


    if (mesNaix.value == "") {
        mesNaix.style.backgroundColor = "rgb(251, 215, 215)";
        mesNaix.style.borderColor = "red";
    } else {
        mesNaix.style.backgroundColor = "white";
        mesNaix.style.borderColor = "black";
    }


    if (anyNaix.value == "") {
        anyNaix.style.backgroundColor = "rgb(251, 215, 215)";
        anyNaix.style.borderColor = "red";
    } else {
        anyNaix.style.backgroundColor = "white";
        anyNaix.style.borderColor = "black";
    }

    
    if (nif.value == "") {
        nif.style.backgroundColor = "rgb(251, 215, 215)";
        nif.style.borderColor = "red";
    } else {
        nif.style.backgroundColor = "white";
        nif.style.borderColor = "black";
    }

    
    if (email.value == "") {
        email.style.backgroundColor = "rgb(251, 215, 215)";
        email.style.borderColor = "red";
    } else {
        email.style.backgroundColor = "white";
        email.style.borderColor = "black";
    }


    if (contrasenya.value == "") {
        contrasenya.style.backgroundColor = "rgb(251, 215, 215)";
        contrasenya.style.borderColor = "red";
    } else {
        contrasenya.style.backgroundColor = "white";
        contrasenya.style.borderColor = "black";
    }

}

function marcat() {
    nom.focus();
}