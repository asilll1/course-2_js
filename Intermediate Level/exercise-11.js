const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a sentence: ', (sentence) => {
    const capitalized = sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

    console.log('Capitalized Sentence:', capitalized);
    rl.close();
});
