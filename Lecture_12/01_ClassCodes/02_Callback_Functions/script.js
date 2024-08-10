var elmButton = document.querySelector('button')
var elmHeading1 = document.querySelector('h1')

//	THIS IS REGISTERATION OF EVENT - EVENT LISTNER
//ELEMENT					EVENT	EVENTHANDLER | EVENTLISTNER
elmButton.addEventListener('click', function () {
	elmHeading1.textContent = 'THE BUTTON IS CLICKED'
})

elmButton.addEventListener('dblclick', function () {
	elmHeading1.textContent = 'THE BUTTON IS DOUBLE CLICKED'
})