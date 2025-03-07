// Créez votre fonction ici

function calculate(operand1, operand2, operator) {
    const parsedOperand1 = typeof operand1 === 'string' ? parseInt(operand1) : operand1,
        parsedOperand2 = typeof operand2 === 'string' ? parseInt(operand2) : operand2;

    switch (operator) {
        case '+':
            return parsedOperand1 + parsedOperand2;
        case '-':
            return parsedOperand1 - parsedOperand2;
        case '*':
            return parsedOperand1 * parsedOperand2;
        case '/':
            return parsedOperand2 === 0 ?
                'Division by zero is not allowed'
                : parsedOperand1 / parsedOperand2;
        default:
            return 'Invalid operator';
    }
}

export default calculate
