function reverseString() {
    let str = document.getElementById('str').value;
    let reversed = str.split('').reverse().join('');
    document.getElementById('result2').textContent = reversed;
}
