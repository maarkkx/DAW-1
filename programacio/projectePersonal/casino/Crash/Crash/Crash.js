let multiplier = 0.5;
let running = false;
let timer;
let balance = 100.0;
let randomStopPoint = 2.0; // Límite donde se detendrá aleatoriamente
let playerCashedOut = false;

const counterDisplay = document.getElementById("counter");
const betInput = document.getElementById("bet");
const autoCashoutInput = document.getElementById("auto-cashout");
const startButton = document.getElementById("start-button");
const cashoutButton = document.getElementById("cashout-button");
const resultDisplay = document.getElementById("result");
const balanceDisplay = document.getElementById("balance");

// Función para comenzar el juego
startButton.addEventListener("click", () => {
  const bet = parseFloat(betInput.value);
  const autoCashout = parseFloat(autoCashoutInput.value);

  if (!bet || bet <= 0.25 || bet > balance) {
    alert("Porfavor añade una cantidad valida a la apuesta ( 0.25 - 100)");
    return;
  }

  if (autoCashout && (autoCashout < 0.5 || autoCashout > 5)) {
    alert("Auto cashout tiene que ser entre 0.50 y 5.");
    return;
  }

  resetGame();
  running = true;
  playerCashedOut = false;
  startButton.disabled = true;
  cashoutButton.disabled = false;
  multiplier = 0.5; // Iniciar en 0.50x
  balance -= bet;
  updateBalance();

  // Generar un punto de parada aleatorio entre 0.50 y 5.00 basado en las nuevas probabilidades
  randomStopPoint = generateStopPoint();

  timer = setInterval(() => {
    if (!running) return;

    // Incrementar el multiplicador con velocidad ajustada
    let increment = getIncrement(multiplier);
    multiplier += increment;
    counterDisplay.textContent = multiplier.toFixed(2) + "x";

    // Retiro automático
    if (!playerCashedOut && autoCashout && multiplier >= autoCashout) {
      cashOut(bet, true);
    }

    // Detener el contador en el punto aleatorio
    if (multiplier >= randomStopPoint) {
      stopGame(false, bet);
    }
  }, 100); // Actualización cada 100ms
});

// Botón Cash Out para retirar manualmente
cashoutButton.addEventListener("click", () => {
  const bet = parseFloat(betInput.value);
  cashOut(bet, false);
});

// Función para realizar el cash out
function cashOut(bet, isAuto) {
  if (!running || playerCashedOut) return;

  const winnings = (bet * multiplier).toFixed(2); // Siempre multiplicar por el multiplicador actual
  balance += parseFloat(winnings);
  updateBalance();

  resultDisplay.textContent = isAuto
    ? `Auto cashout en ${multiplier.toFixed(2)}x! Has ganado €${winnings}.`
    : `Has hecho cash out en ${multiplier.toFixed(2)}x! Has ganado €${winnings}.`;
  resultDisplay.className = "win";

  playerCashedOut = true;
  cashoutButton.disabled = true;
}

// Detener el juego
function stopGame(success, bet) {
  running = false;
  clearInterval(timer);

  if (!success && !playerCashedOut) {
    if (multiplier >= 0.5 && multiplier < 1.0) {
      const winnings = (bet * multiplier).toFixed(2); // Multiplicar incluso por debajo de 1.00
      balance += parseFloat(winnings);
      updateBalance();
      resultDisplay.textContent = `El multiplier ha parado en ${multiplier.toFixed(2)}x. Te devolvemos €${winnings}.`;
      resultDisplay.className = "partial";
    } else {
      resultDisplay.textContent = `El multiplier ha parado en ${multiplier.toFixed(2)}x. Has perdido €${bet.toFixed(2)}.`;
      resultDisplay.className = "lose";
    }
  }

  checkBalance(); // Verificar el saldo después de detener el juego

  if (!success) {
    setTimeout(() => {
      resetGameControls();
    }, 5000);
  }
}

// Actualizar el saldo mostrado
function updateBalance() {
  balanceDisplay.textContent = balance.toFixed(2);
}

// Reiniciar el juego
function resetGame() {
  clearInterval(timer);
  counterDisplay.textContent = "0.50x";
  resultDisplay.textContent = "";
  resultDisplay.className = "";
  cashoutButton.disabled = true;
  startButton.disabled = false;
}

// Permitir controles nuevamente tras finalizar
function resetGameControls() {
  running = false;
  multiplier = 0.5;
  counterDisplay.textContent = "0.50x";
  startButton.disabled = false;
  cashoutButton.disabled = true;
}

// Generar punto de parada aleatorio basado en nuevas probabilidades
function generateStopPoint() {
  const rand = Math.random() * 100; // Generar un número entre 0 y 100

  if (rand < 15) {
    // 15% entre 0.50 y 1.00
    return (Math.random() * (1 - 0.5) + 0.5).toFixed(2);
  }

  if (rand < 95) { 
    // 80% asignado al rango de 1.00 a 2.00
    const subRand = Math.random() * 100;

    if (subRand < 35) {
      return (Math.random() * (1.1 - 1) + 1).toFixed(2);
    }
    if (subRand < 60) {
      return (Math.random() * (1.3 - 1.1) + 1.1).toFixed(2);
    }
    if (subRand < 80) {
      return (Math.random() * (1.6 - 1.3) + 1.3).toFixed(2);
    }
    if (subRand < 95) {
      return (Math.random() * (1.8 - 1.6) + 1.6).toFixed(2);
    }
    return (Math.random() * (2 - 1.8) + 1.8).toFixed(2);
  }

  if (rand < 97.5) {
    return (Math.random() * (3 - 2) + 2).toFixed(2);
  }
  if (rand < 99.5) {
    return (Math.random() * (4 - 3) + 3).toFixed(2);
  }
  return (Math.random() * (5 - 4) + 4).toFixed(2);
}

// Determinar el incremento del contador basado en el multiplicador actual
function getIncrement(multiplier) {
  if (multiplier < 2) return 0.01; // Lento entre 0.50 y 2.00
  if (multiplier < 3) return 0.02; // Un poco más rápido entre 2.00 y 3.00
  if (multiplier < 4) return 0.03; // Aumenta la velocidad entre 3.00 y 4.00
  return 0.05; // Rápido entre 4.00 y 5.00
}
// Verificar el saldo al finalizar la ronda
function checkBalance() {
  if (balance < 0.25) {
    let rechargeAmount;
    do {
      rechargeAmount = parseFloat(prompt("Te has quedado sin dinero. Introduce una cantidad para recargar (0.25 - 100):"));
      
      if (rechargeAmount >= 0.25 && rechargeAmount <= 100) {
        balance += rechargeAmount;
        updateBalance();
        alert(`Se han añadido €${rechargeAmount.toFixed(2)} a tu saldo.`);
        break;
      } else {
        alert("Por favor, introduce una cantidad válida entre 0.25 y 100.");
      }
    } while (true); // Repite hasta que se introduzca una cantidad válida
  }
}

// Modificar stopGame para incluir checkBalance
function stopGame(success, bet) {
  running = false;
  clearInterval(timer);

  if (!success && !playerCashedOut) {
    resultDisplay.textContent = `El multiplicador ha parado en ${multiplier.toFixed(2)}x. Has perdido ${bet.toFixed(2)}€.`;
    resultDisplay.className = "lose";
  }

  checkBalance(); // Verificar el saldo después de detener el juego

  if (!success) {
    setTimeout(() => {
      resetGameControls();
    }, 5000);
  }
}
