const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (str) => {
    console.log(str.split('').reverse().join(''));
    readline.close();
});
