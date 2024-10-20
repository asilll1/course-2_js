function checkEvenOrOdd() {
    let num = parseInt(document.getElementById('evenOddNum').value);
    document.getElementById('result3').textContent = (num % 2 === 0) ? 'Even' : 'Odd';
}
