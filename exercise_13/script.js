const displayTimer = document.getElementById("display");
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const startBtn = document.getElementById("startBtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");
const audioPlayer = document.getElementById("audioPlayer");

const maxTime = 60;

let currentMinutes = 0;
let currentSeconds = 0;

let intervalId = null;

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);

function renderTimer() {
    const minutes = currentMinutes.toString().padStart(2, 0);
    const seconds = currentSeconds.toString().padStart(2, 0);

    displayTimer.textContent = `${minutes}:${seconds}`;
}

function startTimer() {
    if (minutesInput.value === "0" && secondsInput.value === "0") return;

    if (intervalId) return;

    currentMinutes = parseInt(minutesInput.value);
    currentSeconds = parseInt(secondsInput.value);

    intervalId = setInterval(() => {
        const previousSeconds = currentSeconds;
        const previousMinutes = currentMinutes;

        currentSeconds = (currentSeconds - 1 + maxTime) % maxTime;

        if (currentSeconds === maxTime - 1 && previousSeconds === 0) {
            currentMinutes--;
        }

        if (currentMinutes <= 2 && currentSeconds === 0) {
            displayTimer.classList.add("low-time");
        } else {
            displayTimer.classList.remove("low-time");
        }

        if (previousSeconds <= 0 && previousMinutes <= 0) {
            clearInterval(intervalId);
            audioPlayer.play();
            alert("Countdown Finished.");
            return;
        }
        renderTimer();
        
    }, 1000);
    renderTimer();
    
}

function pauseTimer() {
    clearInterval(intervalId);
    intervalId = null;
    renderTimer();
}

function resetTimer() {
    clearInterval(intervalId);
    intervalId = null;
    currentMinutes = 0;
    currentSeconds = 0;
    renderTimer();
}

