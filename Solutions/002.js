'use strict';

let oldTerm = 1;
let currentTerm = 2;
let nextTerm = 0;
let sum = 0;

function solve() {
	while (nextTerm < 4000000) {
		if ( currentTerm % 2 === 0 ) sum += currentTerm; 
		nextTerm = oldTerm + currentTerm;
		oldTerm = currentTerm;
		currentTerm = nextTerm;
	}
	console.log(sum);
}

solve();
