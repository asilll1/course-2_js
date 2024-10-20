const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter numbers separated by space: ', (input) => {
    const numbers = [...new Set(input.split(' ').map(Number))];
    console.log(numbers);
    readline.close();
});
