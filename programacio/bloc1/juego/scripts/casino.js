const terminal = document.getElementById("terminal");

const apuesta1 = document.getElementById("apuesta1")
const apuesta2 = document.getElementById("apuesta2")
const apuesta3 = document.getElementById("apuesta3")
const apuesta4 = document.getElementById("apuesta4")
const apuesta5 = document.getElementById("apuesta5")
const apuesta6 = document.getElementById("apuesta6")
const apuesta7 = document.getElementById("apuesta7")

const cam1 = document.getElementById("cam1")
const cam2 = document.getElementById("cam2")
const cam3 = document.getElementById("cam3")
const cam4 = document.getElementById("cam4")
const cam5 = document.getElementById("cam5")
const cam6 = document.getElementById("cam6")
const cam7 = document.getElementById("cam7")

const comenzar = document.getElementById("comenzar")
const apostar = document.getElementById("apostar")
const din = document.getElementById("dinero")

comenzar.addEventListener("click", executar);

let dinero = parseInt(prompt("Cantidad que quieres ingresar? (Min = 1, Max = 100000)"))
while (dinero > 100000 || dinero < 0 || isNaN(dinero)) {
        dinero = parseInt(prompt("Escribe una cantidad permitida"))
}

let dinero2 = "Dinero: " + dinero;
din.innerHTML = dinero2;

/*Funcion para guardar apuestas, hacer carrera y comprobar ganador */
async function executar() {
    let espacio1 = "&nbsp";
    let espacio2 = "&nbsp";
    let espacio3 = "&nbsp";
    let espacio4 = "&nbsp";
    let espacio5 = "&nbsp";
    let espacio6 = "&nbsp";
    let espacio7 = "&nbsp";

    let a1 = parseInt(apuesta1.value);
    let a2 = parseInt(apuesta2.value);
    let a3 = parseInt(apuesta3.value);
    let a4 = parseInt(apuesta4.value);
    let a5 = parseInt(apuesta5.value);
    let a6 = parseInt(apuesta6.value);
    let a7 = parseInt(apuesta7.value);
    let sumaTodo = 0;

    /*Calcular dinero despues de apostar*/
    sumaTodo = a1 + a2 + a3 + a4 + a5 + a6 + a7;
    dinero = dinero - sumaTodo;
    dinero2 = "Dinero: " + dinero;
    din.innerHTML = dinero2;

    /*Creacion arrays para saber cual es el ganador */
    let contador = [];
    let contador2 = [];

    for (let y = 0; y < 7; y++) {
        contador[y] = 0;
        contador2[y] = 0;
    }

    /*Generacion de numeros aleatorios y espacios a la izquierda para hacer que los caballos se vayan desplazando*/
    for (let x = 0; x < 650; x++) {
        let numRandom1 = numRandom();
        if (numRandom1 <= 50 && numRandom1 >= 0) {
            espacio1 = espacio1 + "&nbsp";
            contador[0]++;
            contador2[0]++;
        }

        let numRandom2 = numRandom();
        if (numRandom2 <= 50 && numRandom2 >= 0) {
            espacio2 = espacio2 + "&nbsp";
            contador[1]++;
            contador2[1]++;
        }

        let numRandom3 = numRandom();
        if (numRandom3 <= 50 && numRandom3 >= 0) {
            espacio3 = espacio3 + "&nbsp";
            contador[2]++;
            contador2[2]++;
        }

        let numRandom4 = numRandom();
        if (numRandom4 <= 50 && numRandom4 >= 0) {
            espacio4 = espacio4 + "&nbsp";
            contador[3]++;
            contador2[3]++;
        }

        let numRandom5 = numRandom();
        if (numRandom5 <= 50 && numRandom5 >= 0) {
            espacio5 = espacio5 + "&nbsp";
            contador[4]++;
            contador2[4]++;
        }

        let numRandom6 = numRandom();
        if (numRandom6 <= 50 && numRandom6 >= 0) {
            espacio6 = espacio6 + "&nbsp";
            contador[5]++;
            contador2[5]++;
        }

        let numRandom7 = numRandom();
        if (numRandom7 <= 50 && numRandom7 >= 0) {
            espacio7 = espacio7 + "&nbsp";
            contador[6]++;
            contador2[6]++;
        }

        cam1.innerHTML = espacio1;
        cam2.innerHTML = espacio2;
        cam3.innerHTML = espacio3;
        cam4.innerHTML = espacio4;
        cam5.innerHTML = espacio5;
        cam6.innerHTML = espacio6;
        cam7.innerHTML = espacio7;
        await wait(0.02);
    }
    /*Ordenamos 1 de las array para saber donde esta el valor mas grande */
    contador.sort()
    let ganador = -1;
    /*Comparamos las array para saber cual es el caballo ganador*/
    for (let h = 0; h < 7; h++) {
        if (contador2[h] == contador[6]) {
            ganador = h + 1;
        }
    }
    /*Le decimos al usuario cual ha ganado */
    alert("El caballo ganador es el nº" + ganador)
    /*Mirar las apuestas del usuario y multiplicar en caso de haber ganado */
    if (ganador == 1) {
        dinero = dinero + a1 * 5;
    } else if (ganador == 2) {
        dinero = dinero + a2 * 5;
    } else if (ganador == 3) {
        dinero = dinero + a3 * 5;
    } else if (ganador == 4) {
        dinero = dinero + a4 * 5;
    } else if (ganador == 5) {
        dinero = dinero + a5 * 5;
    } else if (ganador == 6) {
        dinero = dinero + a6 * 5;
    } else if (ganador == 7) {
        dinero = dinero + a7 * 5;
    }
    dinero2 = "Dinero: " + dinero;
    din.innerHTML = dinero2;
}

/*Funcion para generar numeros random */
function numRandom() {
    let numRandom = Math.floor(Math.random() * 100)
    return numRandom;
}

/*Funcion para el tiempo */
function wait(s) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(), s * 1000);
    });
}