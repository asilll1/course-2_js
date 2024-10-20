function sumArrayElements() {
    let numbers = document.getElementById('sumArray').value.split(' ').map(Number);
    let sum = numbers.reduce((acc, curr) => acc + curr, 0);
    document.getElementById('result11').textContent = 'Sum: ' + sum;
}
