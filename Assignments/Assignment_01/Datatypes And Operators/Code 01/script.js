function performOperations() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const addition = num1 + num2;
    const subtraction = num1 - num2;
    const multiplication = num1 * num2;
    const division = num1 / num2;

    const results = `
        <p>Addition: ${addition}</p>
        <p>Subtraction: ${subtraction}</p>
        <p>Multiplication: ${multiplication}</p>
        <p>Division: ${division}</p>
    `;

    document.getElementById('results').innerHTML = results;
}
