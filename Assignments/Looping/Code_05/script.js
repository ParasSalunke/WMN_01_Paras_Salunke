function reverseString() {
    const str = document.getElementById("string-to-reverse").value;
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    document.getElementById("reversed-string").textContent = `Reversed String: ${reversed}`;
}