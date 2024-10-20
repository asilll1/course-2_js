function getUniqueValues() {
    let inputArray = document.getElementById("uniqueArray").value.split(' ').map(Number);
    let result = inputArray.filter((item, index, arr) => arr.indexOf(item) === arr.lastIndexOf(item));
    document.getElementById("result8").innerText = `Unique values: ${result.join(', ')}`;
}
