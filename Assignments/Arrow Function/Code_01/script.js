const findMax = () => {
    const numA = parseFloat(document.getElementById('numA').value);
    const numB = parseFloat(document.getElementById('numB').value);
    const max = Math.max(numA, numB);
    document.getElementById('maxResult').textContent = `Maximum: ${max}`;
}