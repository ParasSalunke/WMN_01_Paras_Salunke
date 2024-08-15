
var output_element = document.querySelector('.output_element')

/**
 * 
 * 	Looping Statement 
 * 
 * 	while	->	Keyword
 * 
 * 	SYNTAX
 * 	
 * 	...
 * 	...
 * 	...
 * 
 * 	INITIALIZATION
 * 	
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 	...
 * 
 * 	while(CONDITION)
 * 	{
 * 		LOOP BODY	
 * 
 * 		INCREMENT / DECREMENT	
 * 	}
 * 
 */

let le = 1;	//	Loop Enumerator	<-	INITIALIZATION

while (le <= 99) {
	output_element.textContent = output_element.textContent + " " + le;

	//	INCREMENT
	le++;
}

/**
 * 
 * 		DRY RUN
 * 	le		le <= 10	le++
 * 	1		1 <= 10*	2
 * 	2		2 <= 10*	3
 * 	3		3 <= 10*	4
 * 	4 		4 <= 10*	5
 * 	5		5 <= 10*	6
 * 	6		6 <= 10*	7
 * 	7		7 <= 10*	8
 * 	8		8 <= 10*	9
 * 	9		9 <= 10*	10
 * 10		10 <= 10*	11
 * 11		11 <= 10X
 */
