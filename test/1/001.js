'use strict';
var expect =  require('chai').expect;
const { isMultipleOf3, isMultipleOf5, isMultipleOf3And5, sumOfMultiplesOf3And5Below } = require('../../Solutions/1/001');

describe('001 Solution', function() {
  describe('isMultipleOf3', function() {
    it('should return true if value is a multiple of 3', function() {
		expect(isMultipleOf3(3)).to.be.true;
		expect(isMultipleOf3(6)).to.be.true;
		expect(isMultipleOf3(15)).to.be.true;
    });
    it('should return false if value is not a multiple of 3', function() {
		expect(isMultipleOf3(5)).to.be.false;
		expect(isMultipleOf3(3+10)).to.be.false;
    });
  });

  describe('isMultipleOf5', function() {
  	it('should return true if value is a multiple of 5', function(){
  		expect(isMultipleOf5(5)).to.be.true;
  		expect(isMultipleOf5(15)).to.be.true;
  		expect(isMultipleOf5(0)).to.be.true;
  	});
  	it('should return false if value is not a multiple of 5', function(){
  		expect(isMultipleOf5(2)).to.be.false;
  		expect(isMultipleOf5(23103)).to.be.false;
  	});
  })

  describe('isMultipleOf3And5', function (){
  	it('should return true if value is a multiple of 3 and 5', function(){
  		expect(isMultipleOf3And5(3)).to.be.true;
  		expect(isMultipleOf3And5(5)).to.be.true;
  		expect(isMultipleOf3And5(15)).to.be.true;
  		expect(isMultipleOf3And5(30)).to.be.true;
  	})

  	it('should return false if value is a multiple of 3 and 5', function(){
  		expect(isMultipleOf3And5(29)).to.be.false;
  		expect(isMultipleOf3And5(3*5+1)).to.be.false;
  	})
  })

  describe('sumOfMultiplesOf3And5Below', function(){
  	it('should return 23 for number below 10', function(){
  		expect(sumOfMultiplesOf3And5Below(10), 'sum').to.equal(23);
  	})
  })
});
