function checkPalindrome() {
    let str = document.getElementById('palindromeStr').value;
    let reversed = str.split('').reverse().join('');
    document.getElementById('result6').textContent = (str === reversed) ? 'Palindrome' : 'Not a Palindrome';
}
