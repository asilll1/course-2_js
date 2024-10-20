const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first number: ', (num1) => {
    readline.question('Enter operator (+, -, *, /): ', (op) => {
        readline.question('Enter second number: ', (num2) => {
            let result;
            switch(op) {
                case '+': result = Number(num1) + Number(num2); break;
                case '-': result = Number(num1) - Number(num2); break;
                case '*': result = Number(num1) * Number(num2); break;
                case '/': result = Number(num1) / Number(num2); break;
                default: result = 'Invalid operator';
            }
            console.log(result);
            readline.close();
        });
    });
});
