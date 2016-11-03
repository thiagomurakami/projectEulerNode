'use strict';
var expect =  require('chai').expect;
const { isPrime, solutionToProblem } = require('../../Solutions/1/005');

describe('005 Solution', function() {
  describe('isPrime', function () {
    it('should take 2 and return true', function() {
      expect(isPrime(2)).to.be.true;
    });

    it('should take 3 and return true', function() {
      expect(isPrime(3)).to.be.true;
    });

    it('should take 10 and return false', function() {
      expect(isPrime(10)).to.be.false;
    });

    it('should take 7 and return true', function() {
      expect(isPrime(7)).to.be.true;
    });

    it('should take 14 and return false', function() {
      expect(isPrime(14)).to.be.false;
    });

  });

  describe(solutions, function () {
    it('should be 232792560', function () {
      expect(solutionToProblem()).to.be.equal(232792560);
    })
  })
});
