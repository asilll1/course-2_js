function findPrimeNumbers() {
    let limit = parseInt(document.getElementById('primeLimit').value);
    let primes = [];

    for (let num = 2; num <= limit; num++) {
        let isPrime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) primes.push(num);
    }
    document.getElementById('result5').textContent = 'Prime Numbers: ' + primes.join(', ');
}
