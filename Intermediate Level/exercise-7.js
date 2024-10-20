const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a nested array (e.g., [[1, 2], [3, [4]]]): ', (input) => {
    const nestedArray = JSON.parse(input);

    const flattenArray = (arr) => {
        return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattenArray(val)) : acc.concat(val), []);
    };

    console.log('Flattened Array:', flattenArray(nestedArray));
    rl.close();
});
