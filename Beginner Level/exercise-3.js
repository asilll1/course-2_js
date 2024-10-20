const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (num) => {
    console.log(Number(num) % 2 === 0 ? 'Even' : 'Odd');
    readline.close();
});
