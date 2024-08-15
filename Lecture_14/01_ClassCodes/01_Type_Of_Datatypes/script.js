
var type_of_element = document.querySelector('.type_of_element')


let num = 10;		// INTEGER
let fnum = 3.141	//	FLOAT

let value = "Marshalling Void"
let value2 = 'Hello World'
let value3 = `Hello Marshalling Void Students`

let colors = ['Red', 'Green', 'Blue']	//	Array

//	JSON -> JavaScript Object Notation
let student = {				//	Map -> JSON Object
	name: 'Mayur',			//	Key: Value
	age: '28',
	contact: '123412341234',
}

type_of_element.textContent = typeof(student)