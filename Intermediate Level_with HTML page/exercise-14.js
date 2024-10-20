let count = 0;

function throttledFunction() {
    if (count < 5) {
        count++;
        document.getElementById('result14').textContent = 'Function executed ' + count + ' times';
    } else {
        document.getElementById('result14').textContent = 'Function throttled';
    }
}

setInterval(throttledFunction, 1000);
