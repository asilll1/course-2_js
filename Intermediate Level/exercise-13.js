const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter an object (e.g., {"name":"John", "age":30}): ', (input) => {
    const obj = JSON.parse(input);

    const deepClone = (obj) => {
        return JSON.parse(JSON.stringify(obj));
    };

    const clonedObject = deepClone(obj);
    console.log('Original Object:', obj);
    console.log('Cloned Object:', clonedObject);
    rl.close();
});
