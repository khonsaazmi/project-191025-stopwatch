// STOPWATCH

const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;


function start() {
    // Start the stopwatch
    if (!isRunning) { // Only start if not already running
        startTime = Date.now() - elapsedTime; // Adjust start time
        timer = setInterval(update, 10); // Update every 10 milliseconds
        isRunning = true; // Update running state
    }
}

function stop() {
    // Stop the stopwatch
    if (isRunning) {
        clearInterval(timer); // Stop the timer
        elapsedTime = Date.now() - startTime; // Update elapsed time
        isRunning = false; // Update running state
    }
}

function reset() {
    // Reset the stopwatch
    clearInterval(timer); // Stop the timer
    startTime = 0; // Reset start time
    elapsedTime = 0; // Reset elapsed time
    isRunning = false; // Update running state
    display.textContent = '00:00:00:00'; // Reset display
}

function update() {
    // Calculate elapsed time
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime; // in milliseconds

    // Calculate hours, minutes, seconds, milliseconds
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60)); // 1 hour = 3600000 ms
    let minutes = Math.floor(elapsedTime / (1000 * 60) % 60); // 1 minute = 60000 ms
    let seconds = Math.floor(elapsedTime / 1000 % 60); // 1 second = 1000 ms
    let milliseconds = Math.floor(elapsedTime % 1000 / 10); // Two digits for milliseconds

    // Pad with leading zeros 
    hours = hours.toString().padStart(2, '0'); // Always two digits
    minutes = minutes.toString().padStart(2, '0'); // Always two digits
    seconds = seconds.toString().padStart(2, '0'); // Always two digits
    milliseconds = milliseconds.toString().padStart(2, '0'); // Always two digits

    // Update display
    display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}


