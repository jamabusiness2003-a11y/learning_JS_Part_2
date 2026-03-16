const loadBtn = document.getElementById("loadBtn");
const statusDisplay = document.getElementById("statusDisplay");

const url = "https://jsonplaceholder.typicode.com/users/8";

const States = Object.freeze({
    IDLE: { FETCH: "LOADING" },
    LOADING: { 
        RESOLVE: "SUCCESS",
        REJECT: "ERROR" 
    },
    SUCCESS: { FETCH: "LOADING" },
    ERROR: { FETCH: "LOADING" }
});

let currentState = "IDLE";

loadBtn.addEventListener("click", () => {
    if (currentState === "LOADING") {
        console.log("Already loading, please wait...");
        return;
    }
    fetchData(url);
});

console.log("Initial State:", currentState);

async function fetchData(url) {
    statusDisplay.classList.remove("idle", "loading", "success", 
        "error");

    transition("FETCH");
    await new Promise(resolve => setTimeout(resolve, 2000));

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request Failed");
        }

        transition("RESOLVE");
        await response.json();

    } catch (error) {
        transition("REJECT");
    }
}

function transition(action) {
    const nextState = States[currentState][action];

    if (!nextState) {
        throw new Error(`Invalid Transition: ${currentState} -> ${action}`);
    }

    currentState = nextState;
    displayUI(currentState);
    console.log("Current State:", currentState);
}

function displayUI(currentState) {
    switch (currentState) {
        case "IDLE":
            statusDisplay.textContent = "Click on load to fetch data.";
            statusDisplay.classList.add("idle");
            break;
        case "LOADING":
            statusDisplay.textContent = "Loading...";
            statusDisplay.classList.add("loading");
            break;
        case "SUCCESS":
            statusDisplay.textContent = "Data loaded successfully.";
            statusDisplay.classList.add("success");
            break;
        case "ERROR":
            statusDisplay.textContent = "Couldn't fetch data.";
            statusDisplay.classList.add("error");
            break;
        default:
            break;
    }
}

displayUI(currentState);