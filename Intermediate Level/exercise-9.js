const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter the main string: ', (mainString) => {
    rl.question('Enter the substring to check: ', (subString) => {
        const containsSubstring = mainString.includes(subString);

        console.log('Substring present:', containsSubstring);
        rl.close();
    });
});
