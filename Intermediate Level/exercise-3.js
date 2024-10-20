const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const obj = {};

const manageObject = () => {
    rl.question('What action would you like to perform? (add/update/remove): ', (action) => {
        if (action === 'add' || action === 'update') {
            rl.question('Enter the property name: ', (key) => {
                rl.question('Enter the property value: ', (value) => {
                    obj[key] = value;
                    console.log('Object:', obj);
                    manageObject();
                });
            });
        } else if (action === 'remove') {
            rl.question('Enter the property name to remove: ', (key) => {
                delete obj[key];
                console.log('Object:', obj);
                manageObject();
            });
        } else {
            console.log('Invalid action.');
            rl.close();
        }
    });
};

manageObject();
