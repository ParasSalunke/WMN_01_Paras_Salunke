const calculateFactorial = () => {
    const factorial = (n) => (n <= 1 ? 1 : n * factorial(n - 1));
    const num = parseInt(document.getElementById('factNumber').value, 10);
    const result = factorial(num);
    document.getElementById('factorialResult').textContent = `Factorial: ${result}`;
}