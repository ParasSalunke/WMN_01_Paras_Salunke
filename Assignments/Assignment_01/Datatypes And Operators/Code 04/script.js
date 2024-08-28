function checkEvenOrOdd() {
    const number = parseFloat(document.getElementById('number').value);
    const result = number % 2 === 0 ? `${number} is even.` : `${number} is odd.`;
    document.getElementById('evenOddResult').innerText = result;
}
