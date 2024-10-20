function capitalizeWords() {
    let sentence = document.getElementById('sentenceInput').value;
    let capitalized = sentence.replace(/\b\w/g, char => char.toUpperCase());
    document.getElementById('result11').textContent = 'Capitalized Sentence: ' + capitalized;
}
