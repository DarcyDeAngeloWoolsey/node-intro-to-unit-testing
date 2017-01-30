<<<<<<< HEAD
const should = require('chai').should();

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

//test the normal case

// we should probably only need to make sure that the parameter is a number and the answer is a number


 it('should be a number', function() {
    // range of normal inputs

    [2, 200, 12].forEach(function(input) {
      const answer = (function() {
      	fizzBuzzer(input[0]);

     //answer should be a typeOf

      answer.to.be.a('number');
      });
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    ['two', 'twohunderd', 'twelve'].forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });



=======
const should = require('chai').should();

const adder = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

//test the normal case

// we should probably only need to make sure that the parameter is a number and the answer is a number


 it('should be a number', function() {
    // range of normal inputs

    [2, 200, 12].forEach(function(input) {
      const answer = (function() {
      	fizzBuzzer(input[0]);

     //answer should be a typeOf

      answer.to.be.a('number');
      });
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    ['two', 'twohunderd', 'twelve'].forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });



>>>>>>> f3b09283933ef3d9bf9bb9c4a0ab1483cf10cd67
	});