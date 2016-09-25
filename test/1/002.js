/* eslint-env mocha */
const expect = require('chai').expect;

const { isEven, fib, sumFibIfEven } = require('../../Solutions/1/002');

describe('002 Solution', function () {
  describe('isEven', function () {
    it('should return true if value is even', function() {
      expect(isEven(2)).to.be.true;
      expect(isEven(0)).to.be.true;
      expect(isEven(14)).to.be.true;
    });
    it('should return false if value is odd', function() {
		  expect(isEven(5)).to.be.false;
		  expect(isEven(1)).to.be.false;
    });
  });

  describe('fibonacci calculator', function() {
    it('should take [1, 2, 3] and return next sequence [2, 3 , 5]', function() {
      var firstTwo = [1, 2, 3];
      var result = fib(...firstTwo);
      expect(result).to.eql([2, 3, 5]);
      expect(result).to.have.length(3);
      expect(result).to.be.a('array');
    })

    it('should take [13, 21, 34] and return next sequence [21, 34, 55]', function() {
      var sequence = [13, 21, 34];
      var result = fib(...sequence);
      expect(result).to.eql([21, 34, 55]);
      expect(result).to.have.length(3);
      expect(result).to.be.a('array');
    })
  });

  describe('sumFibIfEven', function() {
    // 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    it('should take 5 and return 2', function() {
      var value = 5;
      expect(sumFibIfEven(5)).to.be.equal(2);
    })

    it('should take 89 and return ' + (2 + 8 + 34), function() {
      var value = 89;
      expect(sumFibIfEven(89)).to.be.equal(2 + 8 + 34);
    })
  });
});
