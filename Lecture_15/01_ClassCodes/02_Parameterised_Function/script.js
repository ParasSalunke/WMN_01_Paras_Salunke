
var output_element = document.querySelector('.output_element')

/**
 * 	function FUNCTION_IDENTIFIER(PARAMETER / ARGUMENTS) {
 * 	}
 * 
 * 	undefined	->	VALUE
 * 
 */

/**
 * 	NaN	->	Not a Number
 */

function addition(num1, num2) {

	return (num1 + num2);
}

function subtraction(num1, num2) {
	return (num1 - num2);
}

function multiplication(num1, num2) {
	return (num1 * num2);
}

function division(num1, num2) {
	return (num1 / num2);
}

function remainder(num1, num2) {
	return (num1 % num2);
}

function exponent(num1, num2) {
	return (num1 ** num2);
}

function operations(operation, num1, num2) {

	let value = 0;

	switch (operation) {

		case 1:
			value = addition(num1, num2);
			break;

		case 2:
			value = subtraction(num1, num2);
			break;

		case 3:
			value = multiplication(num1, num2);
			break;

		case 4:
			value = division(num1, num2);
			break;

		case 5:
			value = remainder(num1, num2);
			break;

		case 6:
			value = exponent(num1, num2);
			break;
	}

	output_element.textContent = "Operation Result: " + value;
}

operations(1, 1000000, 23)