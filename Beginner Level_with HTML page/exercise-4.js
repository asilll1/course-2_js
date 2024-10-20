function convertCelsiusToFahrenheit() {
    let celsius = parseFloat(document.getElementById('celsius').value);
    let fahrenheit = (celsius * 9/5) + 32;
    document.getElementById('result4').textContent = fahrenheit + ' °F';
}
