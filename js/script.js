// STOPWATCH

const display = document.getElementById('display');
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
    }

    function stop() {
        if (!isRunning) {
            clearInterval(timer);
            elapsedTime += Date.now() - startTime;
            isRunning = false;
        }
    }

    function reset() { }

    function update() { }