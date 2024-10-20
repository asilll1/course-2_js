const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Enter a string: ', (str) => {
    const isPalindrome = str === str.split('').reverse().join('');
    console.log(isPalindrome ? 'Palindrome' : 'Not Palindrome');
    readline.close();
});
