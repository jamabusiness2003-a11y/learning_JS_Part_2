const form = document.getElementById("multiStepForm");
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const username = document.getElementById("username");
const password = document.getElementById("password");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

const steps = form.querySelectorAll(".step");
const indicators = form.querySelectorAll(".indicator");

const formDataStore = {};

let state = { 
    currentStepIndex: 0,
    previousStepIndex: null
};

nextBtn.addEventListener("click", nextStep);
backBtn.addEventListener("click", prevStep);

function render() {
    const {currentStepIndex, previousStepIndex} = state;

    if (previousStepIndex !== null) {
        steps[previousStepIndex].classList.remove("active");
        steps[currentStepIndex].classList.add("active");
    } else {
        steps[currentStepIndex].classList.add("active");
    }
    
    indicators.forEach(indicator => indicator.classList.remove("active"));
    indicators[currentStepIndex].classList.add("active");

    backBtn.classList.toggle("hidden", currentStepIndex === 0);
    nextBtn.classList.toggle("hidden", currentStepIndex === steps.length - 1);
    submitBtn.classList.toggle("hidden", currentStepIndex !== steps.length - 1);
}  

function nextStep() {

    if (!validateStep()) return;

    state.previousStepIndex = state.currentStepIndex;
    state.currentStepIndex++;

    saveStep();
    render();
}

function prevStep() {

    state.previousStepIndex = state.currentStepIndex;
    state.currentStepIndex--;

    saveStep();
    render();
}

function saveStep() {
    const inputs = steps[state.currentStepIndex].querySelectorAll("input");
    inputs.forEach(input => {
        formDataStore[input.name] = input.value;
    });
}

function validateStep() {
    const inputs = steps[state.currentStepIndex].querySelectorAll("input");
    
    for (let input of inputs) {
        if (input.value === "") {
            input.classList.add("error");
            return false;
        }
        input.classList.remove("error");
    }

    return true;
}

render();