const LLETRES = "TRWAGMYFPDXBNJZSQVHLCKE";
//Inputs  
const numEx = document.getElementById("numero");
const bAcc = document.getElementById("exec");
const terminal = document.getElementById("terminal");

//boton
bAcc.addEventListener("click", executar);

numEx.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        executar();
    }
});

async function executar() {
    // Obtenir els 'inputs' del document i guardar-los en variables
    let ex = numEx.value;

    //Exercicis
    if (ex == 1) {
        //EXERCICI 1
        let hola = LLETRES.length;
        terminal.innerHTML = "Lletres: " + hola;

    } else if (ex == 2) {
        //EXERCICI 2
        let hola2 = LLETRES.charAt(10);
        terminal.innerHTML = "lletra 10: " + hola2;

    } else if (ex == 3) {
        //EXERCICI 3
        let hola3 = LLETRES.substring(10, 20);
        terminal.innerHTML = "De la 10 a la 20: " + hola3;

    } else if (ex == 4) {
        //EXERCICI 4
        let nom = prompt("escriu el teu nom");
        let cognom = prompt("escriu el teu cognom");
        let primeraMajuscula = nom.charAt(0).toUpperCase();
        let restaMinuscula = nom.substring(1).toLowerCase();
        let nomCorrecte = primeraMajuscula + restaMinuscula;
        let cognomMajuscula = cognom.charAt(0).toUpperCase();
        let cognomMinuscula = cognom.substring(1).toLowerCase();
        let cognomCorrecte = cognomMajuscula + cognomMinuscula;
        terminal.innerHTML = nomCorrecte + " " + cognomCorrecte;

    } else if (ex == 5 || ex == 6) {
        //Exercici 5-6
        let frase = "La montaña verde esta hundiendose"
        let paraula = prompt("Escriu la paraula que vols buscar");
        terminal.innerHTML = frase.includes(paraula);
        terminal.innerHTML = frase.startsWith(paraula);

    } else if (ex == 7) {
        //EXERCICI 7
        let frase2 = "La montaña montaña acaba de verde hundiendo";
        let paraula2 = prompt("Escriu la paraula");
        let paraulaPrimera = frase2.indexOf(paraula2);
        let paraulaUltima = frase2.lastIndexOf(paraula2) + paraula2.length;
        terminal.innerHTML = "Primera posició: " + paraulaPrimera + " Ultima Posicio: " + paraulaUltima;

    } else if (ex == 8) {
        //EXERCICI 8
        let frase2 = "La montaña diablo calvo montaña acaba de verde hundiendo";
        let paraula2 = prompt("Escriu la paraula");
        let paraulaPrimera = frase2.indexOf(paraula2);
        let paraulaUltima = frase2.lastIndexOf(paraula2) + paraula2.length;
        terminal.innerHTML = "Primera posició: " + paraulaPrimera + " Ultima Posicio: " + paraulaUltima;
        paraulaPrimera = frase2.indexOf(paraula2);
        paraulaUltima = frase2.lastIndexOf(paraula2) + paraula2.length;
        terminal.innerHTML = frase2.substring(paraulaPrimera, paraulaUltima);

        //CONDICIONALS
    } else if (ex == 9) {
        //Exercici 9 
        let preu = parseFloat(prompt("Escriu el preu"));
        const taxa = 5;
        if (preu >= 500) {
            let descompte = preu * 0.1;
            preu -= descompte;
            terminal.innerHTML = "El preu final es " + preu;
        } else if (preu < 20) {
            preu = preu + 5;
            terminal.innerHTML = "El preu final es " + preu;
        }
        else {
            terminal.innerHTML = "No s'ha aplicat cap descompte ni taxa"
        }
    } else if (ex == 10) {
        //Exercici 10
        const contrasenya = parseFloat(prompt("Escriu una nova contraseña"));
        let contrasenyaCorrecte = parseFloat(prompt("Escriu la contrasenya anterior"))
        if (contrasenya == contrasenyaCorrecte) {
            terminal.innerHTML = "La contrasenya es correcte";
        } else {
            terminal.innerHTML = "La contrasenya es incorrecte";
        }
    } else if (ex == 11) {
        let numeroMultiple1 = parseFloat(prompt("Escriu el numero 1"));
        let numeroMultiple2 = parseFloat(prompt("Escriu el numero multiple"));
        let residu = numeroMultiple1 % numeroMultiple2;
        if (residu == 0) {
            terminal.innerHTML = "El numero SI es multiple";
        } else {
            terminal.innerHTML = "El numero NO es multiple";
        }
    } else if (ex == 12) {
        let numUsuari = parseFloat(prompt("Escriu un numero (Negatiu, positiu o zero)"));
        if (numUsuari == 0) {
            terminal.innerHTML = "El numero es 0"
        } else if (numUsuari > 0) {
            terminal.innerHTML = "El numero es positiu"
        } else {
            terminal.innerHTML = "El numero es negatiu"
        }

    } else if (ex == 13) {
        let edat = parseFloat(prompt("Escriu la teva edat"));
        if (edat >= 18 && edat < 80) {
            terminal.innerHTML = "Pots conduir un cotxe";
        } else if (edat < 16 && edat > 65) {
            terminal.innerHTML = "No estas en edat de treballar";
        } else if (edat < 3) {
            terminal.innerHTML = "Has d'anar a la guarderia";
        } else if (edat >= 18 && edat <= 24) {
            terminal.innerHTML = "Pots estudiar un CFGS";
        }

    } else if (ex == 14) {
        let numerosRandom = prompt("Escriu dos o mes numeros separats amb espais");
        let treureEspais = numerosRandom.split(" ");
        let numeroMayor = 0;

        for (let x1 = 0; x1 < treureEspais.length; x1++) {
            if (numeroMayor < treureEspais[x1]) {
                numeroMayor = treureEspais[x1]
            }
        }
        terminal.innerHTML = "El numero més gran es: " + numeroMayor;
        console.log(numeroMayor);
    } else if (ex == 15) {

    } else if (ex == 16) {
        let any = parseFloat(prompt("Introdueix un any"));
        let any2 = any % 4;
        let any3 = any % 100;
        let any4 = any % 400;

        if (any4 == 0) {
            terminal.innerHTML = "SI es un any de trapas";
        } else if (any2 == 0 && any3 != 0) {
            terminal.innerHTML = "SI es un any de trapas";
        } else {
            terminal.innerHTML = "NO es un any de trapas";
        }
    } else if (ex == 17) {
        let repeticion = 75;
        for (i = 0; i < repeticion; i++) {
            let numeroDividido = 25;
            let numero = 5;
            let numero2 = numeroDividido % numero;
            if (numero2 == 0) {
                terminal.innerHTML = numeroDividido;
            }
            numeroDividido += 1;
        }
    } else if (ex == 18) {
        let bus1 = '▄▄1▄▄';
        let bus2 = '▄▄2▄▄';
        let bus3 = '▄▄3▄▄';
        let bus4 = '▄▄4▄▄';
        let bus5 = '▄▄5▄▄';
        let bus6 = '▄▄6▄▄';
        let bus7 = '▄▄7▄▄';
        let bus8 = '▄▄8▄▄';
        let bus9 = '▄▄9▄▄';
        let bus10 = '▄▄10▄▄';
        let bus11 = '▄▄11▄▄';
        let bus12 = '▄▄12▄▄';
        let bus13 = '▄▄13▄▄';
        let bus14 = '▄▄14▄▄';
        let bus15 = '▄▄15▄▄';
        let bus16 = '▄▄16▄▄';
        let bus17 = '▄▄17▄▄';
        let bus18 = '▄▄18▄▄';
        let bus19 = '▄▄19▄▄';
        let bus20 = '▄▄20▄▄';
        let espacio = '&nbsp;';
        let num = 0;

        while (num != 200) {
            let numeroRandom1 = Math.round(Math.random() * 100);
            if (numeroRandom1 <= 50 && numeroRandom1 >= 0) {
                bus1 = espacio + bus1;

            }
            let numeroRandom2 = Math.round(Math.random() * 100);
            if (numeroRandom2 <= 50 && numeroRandom2 >= 0) {
                bus2 = espacio + bus2;

            }
            let numeroRandom3 = Math.round(Math.random() * 100);
            if (numeroRandom3 <= 50 && numeroRandom3 >= 0) {
                bus3 = espacio + bus3;

            }
            let numeroRandom4 = Math.round(Math.random() * 100);
            if (numeroRandom4 <= 50 && numeroRandom4 >= 0) {
                bus4 = espacio + bus4;

            }
            let numeroRandom5 = Math.round(Math.random() * 100);
            if (numeroRandom5 <= 50 && numeroRandom5 >= 0) {
                bus5 = espacio + bus5;

            }
            let numeroRandom6 = Math.round(Math.random() * 100);
            if (numeroRandom6 <= 50 && numeroRandom6 >= 0) {
                bus6 = espacio + bus6;

            }
            let numeroRandom7 = Math.round(Math.random() * 100);
            if (numeroRandom7 <= 50 && numeroRandom7 >= 0) {
                bus7 = espacio + bus7;

            }
            let numeroRandom8 = Math.round(Math.random() * 100);
            if (numeroRandom8 <= 50 && numeroRandom8 >= 0) {
                bus8 = espacio + bus8;

            }
            let numeroRandom9 = Math.round(Math.random() * 100);
            if (numeroRandom9 <= 50 && numeroRandom9 >= 0) {
                bus9 = espacio + bus9;

            }
            let numeroRandom10 = Math.round(Math.random() * 100);
            if (numeroRandom10 <= 50 && numeroRandom10 >= 0) {
                bus10 = espacio + bus10;

            }
            let numeroRandom11 = Math.round(Math.random() * 100);
            if (numeroRandom11 <= 50 && numeroRandom11 >= 0) {
                bus11 = espacio + bus11;

            }
            let numeroRandom12 = Math.round(Math.random() * 100);
            if (numeroRandom12 <= 50 && numeroRandom12 >= 0) {
                bus12 = espacio + bus12;

            }
            let numeroRandom13 = Math.round(Math.random() * 100);
            if (numeroRandom13 <= 50 && numeroRandom13 >= 0) {
                bus13 = espacio + bus13;

            }
            let numeroRandom14 = Math.round(Math.random() * 100);
            if (numeroRandom14 <= 50 && numeroRandom14 >= 0) {
                bus14 = espacio + bus14;

            }
            let numeroRandom15 = Math.round(Math.random() * 100);
            if (numeroRandom15 <= 50 && numeroRandom15 >= 0) {
                bus15 = espacio + bus15;

            }
            let numeroRandom16 = Math.round(Math.random() * 100);
            if (numeroRandom16 <= 50 && numeroRandom16 >= 0) {
                bus16 = espacio + bus16;

            }
            let numeroRandom17 = Math.round(Math.random() * 100);
            if (numeroRandom17 <= 50 && numeroRandom17 >= 0) {
                bus17 = espacio + bus17;

            }
            let numeroRandom18 = Math.round(Math.random() * 100);
            if (numeroRandom18 <= 50 && numeroRandom18 >= 0) {
                bus18 = espacio + bus18;

            }
            let numeroRandom19 = Math.round(Math.random() * 100);
            if (numeroRandom19 <= 50 && numeroRandom19 >= 0) {
                bus19 = espacio + bus19;

            }
            let numeroRandom20 = Math.round(Math.random() * 100);
            if (numeroRandom20 <= 50 && numeroRandom20 >= 0) {
                bus20 = espacio + bus20;

            }
            terminal.innerHTML = bus1 + "<br>" + bus2 + "<br>" + bus3 + "<br>" + bus4 + "<br>" + bus5 + "<br>" + bus6 + "<br>" + bus7 + "<br>" + bus8 + "<br>" + bus9 + "<br>" + bus10 + "<br>" + bus11 + "<br>" + bus12 + "<br>" + bus13 + "<br>" + bus14 + "<br>" + bus15 + "<br>" + bus16 + "<br>" + bus17 + "<br>" + bus18 + "<br>" + bus19 + "<br>" + bus20;
            num += 1;
            await wait(0.1)
        }

    } else if (ex == 19) {
        let paraula = prompt("Escriu una frase");
        let valor = paraula.length - 1;
        let paraulaBien = "";
        for (let x = valor; x >= 0; x--) {
            paraulaBien += paraula.charAt(x);
        }
        terminal.innerHTML = paraulaBien;
    } else if (ex == 20) {
        let numAst = parseFloat(prompt("Escriu la quantitat d'astericos que vols:"));
        let ast = "*";
        for (let x = 0; x < numAst; x++) {
            console.log(ast);
            for (let n = 0; n < 1; n++) {
                "<br>"
            }
            ast += "*";
        }
    } else if (ex == 21) {
        let corredorNom1 = prompt("Escriu el nom del corredor 1");
        let tempsCorredor1 = parseFloat(prompt("Escriu el temps del corredor 1"));

        let corredorNom2 = prompt("Escriu el nom del corredor 2");
        let tempsCorredor2 = parseFloat(prompt("Escriu el temps del corredor 2"));

        //if per comparar temps i saber qui es el guanyador
        if (tempsCorredor1 > tempsCorredor2) {
            alert("El guanyador a sigut " + corredorNom2 + " amb un temps de " + tempsCorredor2);
        } else {
            alert("El guanyador a sigut " + corredorNom1 + " amb un temps de " + tempsCorredor1);
        }
    } else if (ex == 22) {
        let ufs = 6;
        let contador = 0;
        let notes = [];
        let notUf;
        let mitjana = 0;
        let masAlta = 0;
        let masBaja = 10;
        alert("Hauras d'escriure una nota i et tornara a preguntar i hauras de posar la de la següent UF i aixi fins la UF6");
        while (contador < ufs) {
            notUf = parseFloat(prompt("Escriu una nota"));
            notes.push(notUf);
            console.log(notes[contador])
            contador++;
        }
        contador = 0;
        while (contador < ufs) {
            mitjana += notes[contador];
            contador++;
        }
        mitjana = mitjana / 6;
        console.log(mitjana)
        while (contador < ufs) {
            if (masAlta < notes[contador]) {
                masAlta = notes[contador];
            }
            if (masBaja > notes[contador]) {
                masBaja = notes[contador];
            }
            contador++;
        }
        if (mitjana < 5) {
            terminal.innerHTML = "Has suspes" + "<br>" + "Nota més baixa: " + masBaja + "<br>" + "Nota més alta: " + masAlta + "<br>" + "Mitjana: " + mitjana;
        } else {
            terminal.innerHTML = "Has aprovat" + "<br>" + "Nota més baixa: " + masBaja + "<br>" + "Nota més alta: " + masAlta + "<br>" + "Mitjana: " + mitjana;
        }

    } else if (ex == 23) {
        let escull = parseInt(prompt("Encriptar = 0  Desencriptar = 1"))
        switch (escull) {
            case 0:
                let frase = prompt("Escriu una frase").toLowerCase();
                let abc = "abcdefghijklmnopqrstuwxyz";
                let desplaçament = parseInt(prompt("Escriu el numero de desplaçament"));
                let fraseArraySplit = frase.split("");
                let fraseEncriptada = "";

                for (let x = 0; x < frase.length; x++) {
                    let letra = abc.indexOf(fraseArraySplit[x]);
                    console.log(letra)
                    if (letra == -1) {
                        fraseEncriptada += fraseArraySplit[x];
                        console.log(fraseEncriptada)
                    } else {
                        let posició = (letra + desplaçament) % 26;
                        console.log(posició)
                        fraseEncriptada += abc[posició]
                    }
                }
                terminal.innerHTML = fraseEncriptada;
                break;
            case 1:
                let frase2 = prompt("Escriu una frase").toLowerCase();
                let abc2 = "abcdefghijklmnopqrstuwxyz";
                let desplaçament2 = parseInt(prompt("Escriu el numero de desplaçament"));
                let fraseArraySplit2 = frase2.split("");
                let fraseEncriptada2 = "";

                for (let x = 0; x < frase2.length; x++) {
                    let letra = abc2.indexOf(fraseArraySplit2[x]);
                    console.log(letra)
                    if (letra == -1) {
                        fraseEncriptada2 += fraseArraySplit2[x];
                        console.log(fraseEncriptada2)
                    } else {
                        let posició = (letra + 26 - desplaçament2) % 26;
                        console.log(posició)
                        fraseEncriptada2 += abc2[posició]
                    }
                }
                terminal.innerHTML = fraseEncriptada2;
                break;
        }
    } else if (ex == 24) {
        let paraules = [];
        let contador = 0;
        while (contador < 10) {
            paraules.push(prompt("Escriu una paraula"));
            contador++;
        }
        paraules = paraules.sort();
        contador = 0;
        while (contador < 10) {
            console.log(paraules[contador])
            contador++;
        }

        let paraula;
        do {
            let contadorCosas = 0;
            let min = 0;
            let max = paraules.length - 1;
            let mig = parseInt((max + min) / 2);
            paraula = prompt("Escriu una paraula");
            while (min < max) {
                mig = parseInt((max + min) / 2);
                console.log(paraules[mig])
                console.log(paraula)
                if (paraules[mig] == paraula) {
                    contadorCosas++;
                    terminal.innerHTML = "La paraula esta a la posició: " + paraules[mig] + " s'han fet: " + contadorCosas + " comparacions";
                    break;
                } else if (paraules[mig] < paraula) {
                    contadorCosas++;
                    min = mig;
                } else if (paraules[mig] > paraula) {
                    contadorCosas++;
                    max = mig
                }
            }
        } while (paraula != "FI")

    } else if (ex == 25) {
        let filesColumnes = prompt("Escriu les columnes  i files de la array (Ej: 3 4)");
        let filesColumnesArray = filesColumnes.split(" ");
        let columnes = filesColumnesArray[1];
        let files = filesColumnesArray[0];
        let arrayBi = [];
        for (let i = 0; i < files; i++) {
            arrayBi[i] = [];
            for (let j = 0; j < columnes; j++) {
                arrayBi[i][j] = Math.floor(Math.random() * 10);
            }
        }

        let resultat = "";
        for (let i = 0; i < files; i++) {
            resultat += arrayBi[i].join(" ") + "\n";
        }
        console.log(resultat)


        let sumaFiles = [];
        for (let i = 0; i < files; i++) {
            let sumaFila = 0;
            for (let j = 0; j < columnes; j++) {
                sumaFila += arrayBi[i][j];
            }
            sumaFiles.push(sumaFila)
        }
        let sumaColumnes = [];
        for (let j = 0; j < columnes; j++) {
            let sumaCol = 0;
            for (let i = 0; i < files; i++) {
                sumaCol += arrayBi[i][j];
            }
            sumaColumnes.push(sumaCol)
        }

        let sumaAllCol = 0;
        for (let i = 0; i < sumaColumnes.length; i++) {
            sumaAllCol += sumaColumnes[i];
        }

        let sumaAllFil = 0;
        for (let i = 0; i < sumaFiles.length; i++) {
            sumaAllFil += sumaFiles[i];
        }

        let total = 0;
        if (sumaAllCol == sumaAllFil) {
            total = sumaAllCol;
            terminal.innerHTML = "La suma dona el mateix: " + total;
        }
    } else if (ex == 26) {
        let columnes = 4;
        let files = 6;
        let notes = [];

        for (let i = 0; i < files; i++) {
            notes[i] = [];
            for (let j = 0; j < columnes; j++) {
                notes[i][j] = Math.floor(Math.random() * 10);
            }
        }
        let resultat = "";
        for (let i = 0; i < files; i++) {
            resultat += notes[i].join(" ") + "\n";
        }
        console.log(resultat);
        let media = [];
        for (let j = 0; j < columnes; j++) {
            let sumaCol = 0;
            let mitjanaCol = 0;
            for (let i = 0; i < files; i++) {
                sumaCol += notes[i][j];
            }
            mitjanaCol = Math.floor(sumaCol / 6);
            media.push(mitjanaCol)
        }
        let mediaUF = "";
        for (let i = 0; i < files; i++) {
            mediaUF += media[i] + " ";
        }
        console.log(mediaUF);

    } else if (ex == 27) {
        const LLIBRES = [];

        const ISBN = document.getElementById("isbn");
        const TITOL = document.getElementById("titol");
        const AUTOR = document.getElementById("autor");
        const TEMATICA = document.getElementById("tematica");
        const RESUM = document.getElementById("resum");

        const BAFEGIR = document.getElementById("afegir");
        const BMOSTRAR = document.getElementById("mostrar");

        const TERMINAL = document.getElementById("terminal");

        BAFEGIR.addEventListener("click", () => {
            const CODI = ISBN.value.trim();
            let ndx = -1;
            for (let i = 0; i < LLIBRES.length; i++) {
                if (LLIBRES[i].ISBN === CODI) {
                    ndx = i;
                    break;
                }
            }

            if (ndx !== -1) {
                alert("Aquest llibre ja existeix");
                return;
            }

            // Crear un objecte amb les dades del llibre i afegir-lo a la llista
            let l = {
                ISBN: ISBN.value.trim(),
                TITOL: TITOL.value.trim(),
                AUTOR: AUTOR.value.trim(),
                TEMATICA: TEMATICA.value.trim(),
                RESUM: RESUM.value.replaceAll("\n", "<br>")
            };

            LLIBRES.push(l);
            alert("Llibre afegit correctament");
        });

        BMOSTRAR.addEventListener("click", llistaLlibres);

        function llistaLlibres() {
            let html = "";
            for (const l of LLIBRES) {
                html += `ISBN: ${l.ISBN}<br>
        Títol: ${l.TITOL}<br>
        Autor: ${l.AUTOR}<br>
        Gènere: ${l.TEMATICA}<br>
        Resum: ${l.RESUM}<br><br>`;
            }

            // Mostrar resultat
            TERMINAL.innerHTML = html;
        }
    } else if (ex == 28) { 
        //REGULAR EXPRESIONS
        //NIF
        const regex1 = /^[KLMNX]\d{7}[A-HJ-NP-TW-Z]$/;
        const texto1 = "K1234567H";
        console.log("NIF: " + regex1.test(texto1));

        //MATRICULA
        const regex2 = /^([A-Z]|[A-Z]{2})-\d{4}-([A-Z]|[A-Z]{2})$/;
        const texto2 = "A-1234-BC";
        console.log("Matricula: " + regex2.test(texto2));

        //CORREU
        const regex3 = /^[a-z]{1}\.([a-zA-Z]*?|[a-zA-Z]*?\d*?)@(sapalomera\.cat)$/;
        const texto3 = "m.gras22@sapalomera.cat";
        console.log("Correo: " + regex3.test(texto3));

        //Nº + o -
        const regex4 = /^[+-]?\d*?[,\.]?\d*?$/;
        const texto4 = "-1,213";
        console.log("nº: " + regex4.test(texto4));
    } else {
        terminal.innerHTML = "Escriu un número d'exercici vàlid";
    }
    numEx.value = "";
}
function wait(s) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), s * 1000);
    });
}
function cambiarKtoC(v) {
    return (v - 273);
}
function cambiarCtoK(b) {
    return (b + 273);
}

function caracterAleatori() {
    Math.floor(Math.random()*126)
}