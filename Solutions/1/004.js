// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
// from: https://github.com/mathiasbynens/esrever/blob/master/esrever.js
function reverse (string) {
  var regexSymbolWithCombiningMarks = /([\0-\u02FF\u0370-\u1AAF\u1B00-\u1DBF\u1E00-\u20CF\u2100-\uD7FF\uE000-\uFE1F\uFE30-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])([\u0300-\u036F\u1AB0-\u1AFF\u1DC0-\u1DFF\u20D0-\u20FF\uFE20-\uFE2F]+)/g;
  var regexSurrogatePair = /([\uD800-\uDBFF])([\uDC00-\uDFFF])/g;

  // Step 1: deal with combining marks and astral symbols (surrogate pairs)
  string = string
    // Swap symbols with their combining marks so the combining marks go first
    .replace(regexSymbolWithCombiningMarks, function($0, $1, $2) {
      // Reverse the combining marks so they will end up in the same order
      // later on (after another round of reversing)
      return reverse($2) + $1;
    })
    // Swap high and low surrogates so the low surrogates go first
    .replace(regexSurrogatePair, '$2$1');
  // Step 2: reverse the code units in the string
  var result = '';
  var index = string.length;
  while (index--) {
    result += string.charAt(index);
  }
  return result;
};

const isEven = number => number % 2 === 0;

function isPalindromic (value) {
  let stringifiedValue = "" + value;
  let firstPart;
  let secondPart;
  if (isEven(stringifiedValue.length)) {
    firstPart = stringifiedValue.substring(0, stringifiedValue.length/2);
    secondPart = stringifiedValue.substring(stringifiedValue.length/2, stringifiedValue.length);
  } else {
    firstPart = stringifiedValue.substring(0, stringifiedValue.length/2);
    secondPart = stringifiedValue.substring(stringifiedValue.length/2 + 1, stringifiedValue.length);
  } 
  return firstPart === reverse(secondPart);
}

function discover (value) {
  let factor;
  let result = 0;
  let current;
  for (factor = value ; factor > 1 ; factor--) {
    for (let i = factor - 1; i > 1 ; i--) {
      current = factor * i;
      if (isPalindromic(current) && current > result) {
        result = current;
      }
    }
  }
  return result;
}

if (require.main === module) {
    console.log(discover(999));
}


module.exports = {isPalindromic, reverse, discover};
