const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
};

rl.question('Enter a limit: ', (limit) => {
    const primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    console.log('Prime Numbers:', primes);
    rl.close();
});
