const checkEvenOdd = () => {
    const num = parseInt(document.getElementById('num').value, 10);
    const result = (num % 2 === 0) ? 'Even' : 'Odd';
    document.getElementById('evenOddResult').textContent = `The number is ${result}.`;
}