'use strict';
let decompose = 600851475143;
let factor = 2;

while (decompose !== 1) {
	if (decompose % factor === 0) {
		decompose /= factor;
	} else {
		factor++;
	}
}

console.log("factor is: " + factor);
