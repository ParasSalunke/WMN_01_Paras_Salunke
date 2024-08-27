//	SINGLE LINE COMMENT

/*
	MULTI LINE COMMENT
*/

/**
 * 	DOCUMENTATION COMMENT
 */

var output_element = document.querySelector('.output_element')

/**
 * 	FUNCTION SYNTAX:
 * 
 * 	function FUNCTION_IDENTIFIER () 
 * 
 * 	{
 * 		FUNCTION BODY
 * 	}
 * 
 * 
 * 	function FUNCTION_IDENTIFIER () //	FUNCTION DECLARATOR
 * 
 * 
 */


//	FUNCTION DEFINITION
function helloFunction() {
	//	Function Body
	output_element.textContent = "Hello, Marshalling Void!\n"
}

function greetings() {
	// Function Body
	helloFunction();	//	FUNCTION CALL

	output_element.textContent = output_element.textContent + "This is a Function Demo"
}

greetings();

/**
 * 
 * 		CALLER					CALLEE
 *		greetings()		->		helloFunction() 
 * 
 * 		
 * 		EMPLOYER		->		EMPLOYEE
 * 
 */