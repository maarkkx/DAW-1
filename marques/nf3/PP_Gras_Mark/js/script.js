
// Funció de validació global del formulari
function validarFormulari(event) {
    // Evitar comportament predeterminat del formulari
    event.preventDefault();

    let nom  = document.getElementById("nom");
    let primerCognom = document.getElementById("primerCognom");
    let email = document.getElementById("email");
    let dataNaixement = document.getElementById("dataNaixement");
    let comentaris = document.getElementById("comentaris");
    let contrasenya = document.getElementById("contrasenya");
    let repeteixContrasenya = document.getElementById("repeteixContrasenya");
    let enviar = document.getElementById("enviar");

    // Validar camps obligatoris
    enviar.addEventListener("click", botoEnviar);

    function botoEnviar() {
        if (nom.value == "" || primerCognom.value == "" || email.value == "" || dataNaixement.value == "" || contrasenya.value == "" || repeteixContrasenya.value == "") {
            alert("Els camps amb '*' son obligatoris");
             
        } else if (contrasenya.value.length < 10) { // Validar longitud mínima de la contrasenya
            alert("La contrasenya ha de tenir més de 10 caracters");
        } else if (contrasenya.value != repeteixContrasenya.value) { // Comprolet si les contrasenyes coincideixen
            alert("Les contrasenyes han de coincidir");
        } else {    // Actualitzar la secció de "Informació introduïda"
            mostrarInformacio(nom, primerCognom, email, comentaris, dataNaixement);
            nom.style.backgroundColor = " white";
            primerCognom.style.backgroundColor = " white";
            email.style.backgroundColor = " white";
            dataNaixement.style.backgroundColor = " white";
            contrasenya.style.backgroundColor = " white";
            repeteixContrasenya.style.backgroundColor = " white";
            return true;
        }

        if (nom.value == "") {
            nom.style.backgroundColor = " rgb(214, 114, 114)";
            nom.focus();
        }


        if (primerCognom.value == "") {
            primerCognom.style.backgroundColor = " rgb(214, 114, 114)";
            primerCognom.focus();
        } 
        

        if (email.value == "") {
            email.style.backgroundColor = " rgb(214, 114, 114)";
            email.focus();
        }


        if (dataNaixement.value == "") {
            dataNaixement.style.backgroundColor = " rgb(214, 114, 114)";
            dataNaixement.focus();
        } 

        
        if (contrasenya.value == "") {
            contrasenya.style.backgroundColor = " rgb(214, 114, 114)";
            contrasenya.focus();
        }


        if (repeteixContrasenya.value == "") {
            repeteixContrasenya.style.backgroundColor = " rgb(214, 114, 114)";
            repeteixContrasenya.focus();
        } 
    }
}

function focus() {
    nom.focus();
}

// Funció per actualitzar la informació al costat
function mostrarInformacio(nom, primerCognom, email, comentaris, dataNaixement) {
    document.getElementById("infoNom").innerText = "Nom: " + nom.value;
    document.getElementById("infoCognom").innerText = "Cognom: " + primerCognom.value;
    document.getElementById("infoEmail").innerText = "Email: " + email.value;
    document.getElementById("infoComentaris").innerText = "Comentaris: " + (comentaris.value || "No hi ha comentaris.");
	document.getElementById("infoDataNaixement").innerText = "Data de Naixement: " + dataNaixement.value;

  

    // Mostrem un missatge d'èxit
    alert("Informació introduïda correctament!");
}


