const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (str) => {
    const vowels = str.match(/[aeiouAEIOU]/g);
    console.log(vowels ? vowels.length : 0);
    readline.close();
});
