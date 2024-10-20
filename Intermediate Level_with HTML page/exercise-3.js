let myObject = {};

function addProperty() {
    let key = document.getElementById('propertyKey').value;
    let value = document.getElementById('propertyValue').value;
    myObject[key] = value;
    document.getElementById('result3').textContent = JSON.stringify(myObject);
}

function removeProperty() {
    let key = document.getElementById('removeKey').value;
    delete myObject[key];
    document.getElementById('result3').textContent = JSON.stringify(myObject);
}

function updateProperty() {
    let key = document.getElementById('updateKey').value;
    let value = document.getElementById('updateValue').value;
    myObject[key] = value;
    document.getElementById('result3').textContent = JSON.stringify(myObject);
}
