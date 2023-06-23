let clock = document.getElementById('clock');
let startButton = document.getElementById('start');
let resetButton = document.getElementById('reset');

let workTime = 25 * 60;
let currentTime = workTime;
let isRunning = false;
let timer = null;

function updateClock() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    clock.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.onclick = function() {
    if (isRunning) {
        clearInterval(timer);
    } else {
        timer = setInterval(function() {
            currentTime--;
            if (currentTime < 0) {
                currentTime = workTime;
            }
            updateClock();
        }, 1000);
    }
    isRunning = !isRunning;
};

resetButton.onclick = function() {
    clearInterval(timer);
    currentTime = workTime;
    isRunning = false;
    updateClock();
};

updateClock();
