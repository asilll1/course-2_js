function validateEmail() {
    let email = document.getElementById('emailInput').value;
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    document.getElementById('result2').textContent = regex.test(email) ? 'Valid Email' : 'Invalid Email';
}
