function removeDuplicates() {
    let numbers = document.getElementById('duplicateArray').value.split(' ').map(Number);
    let uniqueNumbers = [...new Set(numbers)];
    document.getElementById('result14').textContent = 'Unique numbers: ' + uniqueNumbers.join(' ');
}
