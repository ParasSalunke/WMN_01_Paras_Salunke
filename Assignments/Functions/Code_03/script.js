function countVowels() {
    const str = document.getElementById('vowelString').value.toLowerCase();
    const vowels = 'aeiou';
    let count = 0;
    for (const char of str) {
        if (vowels.includes(char)) count++;
    }
    document.getElementById('vowelResult').textContent = `Number of vowels: ${count}`;
}