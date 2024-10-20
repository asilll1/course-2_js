function findLargestNumber() {
    let numbers = document.getElementById('numArray').value.split(' ').map(Number);
    let largest = Math.max(...numbers);
    document.getElementById('result5').textContent = 'Largest number is ' + largest;
}
