// Largest prime factor
// Problem 3
// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

function decompose (value) {
  let factors = new Set();
  let factor = 2;
  while (value !== 1) {
    if (value % factor === 0) {
      value /= factor;
      factors.add(factor);
    } else {
      factor++;
    }
  }
  return factors;
}

if (require.main === module) {
  console.log("factor is: " + [...decompose(600851475143)].pop());
}

module.exports = {decompose};
