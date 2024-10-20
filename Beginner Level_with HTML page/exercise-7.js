function countVowels() {
    let str = document.getElementById('vowelStr').value;
    let vowels = str.match(/[aeiouAEIOU]/g);
    document.getElementById('result7').textContent = vowels ? vowels.length : 0;
}
