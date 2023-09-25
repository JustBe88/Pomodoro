const clock = document.getElementById('clock');
const progressCircle = document.getElementById('progress-circle');
const timer = document.getElementById('timer');
const startStopButton = document.getElementById('start-stop');
const resetButton = document.getElementById('reset');

let timeRemaining = 25 * 60; // 25 minutes in seconds
let interval;

// Start the timer
startStopButton.addEventListener('click', () => {
  if (interval) {
    clearInterval(interval);
    startStopButton.textContent = 'Start';
  } else {
    interval = setInterval(() => {
      timeRemaining--;

      // Update the progress circle
      const progress = timeRemaining / (25 * 60);
      progressCircle.style.strokeDashoffset = 360 - (360 * progress);

      // Update the timer
      timer.textContent = formatTime(timeRemaining);

      // If the timer reaches zero, stop it and reset it
      if (timeRemaining === 0) {
        clearInterval(interval);
        startStopButton.textContent = 'Start';
        timer.textContent = '25:00';
      }
    }, 1000);

    startStopButton.textContent = 'Stop';
  }
});

// Reset the timer
resetButton.addEventListener('click', () => {
  clearInterval(interval);
  timeRemaining = 25 * 60;
  progressCircle.style.strokeDashoffset = 360;
  timer.textContent = '25:00';
});

// Format the time in minutes and seconds
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsRemaining = seconds % 60;

  return `${minutes}:${secondsRemaining.toString().padStart(2, '0')}`;
}
