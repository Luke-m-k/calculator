// General Variables
let display = document.querySelector('.display');
let digits = document.querySelectorAll('.number');
let operators = document.querySelectorAll('.operator');
let equal = document.querySelector('.equal');
let clear = document.querySelector('.clear');

// Operations Variables
let firstNumber = 0;
let secondNumber = 0;
let operator = "+";

// Basic Math Functions.
function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

// Operator function.
function operate(firstNumber, operator, secondNumber){
    if (operator === "+"){
        return add(firstNumber, secondNumber);
    }
    if (operator === "-"){
        return subtract(firstNumber, secondNumber);
    }
    if (operator === "/"){
        return divide(firstNumber, secondNumber);
    }
    if (operator === "x"){
        return multiply(firstNumber, secondNumber);
    }
}

// Digit Display function.
digits.forEach(function (digit) {
    digit.addEventListener('click', () => {
        display.innerText = display.innerText + digit.innerText;
    })
})

// Operator display function.
operators.forEach((op) => {
    op.addEventListener('click', () => {
        firstNumber = Number(display.innerText);
        operator = op.innerText;
        display.innerText = "";
    })
})

// Equal Function.
equal.addEventListener('click', () => {
    secondNumber = Number(display.innerText);
    display.innerText = operate(firstNumber, operator, secondNumber);
})

// Clear Function
clear.addEventListener('click', () => {
    firstNumber = Number(0);
    secondNumber = Number(0);
    display.innerText = "";
})
