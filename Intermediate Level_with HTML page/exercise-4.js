function countWordOccurrences() {
    let text = document.getElementById('wordText').value;
    let words = text.split(/\s+/);
    let occurrences = {};

    words.forEach(word => {
        occurrences[word] = (occurrences[word] || 0) + 1;
    });

    document.getElementById('result4').textContent = JSON.stringify(occurrences);
}
