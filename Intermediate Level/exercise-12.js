const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first array (comma-separated): ', (firstInput) => {
    rl.question('Enter second array (comma-separated): ', (secondInput) => {
        const firstArray = firstInput.split(',').map(Number);
        const secondArray = secondInput.split(',').map(Number);

        const intersection = firstArray.filter(value => secondArray.includes(value));

        console.log('Intersection:', intersection);
        rl.close();
    });
});
