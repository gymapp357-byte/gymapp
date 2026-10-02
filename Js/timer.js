let countdown;
let timeLeft = 90; // Por defecto 1:30

const btnCompleteSet = document.getElementById('btn-complete-set');
const timerModal = document.getElementById('rest-timer-modal');
const timerDisplay = document.getElementById('timer-display');
const btnSkipTimer = document.getElementById('btn-skip-timer');

// Abrir Temporizador
btnCompleteSet.addEventListener('click', () => {
  timerModal.classList.remove('hidden');
  startTimer(90); // Arranca en 1:30 por defecto
});

// Cerrar/Omitir Temporizador
btnSkipTimer.addEventListener('click', () => {
  clearInterval(countdown);
  timerModal.classList.add('hidden');
});

// Función del reloj
function startTimer(seconds) {
  clearInterval(countdown);
  timeLeft = seconds;
  updateDisplay();

  countdown = setInterval(() => {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft <= 0) {
      clearInterval(countdown);
      // Vibrar celular al terminar el descanso (si el celular lo soporta)
      if (navigator.vibrate) navigator.vibrate([200, 100, 200]);
      
      alert("¡Tiempo de descanso terminado! Siguiente serie.");
      timerModal.classList.add('hidden');
    }
  }, 1000);
}

// Formatear a MM:SS
function updateDisplay() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}