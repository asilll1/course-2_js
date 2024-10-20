const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter first string: ', (str1) => {
    rl.question('Enter second string: ', (str2) => {
        const sortedStr1 = str1.split('').sort().join('');
        const sortedStr2 = str2.split('').sort().join('');

        console.log('Are they anagrams?', sortedStr1 === sortedStr2);
        rl.close();
    });
});
