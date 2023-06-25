let workTime = 25 * 60;
let breakTime = 5 * 60;
let currentTime = workTime;
let isRunning = false;
let timer = null;

let clock = document.getElementById('clock');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let workButton = document.getElementById('work');
let breakButton = document.getElementById('break');

function updateClock() {
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;
    clock.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

startButton.onclick = function() {
    if (!isRunning) {
        timer = setInterval(function() {
            currentTime--;
            if (currentTime < 0) {
                currentTime = workTime;
            }
            updateClock();
        }, 1000);
        isRunning = true;
    }
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
            updateClock();
        }, 1000);
        isRunning = true;
    }
};

resetButton.onclick = function() {
    clearInterval(timer);
    currentTime = workTime;
    isRunning = false;
    updateClock();
};

workButton.onclick = function() {
    clearInterval(timer);
    currentTime = workTime;
    isRunning = false;
    updateClock();
};

breakButton.onclick = function() {
    clearInterval(timer);
    currentTime = breakTime;
    isRunning = false;
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
};
