const reverseString = () => {
    const str = document.getElementById('stringInput').value;
    const reversed = str.split('').reverse().join('');
    document.getElementById('reverseResult').textContent = `Reversed String: ${reversed}`;
}