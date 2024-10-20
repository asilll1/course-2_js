function sortArray() {
    let numbers = document.getElementById('sortNumbers').value.split(' ').map(Number);
    numbers.sort((a, b) => a - b);
    document.getElementById('result1').textContent = 'Sorted Array: ' + numbers.join(', ');
}
