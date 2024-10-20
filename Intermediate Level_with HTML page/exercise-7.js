function flattenArray() {
    let nestedArray = JSON.parse(document.getElementById('nestedArray').value);
    let flatArray = nestedArray.flat(Infinity);
    document.getElementById('result7').textContent = 'Flattened Array: ' + flatArray.join(', ');
}
