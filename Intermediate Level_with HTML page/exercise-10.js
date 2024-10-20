function generateFibonacci() {
    let n = parseInt(document.getElementById('fibonacciLimit').value);
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    document.getElementById('result10').textContent = 'Fibonacci Sequence: ' + fib.slice(0, n).join(', ');
}
