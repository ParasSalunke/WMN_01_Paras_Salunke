function calculateCircleArea() {
    const radius = parseFloat(document.getElementById('radius').value);
    const area = Math.PI * radius * radius;
    document.getElementById('circleResult').innerText = `The area of the circle with radius ${radius} is ${area}`;
}
