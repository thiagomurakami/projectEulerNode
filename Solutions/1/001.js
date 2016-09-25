// Multiples of 3 and 5
// Problem 1
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.

// Find the sum of all the multiples of 3 or 5 below 1000.

'use strict';
var R = require('ramda');

function isMultipleOf3(number) {
	return number % 3 === 0;
}

function isMultipleOf5(number) {
	return number % 5 === 0;
}

var isMultipleOf3And5 = R.anyPass([isMultipleOf3, isMultipleOf5]);

var sumOfMultiplesOf3And5Below = (value) => {
	let sum = 0;
	for (let i = 0 ; i < value; i++) {
		if(isMultipleOf3And5(i)) {
			sum += i;
		}
	}
	return sum;
}

if (require.main === module) {
    console.log(sumOfMultiplesOf3And5Below(1000));
}

module.exports =  { isMultipleOf3, isMultipleOf5, isMultipleOf3And5, sumOfMultiplesOf3And5Below };
