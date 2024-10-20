const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter numbers separated by space: ', (input) => {
    const numbers = input.split(' ').map(Number);
    const sum = numbers.reduce((acc, curr) => acc + curr, 0);
    console.log(sum);
    readline.close();
});
