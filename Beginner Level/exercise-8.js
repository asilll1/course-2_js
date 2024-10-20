const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

readline.question('Enter a number: ', (num) => {
    console.log(factorial(Number(num)));
    readline.close();
});
