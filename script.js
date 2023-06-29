document.addEventListener('DOMContentLoaded', (event) => {
    let workTime = 25 * 60;
    let breakTime = 1 * 60;
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
    let lastSelectedTime = workTime; 


function updateClock() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
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
                currentTime = lastSelectedTime;
            }
            if (currentTime <= 3) {
                tickingSound.play();
            }
            let elapsedSeconds = totalSeconds - currentTime;
            let progress = (elapsedSeconds / totalSeconds) * 100;
            setProgress(progress);
            updateClock();
        }, 1000);
        isRunning = true;
        startButton.innerText = 'Pause'; // change the button text to 'Pause'
    } else {
        clearInterval(timer);
        isRunning = false;
        startButton.innerText = 'Start'; // change the button text back to 'Start'
    }
};


resetButton.onclick = function() {
    clearInterval(timer);
    currentTime = lastSelectedTime; // change this line
    totalSeconds = lastSelectedTime; // change this line
    isRunning = false;
    setProgress(0);
    updateClock();
};

workButton.onclick = function() {
    clearInterval(timer);
    currentTime = workTime;
    totalSeconds = workTime;
    lastSelectedTime = workTime;
    isRunning = false;
    setProgress(0);
    updateClock();
};

breakButton.onclick = function() {
    clearInterval(timer);
    currentTime = breakTime;
    totalSeconds = breakTime;
    lastSelectedTime = breakTime;
    isRunning = false;
    setProgress(0);
    updateClock();
};

updateClock();

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
}})