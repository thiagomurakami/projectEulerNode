/* eslint-env mocha */
// Largest palindrome product
// Problem 4
// A palindromic number reads the same both ways. The largest palindrome made
// from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const expect = require('chai').expect;

const { isPalindromic, reverse, discover } = require('../../Solutions/1/004');

describe('004 Solution', function () {
  describe('isPalindromic', function () {
    it('should take 9009 and return true', function() {
      expect(isPalindromic(9009)).to.be.true;
    });

    it('should take 9019 and return false', function() {
      expect(isPalindromic(9019)).to.be.false;
    });

    it('should take 90109 and return true', function() {
      expect(isPalindromic(90109)).to.be.true;
    });

    it('should take 111 and return true', function() {
      expect(isPalindromic(111)).to.be.true;
    });

    it('should take 112 and return false', function() {
      expect(isPalindromic(112)).to.be.false;
    });

  });

  describe('reverse', function() {
    it('should take abc123 and return 321cba', function() {
      expect(reverse('abc123')).to.be.a('string');
      expect(reverse('abc123')).to.be.equal('321cba');
    })
    it('should take 90 and return 09', function() {
      expect(reverse('90')).to.be.a('string');
      expect(reverse('90')).to.be.equal('09');
    })
  });

  describe('discover', function () {
    it('should take value and return biggest palindromic number generated ' +
      'by multiplying value with a value lower than itself', function () {
        expect(discover(99)).to.be.equal(9009);
      });
  });

  describe('solution', function() {
    it('should be 906609', function (){
      expect(discover(999)).to.be.equal(906609);
    })
  })
});
