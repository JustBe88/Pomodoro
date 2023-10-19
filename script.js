const timerDisplay = document.getElementById('timer');
const progressRingCircle = document.getElementById('progress-ring-circle');
const totalTime = 25 * 60; // 25 minutes in seconds
let timeLeft = totalTime;
let timer;

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  return `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = formatTime(timeLeft);
    const progress = ((totalTime - timeLeft) / totalTime) * 565.48; // 565.48 is the circumference of the circle
    progressRingCircle.setAttribute('stroke-dasharray', `${progress} 565.48`);
    if (timeLeft <= 0) {
      clearInterval(timer);
      // Here you can add code to start a break or restart the work timer
    }
  }, 1000);
}

startTimer();
