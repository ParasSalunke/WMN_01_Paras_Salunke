function checkEligibility() {
    const age = document.getElementById("age").value;
    let message = '';

    if (age >= 18) {
        message = "You are eligible to vote.";
    } else {
        message = "You are not eligible to vote.";
    }

    document.getElementById("eligibility").innerText = message;
}