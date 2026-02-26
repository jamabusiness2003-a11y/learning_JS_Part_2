const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const toggleBtn = document.getElementById("toggleBtn");
const textDisplayBtn = document.getElementById("textDisplayBtn");

const textCount = document.getElementById("textCount");
const toggleText = document.getElementById("toggleText");
const textDisplay = document.getElementById("textDisplay");

const events = {};

let state = {
    count: 0,
    isOn: false,
    text: ""
};

increaseBtn.addEventListener("click", () => {
    setState(lastState => ({
        ...lastState,
        count: state.count + 1
    }));
});

decreaseBtn.addEventListener("click", () => {
    setState(lastState => ({
        ...lastState,
        count: state.count - 1
    }));
});

toggleBtn.addEventListener("click", () => {
    setState(lastState => ({
        ...lastState,
        isOn: !state.isOn
    }));
});

textDisplayBtn.addEventListener("click", () => {
    setState(lastState => ({
        ...lastState,
        text: state.text + "Hello World !!!"
    }));
});

subscribe("changeState", render);

function setState(updater) {
    state = updater(state);
    notify("changeState", state);
}

function render(currentState) {
    textCount.textContent = currentState.count;
    toggleText.textContent = currentState.isOn ? "ON" : "OFF";
    textDisplay.textContent = currentState.text;
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