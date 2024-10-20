function calculateFactorial() {
    let num = parseInt(document.getElementById('factNum').value);
    let factorial = 1;
    for (let i = 1; i <= num; i++) {
        factorial *= i;
    }
    document.getElementById('result8').textContent = factorial;
}
