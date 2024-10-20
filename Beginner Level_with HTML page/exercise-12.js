function generateRandomNumber() {
    let min = parseInt(document.getElementById('minRange').value);
    let max = parseInt(document.getElementById('maxRange').value);
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('result12').textContent = 'Random Number: ' + randomNumber;
}
