const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a number: ', (num) => {
    console.log(String(num));
    readline.close();
});
