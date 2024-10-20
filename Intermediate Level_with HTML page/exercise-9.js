function checkSubstring() {
    let str = document.getElementById('mainStr').value;
    let substr = document.getElementById('subStr').value;
    document.getElementById('result9').textContent = str.includes(substr) ? 'Substring Found' : 'Substring Not Found';
}
