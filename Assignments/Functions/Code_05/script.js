function calculateFibonacci() {
    const num = parseInt(document.getElementById('fibonacciNumber').value, 10);

    function fibonacci(n) {
        if (n <= 1) return n;
        return fibonacci(n - 1) + fibonacci(n - 2);
    }

    let result = '';
    for (let i = 0; i <= num; i++) {
        result += `${fibonacci(i)} `;
    }
    document.getElementById('fibonacciResult').textContent = `Fibonacci sequence: ${result}`;
}