let saldo = 50;
const simbolosRodillos = ["🍒", "🍋", "🍇", "⭐", "🔔", "🍉"];
const botonGirar = document.getElementById("spinButton");
const mensajeResultado = document.getElementById("resultMessage");
const mostrarSaldo = document.createElement("p");

// Mostrar saldo inicial.
mostrarSaldo.id = "balanceDisplay";
mostrarSaldo.textContent = `Saldo: ` + saldo + `€`;
document.querySelector(".slot-container").insertBefore(mostrarSaldo, botonGirar);

function girarRodillos() {
    // Si no hay saldo no permite jugar y te pide recarga.
    if (saldo < 5) {
        let recarga = parseInt(prompt("Saldo insuficiente 💸, ¡Recarga para jugar! (5 - 50)"));
        while (recarga > 50 || recarga < 5) {
            recarga = parseInt(prompt("Recarga incorrecta, debe ser una cantidad entre 5 y 50"));
        }
        saldo += recarga;
        actualizarMostrarSaldo();
    }
    // Cada tirada resta 5€ del saldo.
    saldo -= 5; 
    actualizarMostrarSaldo();

    // Animacion, no explicar.
    const rodillos = document.querySelectorAll(".reel");
    mensajeResultado.textContent = ""; 

    rodillos.forEach(rodillo => {
        rodillo.style.transition = "none";
        rodillo.style.transform = "translateY(0)"; 

        while (rodillo.firstChild) {
            rodillo.removeChild(rodillo.firstChild);
        }

        for (let i = 0; i < 4; i++) {
            for (let simbolo of simbolosRodillos) {
                const simboloDiv = document.createElement("div");
                simboloDiv.classList.add("reel-symbol");
                simboloDiv.textContent = simbolo;
                rodillo.appendChild(simboloDiv);
            }
        }
    });

    const tiemposParada = [3000, 3500, 4000]; 
    const resultados = [];

    rodillos.forEach((rodillo, indice) => {
      
        const alturaSimbolo = 50; 
        const totalSimbolos = simbolosRodillos.length * 4; 

        let posicionActual = 0;
        const intervaloGiro = setInterval(() => {
            posicionActual = (posicionActual + alturaSimbolo) % (totalSimbolos * alturaSimbolo);
            rodillo.style.transform = `translateY(${-posicionActual}px)`;
        }, 50); 
  
        setTimeout(() => {
            clearInterval(intervaloGiro);

            const indiceAleatorio = Math.floor(Math.random() * simbolosRodillos.length);
            const posicionParada = indiceAleatorio * alturaSimbolo;

            rodillo.style.transition = "transform 0.8s ease-out";
            rodillo.style.transform = `translateY(${-posicionParada}px)`;

            setTimeout(() => {
                const simbolos = Array.from(rodillo.querySelectorAll(".reel-symbol"));
                const simboloVisible = simbolos[indiceAleatorio];
                resultados[indice] = simboloVisible.textContent;

                if (resultados.length === rodillos.length && resultados.every(r => r !== undefined)) {
                    verificarGanancia(resultados);
                }
            }, 800); 
        }, tiemposParada[indice]);
    });
}

function verificarGanancia(resultados) {
    //Array para ordenar los resultados.
    const [primero, segundo, tercero] = resultados;

    // Explicar texto final de cada tirada.
    if (primero === segundo && segundo === tercero) {
        saldo += 150; // Jackpot.
        mensajeResultado.textContent = "🎉 ¡JACKPOT! te llevas 150€ 🎉";
    } else if (primero === segundo || segundo === tercero || primero === tercero) {
        saldo += 5; // Te devuelve la apuesta.
        mensajeResultado.textContent = "Dos iguales 🤔, recuperas lo apostado.";
    } else { // Lose .
        mensajeResultado.textContent = "Ninguna coincide 😢, dale otra va.";
    }
    // actualiza el saldo segun lo que ha tocado.
    actualizarMostrarSaldo();
}
// Esta funcion muestra el saldo actualizado de cada tirada.
function actualizarMostrarSaldo() {
    mostrarSaldo.textContent = `Saldo: ` + saldo + `€`;
}
// El boton de jugar.
botonGirar.addEventListener("click", girarRodillos);
