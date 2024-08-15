
var output_element = document.querySelector('.output_element')

let color = 9

if (1 === color) {
	//	True Block
	output_element.textContent = "RED";
}
else if (2 === color) {
	// True Block
	output_element.textContent = "GREEN";
}
else if (3 === color) {
	output_element.textContent = "BLUE"
}
else if (4 === color) {
	output_element.textContent = "MAGENTA"
}
else if (5 === color) {
	output_element.textContent = "CYAN"
}
else if (6 === color) {
	output_element.textContent = "YELLOW"
}
else {
	// False Block
	output_element.textContent = "UNKNOWN COLOR";
}