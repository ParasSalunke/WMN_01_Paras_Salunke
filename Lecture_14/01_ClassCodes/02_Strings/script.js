
var type_of_element = document.querySelector('.type_of_element')

let value1 = "Marshalling Void"
let value2 = 'Hello World'
let value3 = `Hello Marshalling Void Students`

/**
 * 	"", '' =>	Normal
 * 
 * 	`` => Format String
 */

let no_of_students = 100;

// type_of_element.textContent = "There are " + no_of_students + " students in WMN"
type_of_element.textContent = `There are ${no_of_students} studets in WMN`

/**
 * To Use Variable in a string
 * 
 * 	Step 1:	enclose that variable in curly braces {}
 * 	Step 2:	Prefix the {} with $
 * 
 */