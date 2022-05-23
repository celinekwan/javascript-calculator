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
let valueDisplaying = '';

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
}

document.addEventListener('click', function(event) {
    if (event.target.matches('#all-clear')) {
        clearDisplay();
        resetVars();
        result = 0;
    }

    if (event.target.matches('#add')) {
        valueDisplaying = '';
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "+";
        }
        // 2 args, 1 operator (e.g. (0+)1+1 = 2)
        else if (num1 === 0) {
            if ((display.innerText).localeCompare("u need coffee") ===0) {
                num1 = 0;
            } else {
                num1 = getDispNum();
            }
            sign = "+";
        }
        // 3 args, 2 operators (e.g. 1+1+1 = 3 )
        else if (num1 !== 0) {
            num2 = getDispNum();
            if (num2 === 0 && sign.localeCompare("/")===0) {
                display.innerText = 'u need coffee';
                console.log("invalid operation: divide by 0");
                resetVars();
            } else {
                num1 = operator(sign,num1,num2);
            }
        }
        sign = "+";
    }

    if (event.target.matches('#subtract')) {
        valueDisplaying = '';
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "-";
        }
        // 2 args, 1 operator
        else if (num1 === 0) {
            if ((display.innerText).localeCompare("u need coffee") ===0) {
                num1 = 0;
            } else {
                num1 = getDispNum();
            }
            sign = "-";
        }
        // 3 args, 2 operators
        else if (num1 !== 0) {
            num2 = getDispNum();
            if (num2 === 0 && sign.localeCompare("/")===0) {
                display.innerText = 'u need coffee';
                console.log("invalid operation: divide by 0");
                resetVars();
            } else {
                num1 = operator(sign,num1,num2);
            }
        }
        sign = "-";
    }

    if (event.target.matches('#multiply')) {
        valueDisplaying = '';
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "*";
        }
        // 2 args, 1 operator 
        else if (num1 === 0) {
            num1 = getDispNum();
            sign = "*";
        }
        // 3 args, 2 operators 
        else if (num1 !== 0) {
            num2 = getDispNum();
            if (num2 === 0 && sign.localeCompare("/")===0) {
                display.innerText = 'u need coffee';
                console.log("invalid operation: divide by 0");
                resetVars();
            } else {
                num1 = operator(sign,num1,num2);
            }
        }
        sign = "*";
    }

    if (event.target.matches('#divide')) {
        valueDisplaying = '';
        if  (display.innerText === '') {
            num1 = result;
            result = 0;
            sign = "/";
        }
        // 2 args, 1 operator 
        else if (num1 === 0) {
            num1 = getDispNum();
            sign = "/";
        }
        // 3 args, 2 operators 
        else if (num1 !== 0) {
            num2 = getDispNum();
            if (num2 === 0 && sign.localeCompare("/")===0) {
                display.innerText = 'u need coffee';
                console.log("invalid operation: divide by 0");
                resetVars();
            } else {
                num1 = operator(sign,num1,num2);
            }
        }
        sign = "/";
    }

    if (event.target.matches("#equals")) {
        valueDisplaying = '';
        // 2 args, 1 operator 
        num2 = getDispNum();
        clearDisplay();
        // 3 args, 2 operators
        if (num2 === 0 && sign.localeCompare("/")===0) {
            display.innerText = 'u need coffee';
            console.log("invalid operation: divide by 0");
        } else {
            result = operator(sign,num1,num2);
            display.innerText = result.toString(); 
            console.log(result);
        }
        // resetVars (result kept)    
        resetVars();
    }

    if (event.target.matches('#b0')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '0';
        valueDisplaying += '0';
    }
    if (event.target.matches('#b1')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '1';
        valueDisplaying += '1';
    }
    if (event.target.matches('#b2')) {
       if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
        display.innerText = '';
    }
    display.innerText += '2';
    valueDisplaying += '2';
    }
    if (event.target.matches('#b3')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '3';
        valueDisplaying += '3';
    }
    if (event.target.matches('#b4')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '4';
        valueDisplaying += '4';
    }
    if (event.target.matches('#b5')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '5';
        valueDisplaying += '5';
    }
    if (event.target.matches('#b6')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '6';
        valueDisplaying += '6';
    }
    if (event.target.matches('#b7')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '7';
        valueDisplaying += '7';
    }
    if (event.target.matches('#b8')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '8';
        valueDisplaying += '8';
    }
    if (event.target.matches('#b9')) {
        if (display.innerText === "u need coffee" || valueDisplaying.localeCompare("")===0) {
            display.innerText = '';
        }
        display.innerText += '9';
        valueDisplaying += '9';
    }

}, false); 
