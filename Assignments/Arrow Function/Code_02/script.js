const calculateSquare = () => {
    const number = parseFloat(document.getElementById('number').value);
    const square = number ** 2;
    document.getElementById('squareResult').textContent = `Square: ${square}`;
}