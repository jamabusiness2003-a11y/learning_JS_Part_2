const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const statusDisplay = document.getElementById("statusDisplay");

const shortcuts = {
    "Ctrl+c": () => displayStatus("Start"), 
    "Ctrl+v": () => displayStatus("Stop"), 
    "Ctrl+b": () => displayStatus("Idle")
};

startBtn.addEventListener("click", shortcuts["Ctrl+c"]);
stopBtn.addEventListener("click", shortcuts["Ctrl+v"]);
resetBtn.addEventListener("click", shortcuts["Ctrl+b"]);


document.addEventListener("keydown", (e) => {
    const combo = normalizeKey(e);
    
    if (shortcuts[combo]){
        e.preventDefault();
        shortcuts[combo]();
    }
});

function displayStatus(status) {
    statusDisplay.classList.remove("idle", "start", "stop");

    statusDisplay.textContent = `Status: ${status}`;
    statusDisplay.classList.add(status.toLowerCase());
}

function normalizeKey(e) {
    let keys = [];

    if (e.ctrlKey) keys.push("Ctrl");

    let key = e.key.toLowerCase();
    
    if (!["control"].includes(key)) {
        keys.push(e.key.toLowerCase());
    }
    
    return keys.join("+");
}