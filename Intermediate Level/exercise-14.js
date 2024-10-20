const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const throttle = (func, limit) => {
    let lastFunc;
    let lastRan;

    return function() {
        const context = this;
        const args = arguments;

        if (!lastRan) {
            func.apply(context, args);
            lastRan = Date.now();
        } else {
            clearTimeout(lastFunc);
            lastFunc = setTimeout(function() {
                if ((Date.now() - lastRan) >= limit) {
                    func.apply(context, args);
                    lastRan = Date.now();
                }
            }, limit - (Date.now() - lastRan));
        }
    };
};

const logMessage = throttle(() => {
    console.log('Throttled function executed');
}, 2000);

console.log('Press Ctrl+C to stop');
setInterval(logMessage, 500); // Attempt to call the function every 500ms
