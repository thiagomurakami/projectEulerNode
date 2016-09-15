'use strict';
let sum = 0;
let i;
for (i = 0; i < 1000; i++){
	if ( i%5 === 0 || i%3 === 0) sum += i;
}

console.log(sum);