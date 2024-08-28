function swapVariables() {
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);

    // Swapping logic
    a = a + b;
    b = a - b;
    a = a - b;

    document.getElementById('swapResult').innerText = `After swap: a = ${a}, b = ${b}`;
}
