// Smallest multiple
// Problem 5
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var R = require('ramda');

function isPrime (value) {
  let currentValue = parseInt(Math.sqrt(value));
  while (currentValue < value && currentValue !== 0 && currentValue !== 1) {
    if (value % currentValue === 0) return false;
    else {
      currentValue++;
    }
  }
  return true;
}

function primesUntilValue (number) {
  let primes = [];
  let maxValue = number;
  for (let i = 2 ; i <= maxValue ; i++) {
    if (isPrime(i)) {
      while(number % i === 0) {
        number /= i;
        primes.push(i);
      }
    }
  }
  return primes;
}

function solutionToProblem () {
  let primesOccurrenceCount = {};
  for ( let value = 2 ; value <= 20 ; value++) {
    let primes = primesUntilValue(value);
    let currentPrimesOccurrence = R.reduce((acc, currentValue, currentIndex, array) => {
      if (acc[currentValue]) acc[currentValue]++;
      else acc[currentValue] = 1;
      return acc;
    }, {}, primes);
    R.forEach((key) => {
      if (!primesOccurrenceCount[key]) {
        primesOccurrenceCount[key] = currentPrimesOccurrence[key];
      } else if (currentPrimesOccurrence[key] > primesOccurrenceCount[key]){
        primesOccurrenceCount[key] = currentPrimesOccurrence[key];
      }
    }, R.keys(currentPrimesOccurrence));
  }
  return R.reduce((acc, value) => {
    let base = parseInt(value);
    let exponent = primesOccurrenceCount[value];
    return acc * Math.pow(base, exponent);
  }, 1, R.keys(primesOccurrenceCount));
}

if (require.main === module) {
  // solutionToProblem();
  console.log(solutionToProblem())
}


module.exports = { isPrime, solutionToProblem };
