const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter numbers separated by commas: ', (input) => {
    const numbers = input.split(',').map(Number);

    // Bubble Sort Algorithm
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                [numbers[j], numbers[j + 1]] = [numbers[j + 1], numbers[j]];
            }
        }
    }

    console.log('Sorted Array:', numbers);
    rl.close();
});
