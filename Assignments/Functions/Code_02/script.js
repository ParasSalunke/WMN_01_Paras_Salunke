function checkPrime() {
    const num = parseInt(document.getElementById('primeNumber').value, 10);
    let isPrime = true;
    if (num <= 1) isPrime = false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    document.getElementById('primeResult').textContent = isPrime ? 'The number is prime.' : 'The number is not prime.';
}