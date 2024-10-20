const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter min and max values separated by space: ', (input) => {
    const [min, max] = input.split(' ').map(Number);
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(randomNum);
    readline.close();
});
