/* eslint-env mocha */
const expect = require('chai').expect;

const { decompose } = require('../../Solutions/1/003');

describe('003 Solution', function () {
  describe('decompose', function () {
    it('should take a value and return its prime factors in an array', function() {
      expect([...decompose(2)]).to.be.eql([2]);
      expect([...decompose(4)]).to.be.eql([2]);
      expect([...decompose(13195)]).to.be.eql([5, 7, 13, 29]);
    });
  });
});
