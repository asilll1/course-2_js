const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by commas: ', (input) => {
    const numbers = input.split(',').map(Number);

    const uniqueNumbers = numbers.filter((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item));

    console.log('Unique Values:', uniqueNumbers);
    rl.close();
});
