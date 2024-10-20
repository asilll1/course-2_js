const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter first number: ', (num1) => {
    readline.question('Enter second number: ', (num2) => {
        console.log(Number(num1) + Number(num2));
        readline.close();
    });
});
