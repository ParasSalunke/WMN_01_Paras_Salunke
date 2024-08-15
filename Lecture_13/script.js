var elmButton = document.querySelector('.click_handler')
var elmHeading1 = document.querySelector('.click_heading')

var over_out_element = document.querySelector('.over_out_handler');
var enter_leave_element = document.querySelector('.enter_leave_handler');

var key_up_down_element = document.querySelector('.key_up_down_handler');
var key_up_down_heading = document.querySelector('.key_up_down_text')

elmButton.addEventListener('click', function () {
	elmHeading1.textContent = 'THE BUTTON IS CLICKED'
})

elmButton.addEventListener('dblclick', function () {
	elmHeading1.textContent = 'THE BUTTON IS DOUBLE CLICKED'
})

over_out_element.addEventListener('mouseover', function () {
	over_out_element.style.backgroundColor = '#ff4747'
})

over_out_element.addEventListener('mouseout', function () {
	over_out_element.style.backgroundColor = '#ffa500'
})

enter_leave_element.addEventListener('mouseenter', function () {
	enter_leave_element.style.border = '5px solid #ff0000'
})

enter_leave_element.addEventListener('mouseleave', function () {
	enter_leave_element.style.border = '0px solid #ff0000'
})

key_up_down_element.addEventListener('mousedown', (event) => {

	if (0 === event.button) {//	Left Button Pressed
		key_up_down_heading.textContent = "Left Mouse Key Pressed";
	}
	else if( 1 === event.button ) { // Middle Button Pressed
		key_up_down_heading.textContent = "Middle Mouse Key Pressed";
	}
	else if( 2 === event.button ) { // Right Key Pressed
		key_up_down_heading.textContent = 'Right Mouse Key Pressed';
	}
})