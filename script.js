/*Operation function*/
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
        if(b == 0){
            return "ERROR"
        }
        else{
            return (a/b);
        }
    }
}

/* Symbols dictionary */
let symbols = {
    add: "+",
    subtract: "-",
    divide: "/",
    multiply: "x"
}

/*Display Function*/
const displayTop = document.querySelector('.output-field-top');
const displayBottom = document.querySelector('.output-field-bottom');
const displayTextBottom = document.createElement('p');
const displayTextTop = document.createElement('p');

var historyValue = "";
var currentValue = "";
var ans = "";
var operationUsed = "";
var justCalculated = false;

function equals(operator, currentValue, historyValue){
    displayTextTop.innerHTML += currentValue;
    displayTextTop.innerHTML += " = ";
    ans = operate(operationUsed, historyValue, currentValue);
    displayTextBottom.innerHTML = ans;
    historyValue = "";
    currentValue = "";
    justCalculated = true;
    return ans;
}

function updateDisplay(value){
    if (value >= 0 || value < 10){
        if (displayTextTop.innerHTML === ""){
            displayTextBottom.innerHTML += value;
            historyValue += value;
        }
        else{
            if(justCalculated){
                displayTextTop.innerHTML = ans + " "+symbols[operationUsed] + " ";
                displayTextBottom.innerHTML = value;
                historyValue = ans;
                currentValue = value;
                justCalculated = false;
            }
            else{
                currentValue += value;
                displayTextBottom.innerHTML += value;
            }
        }
    }

    else if(value === "add"){
        if (displayTextTop.innerHTML === ""){
            displayTextTop.innerHTML += historyValue +"+";
            displayTextBottom.innerHTML = "";
            operationUsed = value;
        }
        else{
            currentValue = equals(value, currentValue, historyValue);
            operationUsed = value;
        }         
    }

    else if(value === "subtract"){
        if (displayTextTop.innerHTML === ""){
            displayTextTop.innerHTML += historyValue +"-";
            displayTextBottom.innerHTML = "";
            operationUsed = value;
        }
        else{
            currentValue = equals(value, currentValue, historyValue);
            operationUsed = value;
        } 
    }

    else if(value === "multiply"){
        if (displayTextTop.innerHTML === ""){
            displayTextTop.innerHTML += historyValue +"x";
            displayTextBottom.innerHTML = "";
            operationUsed = value;
        }
        else{
            currentValue = equals(value, currentValue, historyValue);
            operationUsed = value;
        }
    }

    else if(value === "divide"){
        if (displayTextTop.innerHTML === ""){
            displayTextTop.innerHTML += historyValue +"/";
            displayTextBottom.innerHTML = "";
            operationUsed = value;
        }
        else{
            currentValue = equals(value, currentValue, historyValue);
            operationUsed = value;
        }
    }

    else if(value === "equals"){
        currentValue = equals(value, currentValue, historyValue)
    }

    else if(value === "clear"){
        displayTextBottom.innerHTML = "";
        displayTextTop.innerHTML = "";
        historyValue = "";
        currentValue = "";
        ans = 0;
        justCalculated = false;
    }

    displayBottom.appendChild(displayTextBottom);
    displayTop.appendChild(displayTextTop);
}


/*Creating eventListeners for each button*/
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        updateDisplay(button.id);
    });
});