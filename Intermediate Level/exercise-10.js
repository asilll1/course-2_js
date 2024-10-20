const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the number of Fibonacci numbers to generate: ', (n) => {
    const fib = (n) => {
        const sequence = [0, 1];
        for (let i = 2; i < n; i++) {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
        return sequence.slice(0, n);
    };

    console.log('Fibonacci Sequence:', fib(Number(n)));
    rl.close();
});
