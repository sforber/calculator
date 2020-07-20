/*Operation functions*/
function add(a,b){
    return (a + b);
}

function subtract(a,b){
    return (a - b);
}

function multiply(a,b){
    return (a * b);
}

function divide(a,b){
    return (a / b);
}

function operate(operator, a, b){
    if (operator === "add"){
        a = parseInt(a);
        b = parseInt(b);
        return (a + b);
    }
    else if (operator === "subtract"){
        return (a - b);
    }
    else if (operator === "multiply"){
        return (a * b);
    }
    else if (operator === "divide"){
        return (a/b);
    }
    
    
}

/*Display Function*/
const displayTop = document.querySelector('.output-field-top');
const displayBottom = document.querySelector('.output-field-bottom');
const displayTextBottom = document.createElement('p');
const displayTextTop = document.createElement('p');

var firstValue = "";
var secondValue = "";
var ans = "";
var operationUsed = "";

function updateDisplay(value){
    if (value >= 0 || value < 10){
        displayTextBottom.innerHTML += value;
        if (displayTextTop.innerHTML === ""){
            firstValue += value;
            console.log("FIrst: "+firstValue)
        }
        else{
            secondValue += value;
            console.log("second: "+secondValue)
        }
    }
    else if(value === "add"){
        displayTextTop.innerHTML += firstValue +"+";
        displayTextBottom.innerHTML = "";
        operationUsed = value;       
    }
    else if(value === "subtract"){
        displayTextTop.innerHTML += firstValue+" - ";
        displayTextBottom.innerHTML = "";
        operationUsed = value;
    }
    else if(value === "multiply"){
        displayTextTop.innerHTML += firstValue+" x ";
        displayTextBottom.innerHTML = "";
        operationUsed = value;
    }
    else if(value === "divide"){
        displayTextTop.innerHTML += firstValue+" / ";
        displayTextBottom.innerHTML = "";
        operationUsed = value;
    }
    else if(value === "equals"){
        displayTextTop.innerHTML += secondValue;
        displayTextTop.innerHTML += " = ";
        ans = operate(operationUsed, firstValue, secondValue);
        displayTextBottom.innerHTML = ans;
        firstValue = "";
        secondValue = "";
        firstValue += ans;
    }
    else if(value === "clear"){
        displayTextBottom.innerHTML = "";
        displayTextTop.innerHTML = "";
        firstValue = "";
        secondValue = "";
    }
    displayBottom.appendChild(displayTextBottom);
    displayTop.appendChild(displayTextTop);
    console.log(firstValue);
}


/*Creating eventListeners for each button*/
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.id);
    });
});