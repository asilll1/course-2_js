function simpleCalculator() {
    let num1 = parseFloat(document.getElementById('calcNum1').value);
    let num2 = parseFloat(document.getElementById('calcNum2').value);
    let operation = document.getElementById('operation').value;
    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
    }

    document.getElementById('result10').textContent = 'Result: ' + result;
}
