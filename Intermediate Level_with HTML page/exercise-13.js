function deepCloneObject() {
    let object = JSON.parse(document.getElementById('objectToClone').value);
    let clone = JSON.parse(JSON.stringify(object));
    document.getElementById('result13').textContent = 'Cloned Object: ' + JSON.stringify(clone);
}
