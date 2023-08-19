// script.js
const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");
const clearBtn = document.getElementById("clearBtn");

buttons.forEach(button => {
    button.addEventListener("click", () => handleButtonClick(button.textContent));
});

clearBtn.addEventListener("click", clearDisplay);

let currentInput = "";
let previousInput = "";
let operation = null;

function handleButtonClick(value) {
    if (isNaN(value)) {
        if (value === "=") {
            if (currentInput !== "" && previousInput !== "") {
                calculate();
            }
        } else if (value === "C") {
            clearDisplay();
        } else {
            if (currentInput !== "") {
                if (previousInput !== "") {
                    calculate();
                }
                operation = value;
                previousInput = currentInput;
                currentInput = "";
            }
        }
    } else {
        currentInput += value;
    }
    updateDisplay();
}

function calculate() {
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    switch (operation) {
        case "+":
            currentInput = (num1 + num2).toString();
            break;
        case "-":
            currentInput = (num1 - num2).toString();
            break;
        case "*":
            currentInput = (num1 * num2).toString();
            break;
        case "/":
            currentInput = (num1 / num2).toString();
            break;
    }

    operation = null;
    previousInput = "";
}

function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operation = null;
    updateDisplay();
}

function updateDisplay() {
    display.value = currentInput || "0";
}
