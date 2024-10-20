function checkAnagram() {
    let str1 = document.getElementById('anagramStr1').value.split('').sort().join('');
    let str2 = document.getElementById('anagramStr2').value.split('').sort().join('');
    document.getElementById('result6').textContent = (str1 === str2) ? 'Anagram' : 'Not an Anagram';
}
