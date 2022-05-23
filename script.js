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
    num1 = Number(num1);
    num2 = Number(num2);
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

let sign = prompt("Operator: ");
let num1 = prompt("Num 1: ");
let num2 = prompt("Num 2: ");
console.log(operator(sign,num1,num2));
// console.log(divide(Number(num1),Number(num2)));