const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter temperature in Celsius: ', (celsius) => {
    const fahrenheit = (Number(celsius) * 9/5) + 32;
    console.log(fahrenheit);
    readline.close();
});
