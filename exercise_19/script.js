const form = document.getElementById("multiStepForm");
const nextBtn = document.getElementById("nextBtn");
const backBtn = document.getElementById("backBtn");
const submitBtn = document.getElementById("submitBtn");

const steps = [...form.querySelectorAll(".step")];
const indicators = [...form.querySelectorAll(".indicator")];

let formDataStore = {};

let state = { 
    currentStepIndex: 0,
    previousStepIndex: null
};


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

    saveStep();

    state.previousStepIndex = state.currentStepIndex;
    state.currentStepIndex++;

    render();
}

function prevStep() {

    state.previousStepIndex = state.currentStepIndex;
    state.currentStepIndex--;

    
    render();
}

function saveStep() {
    const inputs = steps[state.currentStepIndex].querySelectorAll("input");
    inputs.forEach(input => {
        formDataStore[input.name] = input.value;
    });
}

function validateStep() {
    const requiredInputs = steps[state.currentStepIndex].querySelectorAll("[required]");
    return [...requiredInputs].every(input => input.value.trim() !== "");
}

form.addEventListener("click", (e) => {
    const inputs = steps[state.currentStepIndex].querySelectorAll("[required]");
    if (nextBtn && e.target.classList.contains("next-btn")) {
        
        inputs.forEach(input => input.classList.remove("error"));
        if (!validateStep()) {
            inputs.forEach(input => {
                if (!input.value.trim()) input.classList.add("error");
            });
            return;
        }

        nextStep();
    }

    if (backBtn && e.target.classList.contains("back-btn")) {
        prevStep();
    }
});


form.addEventListener("submit", (e) => {
    e.preventDefault();
    saveStep();
    alert("Form Submitted Successfully !!!")
    console.log("Submitted Date: ", formDataStore);

    form.reset();
    formDataStore = {};
    state = {
        currentStepIndex: 0,
        previousStepIndex: null
    };
    
    steps.forEach(step => step.classList.remove("active"));
    indicators.forEach(indicator => indicator.classList.remove("active"));
    render();
});

render();