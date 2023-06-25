// We are grabbing the HTML elements and storing them in variables for easy access.
let clock = document.getElementById('clock');
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let workButton = document.getElementById('work');
let breakButton = document.getElementById('break');

// We are setting the work and break times in seconds.
let workTime = 25 * 60;
let breakTime = 1 * 10;

// We are initializing the current time to the work time.
let currentTime = workTime;

// This flag will help us track if the timer is running or not.
let isRunning = false;

// This will hold the reference to the timer interval.
let timer = null;

// Create new audio object
let audio = new Audio('ticking_sound.wav'); // make sure to provide the correct path to your ticking sound file

// This function updates the clock on the page.
function updateClock() {
    // Calculate the minutes and seconds from currentTime.
    let minutes = Math.floor(currentTime / 60);
    let seconds = currentTime % 60;

    // If 5 seconds or less remain, play the ticking sound
    if (currentTime <= 3) {
        audio.play();
    }

    // Update the clock's text with the current time.
    clock.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
// When the start button is clicked...
startButton.onclick = function() {
    // If the timer is not running...
    if (!isRunning) {
        // Start a timer that runs every second.
        timer = setInterval(function() {
            // Decrease the currentTime by 1 every second.
            currentTime--;

            // If the currentTime becomes less than 0, reset it to workTime.
            if (currentTime < 0) {
                currentTime = workTime;
            }

            // Update the clock.
            updateClock();
        }, 1000);

        // Set the isRunning flag to true.
        isRunning = true;
    }
};

// When the pause button is clicked...
pauseButton.onclick = function() {
    // If the timer is currently running...
    if (isRunning) {
        // Stop the timer.
        clearInterval(timer);

        // Change the pause button's text to "Resume".
        pauseButton.innerText = "Resume";

        // Set the isRunning flag to false.
        isRunning = false;
    } else {
        // If the timer is not running, start the timer.
        timer = setInterval(function() {
            currentTime--;
            if (currentTime < 0) {
                currentTime = workTime;
            }
            updateClock();
        }, 1000);

        // Change the pause button's text back to "Pause".
        pauseButton.innerText = "Pause";

        // Set the isRunning flag to true.
        isRunning = true;
    }
};

// When the reset button is clicked...
resetButton.onclick = function() {
    // Stop the timer.
    clearInterval(timer);

    // Reset the currentTime to workTime.
    currentTime = workTime;

    // Set the isRunning flag to false.
    isRunning = false;

    // Change the pause button's text back to "Pause".
    pauseButton.innerText = "Pause";

    // Update the clock.
    updateClock();
};

// When the work button is clicked...
workButton.onclick = function() {
    // Stop the timer.
    clearInterval(timer);

    // Set the currentTime to workTime.
    currentTime = workTime;

    // Set the isRunning flag to false.
    isRunning = false;

    // Change the pause button's text back to "Pause".
    pauseButton.innerText = "Pause";

    // Update the clock.
    updateClock();
};

// When the break button is clicked...
breakButton.onclick = function() {
    // Stop the timer.
    clearInterval(timer);

    // Set the currentTime to breakTime.
    currentTime = breakTime;

    // Set the isRunning flag to false.
    isRunning = false;

    // Change the pause button's text back to "Pause".
    pauseButton.innerText = "Pause";

    // Update the clock.
    updateClock();
};

// We update the clock once initially when the page loads.
updateClock();
