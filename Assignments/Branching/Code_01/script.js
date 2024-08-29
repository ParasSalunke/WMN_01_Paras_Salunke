function checkNumber() {
    const num = document.getElementById("number").value;
    let result = '';

    if (num > 0) {
        result = "The number is positive.";
    } else if (num < 0) {
        result = "The number is negative.";
    } else {
        result = "The number is zero.";
    }

    document.getElementById("result").innerText = result;
}