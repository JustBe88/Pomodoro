document.addEventListener('DOMContentLoaded', (event) => {
    let workTime = 25 * 60;
    let breakTime = 1 * 30;
    let currentTime = workTime;
    let isRunning = false;
    let timer = null;

    let clock = document.getElementById('clock');
    let startButton = document.getElementById('start');
    let pauseButton = document.getElementById('pause');
    let resetButton = document.getElementById('reset');
    let workButton = document.getElementById('work');
    let breakButton = document.getElementById('break');
    let progressBar = document.getElementById('progress-bar');
    let tickingSound = new Audio("ticking_sound.wav");

function updateClock() {
    let minutes = Math.floor(currentTime / 30);
    let seconds = currentTime % 30;
    clock.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function setProgress(percent) {
    progressBar.value = percent;
}

let totalSeconds = workTime;

startButton.onclick = function() {
    if (!isRunning) {
        timer = setInterval(function() {
            currentTime--;
            if (currentTime < 0) {
                currentTime = workTime;
            }
            if (currentTime <= 3) {
                tickingSound.play();
            }
            let elapsedSeconds = totalSeconds - currentTime;
            let progress = (elapsedSeconds / totalSeconds) * 100;
            setProgress(progress);
            updateClock();
        }, 1000);
};

pauseButton.onclick = function() {
    if (isRunning) {
        clearInterval(timer);
        isRunning = false;
    } else {
        timer = setInterval(function() {
            currentTime--;
            if (currentTime < 0) {
                currentTime = workTime;
            }
            if (currentTime <= 3) {
                tickingSound.play();
            }
            let elapsedSeconds = totalSeconds - currentTime;
            let progress = (elapsedSeconds / totalSeconds) * 100;
            setProgress(progress);
            updateClock();
        }, 1000);
    }
};

resetButton.onclick = function() {
    clearInterval(timer);
    currentTime = workTime;
    totalSeconds = workTime;
    isRunning = false;
    setProgress(0);
    updateClock();
};

workButton.onclick = function() {
    clearInterval(timer);
    currentTime = workTime;
    totalSeconds = workTime;
    isRunning = false;
    setProgress(0);
    updateClock();
};

breakButton.onclick = function() {
    clearInterval(timer);
    currentTime = breakTime;
    totalSeconds = breakTime;
    isRunning = false;
    setProgress(0);
    updateClock();
};

updateClock();

// Add code for switch theme button here
let body = document.body;
let themeSwitch = document.getElementById('theme-switch');
let isOriginalTheme = true;

themeSwitch.onclick = function() {
    if (isOriginalTheme) {
        body.classList.remove('original-theme');
        body.classList.add('new-theme');
    } else {
        body.classList.remove('new-theme');
        body.classList.add('original-theme');
    }
    isOriginalTheme = !isOriginalTheme;
}}})