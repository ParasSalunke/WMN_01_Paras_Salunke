
function printMultiplicationTable() {
    const num = document.getElementById("table-number").value;
    let output = "";
    for (let i = 1; i <= 10; i++) {
        output += `${num} x ${i} = ${num * i} \n`;
    }
    document.getElementById("multiplication-table").textContent = output;
}