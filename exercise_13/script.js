const displayTimer = document.getElementById("display");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

const maxTime = 60;

let currentMinutes = 0;
let currentSeconds = 0;

let intervalId;

startBtn.addEventListener("click", startTimer, {once: true});

function renderTimer() {
    const minutes = currentMinutes.toString().padStart(2, 0);
    const seconds = currentSeconds.toString().padStart(2, 0);

    displayTimer.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    currentMinutes = parseInt(minutesInput.value);
    currentSeconds = parseInt(secondsInput.value);

    intervalId = setInterval(() => {
        const previousSeconds = currentSeconds;
        currentSeconds = (currentSeconds - 1 + maxTime) % maxTime;

        if (currentSeconds === maxTime - 1 && previousSeconds === 0) {
            currentMinutes--;
        }
        renderTimer();
        
    }, 1000);
    renderTimer();
    
}

function pauseTimer() {
    clearInterval(intervalId);
    renderTimer();
}
