const add = (num1, num2) => {
    return num1 + num2;
}
const subtract = (num1, num2) => {
    return num1 - num2; 
}
const multiply = (num1, num2) => {
    return num1 * num2; 
}
const divide = (num1, num2) => {
    return num1 / num2; 
}

const operator = (symbol,num1,num2) => {
    // num1 = Number(num1);
    // num2 = Number(num2);
    switch(symbol) {
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}

const display = document.querySelector('.display'); 
let num1 = 0;
let sign = '';
let num2 = 0;
let result = 0;

const clearDisplay = () => {
    display.innerText = '';
}
const getDispNum = () => {
    return Number(display.innerText);
}
const resetVars = () => {
    num1 = 0;
    sign = '';
    num2 = 0;
    result = 0;
}

document.addEventListener('click', function(event) {
    if (event.target.matches('#all-clear')) {
        clearDisplay();
        resetVars();
    }

    if (event.target.matches('#add')) {
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "+";
            clearDisplay();
        }
        // 2 args, 1 operator (e.g. (0+)1+1 = 2)
        else if (num1 === 0) {
            num1 = getDispNum();
            sign = "+";
            clearDisplay();
        }
        // ------------------
        // 3 args, 2 operators (e.g. 1+1+1 = 3 )
        else if (num1 !== 0) {
            num2 = getDispNum();
            num1 = operator(sign,num1,num2);
            clearDisplay();
        }
        // ------------------
        sign = "+";
    }

    if (event.target.matches('#subtract')) {
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "-";
            clearDisplay();
        }
        // 2 args, 1 operator (e.g. (0+)1+1 = 2)
        else if (num1 === 0) {
            num1 = getDispNum();
            sign = "-";
            clearDisplay();
        }
        // ------------------
        // 3 args, 2 operators (e.g. 1+1+1 = 3 )
        else if (num1 !== 0) {
            num2 = getDispNum();
            num1 = operator(sign,num1,num2);
            clearDisplay();
        }
        // ------------------
        sign = "-";
    }

    if (event.target.matches('#multiply')) {
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "*";
            clearDisplay();
        }
        // 2 args, 1 operator (e.g. (0*)1*1 = 2)
        else if (num1 === 0) {
            num1 = getDispNum();
            sign = "*";
            clearDisplay();
        }
        // ------------------
        // 3 args, 2 operators (e.g. 1+1+1 = 3 )
        else if (num1 !== 0) {
            num2 = getDispNum();
            num1 = operator(sign,num1,num2);
            clearDisplay();
        }
        // ------------------
        sign = "*";
    }

    if (event.target.matches('#divide')) {
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "/";
            clearDisplay();
        }
        // 2 args, 1 operator (e.g. (0*)1*1 = 2)
        else if (num1 === 0) {
            num1 = getDispNum();
            sign = "/";
            clearDisplay();
        }
        // ------------------
        // 3 args, 2 operators (e.g. 1+1+1 = 3 )
        else if (num1 !== 0) {
            num2 = getDispNum();
            num1 = operator(sign,num1,num2);
            clearDisplay();
        }
        // ------------------
        sign = "/";
    }

    if (event.target.matches("#equals")) {
        // 2 args, 1 operator (e.g. 1+1 = 2)
        num2 = getDispNum();
        clearDisplay();
        // ------------------
        // 3 args, 2 operators (e.g. 1+1+1 = 3 )
            // num2 = getDispNum();
            // clearDisplay();
        // ------------------
        result = operator(sign,num1,num2);

        console.log(result);
        
        // resetVars, but keep result    
        num1 = 0;
        sign = '';
        num2 = 0;

    }


    if (event.target.matches('#b1')) {
        display.innerText += '1';
    }
    if (event.target.matches('#b2')) {
        display.innerText += '2';
    }
    if (event.target.matches('#b3')) {
        display.innerText += '3';
    }
    if (event.target.matches('#b4')) {
        display.innerText += '4';
    }
    if (event.target.matches('#b5')) {
        display.innerText += '5';
    }
    if (event.target.matches('#b6')) {
        display.innerText += '6';
    }
    if (event.target.matches('#b7')) {
        display.innerText += '7';
    }
    if (event.target.matches('#b8')) {
        display.innerText += '8';
    }
    if (event.target.matches('#b9')) {
        display.innerText += '9';
    }
}, false); 
