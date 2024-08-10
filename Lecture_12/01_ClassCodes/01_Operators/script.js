
let var1 = 10;
let var2 = 20;

var addition_result_h2_element = document.querySelector('.addition_result');
var subtraction_result_h2_element = document.querySelector('.subtraction_result')
var multiplication_result_h2_element = document.querySelector('.multiplication_result')
var division_result_h2_element = document.querySelector('.division_result');

var equality_result_h2_element = document.querySelector('.equality_result');
var inequality_result_h2_element = document.querySelector('.inequality_result')
var less_result_h2_element = document.querySelector('.less_result')
var greater_result_h2_element = document.querySelector('.greater_result');
var less_equal_result_h2_element = document.querySelector('.less_equal_result')
var greater_equal_result_h2_element = document.querySelector('.greater_equal_result');

addition_result_h2_element.textContent = var1 + var2
subtraction_result_h2_element.textContent = var1 - var2
multiplication_result_h2_element.textContent = var1 * var2
division_result_h2_element.textContent = var1 / var2

equality_result_h2_element.textContent = var1 === var2
inequality_result_h2_element.textContent = var1 !== var2
less_result_h2_element.textContent = var1 < var2
greater_result_h2_element.textContent = var1 > var2
less_equal_result_h2_element.textContent = var1 <= var2
greater_equal_result_h2_element.textContent = var1 >= var2