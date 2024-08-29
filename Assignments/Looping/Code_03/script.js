function calculateFactorial() {
    let num = document.getElementById("factorial-number").value;
    let factorial = 1;
    while (num > 1) {
        factorial *= num;
        num--;
    }
    document.getElementById("factorial-result").textContent = `Factorial: ${factorial}`;
}