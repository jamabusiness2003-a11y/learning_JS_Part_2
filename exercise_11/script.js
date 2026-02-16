const screenInput = document.getElementById("screen");
const numbersBtn = document.querySelectorAll(".number");
const operatorsBtn = document.querySelectorAll(".operator");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");
const backspaceBtn = document.getElementById("backspace");

numbersBtn.forEach(numberBtn => {
    let numberValue;

    numberBtn.addEventListener("click", () => {
        numberValue = numberBtn.value;
 
        if (screenInput.value === "0") {
            screenInput.value = screenInput.value.replace("0", numberValue);
        } else {
            screenInput.value += numberValue;
        }
    });

    document.addEventListener("keydown", (e) => {
        numberValue = numberBtn.value;

        if (e.key === numberValue) {
            numberBtn.click();
        }
    });
});

operatorsBtn.forEach(operatorBtn => {
    let operatorValue;

    operatorBtn.addEventListener("click", () => {
        operatorValue = operatorBtn.value;
        const lastChar = screenInput.value.slice(-1);
        
        if(/[+\-*/]/.test(lastChar)){
            screenInput.value = screenInput.value.slice(0, -1) + operatorValue;
        } else {
            screenInput.value += operatorValue; 
        }              
    });

    document.addEventListener("keydown", (e) => {
        operatorValue = operatorBtn.value;

        if (e.key === operatorValue) {
            operatorBtn.click();
        }
    });

});

equalBtn.addEventListener("click", () => {
    const numbers = [];
    let start = 0;
    let result = 0;

    for (let i = 0; i < screenInput.value.length; i++) {
        if (/[+\-*/]/.test(screenInput.value[i])) {
            numbers.push(Number(screenInput.value.slice(start, i)));
            start = i + 1;
        }
    }

    numbers.push(Number(screenInput.value.slice(start)));

    if (screenInput.value.includes("+")) {
        result = numbers.reduce((sum, number) => sum + number)
    } else if (screenInput.value.includes("-")) {
        result = numbers.reduce((difference, number) => difference - number);
    } else if (screenInput.value.includes("*")) {
        result = numbers.reduce((product, number) => product * number);
    } else if (screenInput.value.includes("/")) {
        if (numbers.includes(0)) {
            result = "Undefined";
        } else {
            result = numbers.reduce((quotien, number) => quotien / number);
        }     
    }
    screenInput.value = result;
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        equalBtn.click();
    }
});

backspaceBtn.addEventListener("click", () => {
    screenInput.value = screenInput.value.slice(0, -1);

    if (screenInput.value === "") screenInput.value = 0; 
});

clearBtn.addEventListener("click", () => {
    screenInput.value = 0;
});