

function actualitzarCarta() {
    let nomDestinatari = document.getElementById('nomDestinatari').value;
    let nomRemitent = document.getElementById('nomRemitent').value;
    let assumpte = document.getElementById('assumpte').value;
    let contingut = document.getElementById('contingut').value;

    
    document.getElementById('destinatariCarta').innerText = "Per a: " + nomDestinatari;
    document.getElementById('assumpteCarta').innerText = "Assumpte: " + assumpte;
    document.getElementById('contingutCarta').innerText = contingut;
    document.getElementById('remitentCarta').innerText = "De: " + nomRemitent;

    console.log("Carta actualitzada: ", {
        nomDestinatari,
        nomRemitent,
        assumpte,
        contingut
    });
}


function validarFormulari(event) {
    let nomDestinatari = document.getElementById('nomDestinatari').value;
    let nomRemitent = document.getElementById('nomRemitent').value;
    let assumpte = document.getElementById('assumpte').value;
    let contingut = document.getElementById('contingut').value;

    // Validar si els camps no estan buits
    if (!noBuit(nomDestinatari) || !noBuit(nomRemitent) || !noBuit(assumpte) || !noBuit(contingut)) {
        event.preventDefault();  // Evitem l'enviament del formulari si algun camp està buit
        alert("Has d'omplir tots els camps de la carta.")
        return;
    }

    // Si tot és correcte, actualitzem la carta
    actualitzarCarta();
    event.preventDefault();  // Evitem l'enviament real del formulari
}


// Funció per eliminar la carta
function eliminarCarta() {
    document.getElementById('destinatariCarta').innerText = '';
    document.getElementById('assumpteCarta').innerText = '';
    document.getElementById('contingutCarta').innerText = '';
    document.getElementById('remitentCarta').innerText = '';
}

function noBuit(text) {
    let check = true;
    if (text == "" || text == " ") {
        check = false
    }
    return check;
}

function enviarCarta() {
    alert("La carta s'ha enviat correctament.")
}

