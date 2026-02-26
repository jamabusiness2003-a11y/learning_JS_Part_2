const actionBtn = document.getElementById("actionBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");
const outputDisplay = document.getElementById("outputDisplay");

const events = {};
const MAX_HISTORY = 10;

let past = [];
let future = [];
let state = { count: 0 };


actionBtn.addEventListener("click", () => {
    setState(lastState => ({
        ...lastState,
        count: state.count + 1
    }));
});

undoBtn.addEventListener("click", undo);
redoBtn.addEventListener("click", redo);

function setState(updater) {
    past.push({ ...state });

    if (past.length > MAX_HISTORY) {
        past.shift();
    }

    state = updater(state);
    future = [];
    notify("stateChange", state);
}

function render(currentState) {
    outputDisplay.textContent = `Amount of clicks : ${currentState.count || 0}`;
}

function undo() {
    if (past.length === 0) return;  

    redoBtn.disabled = false;
    future.push({ ...state });
    state = past.pop();
    notify("stateChange", state);
}

function redo() {
    if (future.length === 0) return;

    undoBtn.disabled = false;
    past.push({ ...state });
    state = future.pop();
    notify("stateChange", state);
}

function updateButtons() {
    undoBtn.disabled = past.length === 0;
    redoBtn.disabled = future.length === 0;
}

function subscribe(eventName, callback) {
    if (!events[eventName]) {
        events[eventName] = [];
    }
    events[eventName].push(callback);
}

function notify(eventName, data) {
    if (!events[eventName]) return;
    events[eventName].forEach(callback => {
        callback(data);
    });
}

subscribe("stateChange", render);
subscribe("stateChange", updateButtons);

render(state);