const displayInput = document.querySelector('input#display')
const operatorRegex = /([+\-*/])/;

function appendToDisplay(character) {
    displayInput.value += character;
}

function clearDisplay() {
    displayInput.value = '';
}

function calculateResult() {
    const splittedCalcul = displayInput.value.split(operatorRegex);

    let result = 0;
    let nextOperator = null;
    let nextNumber = 0;

    mainLoop:
    for (let part of splittedCalcul) {
        if (part.match(operatorRegex)) {
            nextOperator = part;
        } else if(!result) {
            result = parseInt(part);
        } else {
            nextNumber = parseInt(part);
            console.log({result, nextOperator, nextNumber})

            switch (nextOperator) {
                case '*':
                    result *= nextNumber;
                    break;
                case '/':
                    if (nextNumber === 0){
                        result = 'Division by zero is not allowed';
                        break mainLoop;
                    }

                    result /= nextNumber;
                    break;
                case '+':
                    result += nextNumber;
                    break;
                case '-':
                    result -= nextNumber;
                    break;
                default:
                    break;
            }
        }
    }

    displayInput.value = result;
}
