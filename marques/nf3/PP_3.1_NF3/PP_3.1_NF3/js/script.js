
// Funció de validació global del formulari
function validarFormulari(event) {
    // Evitar comportament predeterminat del formulari
    event.preventDefault();

    var  = document.getElementById("");
    var  = document.getElementById("");
    var  = document.getElementById("");
    var  = document.getElementById("");
    var  = document.getElementById("");
    var  = document.getElementById("");
    var  = document.getElementById("");

    // Validar camps obligatoris
    

    // Validar longitud mínima de la contrasenya
    

    // Comprovar si les contrasenyes coincideixen
    

    // Actualitzar la secció de "Informació introduïda"
    mostrarInformacio(nom, primerCognom, email, comentaris, dataNaixement);
    return true;
}

// Funció per actualitzar la informació al costat
function mostrarInformacio(nom, primerCognom, email, comentaris, dataNaixement) {
    document.getElementById("").innerText = ": " + .value;
    document.getElementById("").innerText = ": " + .value;
    document.getElementById("").innerText = ": " + .value;
	  document.getElementById("").innerText = ": " + .value;
    document.getElementById("").innerText = ": " + (.value || "No hi ha comentaris.");
  

    // Mostrem un missatge d'èxit
    alert("Informació introduïda correctament!");
}


