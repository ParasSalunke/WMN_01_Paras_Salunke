function checkCharacter() {
    const char = document.getElementById("char").value.toLowerCase();
    let result = '';

    switch(char) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
            result = "It's a vowel.";
            break;
        default:
            result = "It's a consonant.";
    }

    document.getElementById("charResult").innerText = result;
}