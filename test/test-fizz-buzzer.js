'use strict';

const fizzBuzzer = require('../fizzBuzzer.js');

const expect = require('chai').expect;

describe('fizzBuzzer', function() {
  it('should return "fizz-buzz" if the parameter passed in is divisible by both 3 and 5', function(){
    expect(fizzBuzzer(15)).to.equal('fizz-buzz');
  });

  it('should return "buzz" if the parameter passed in is divisible by 5', function(){
    expect(fizzBuzzer(5)).to.equal('buzz');
  });

  it('should return "fizz" if the parameter passed in is divisible by 3', function(){
    expect(fizzBuzzer(3)).to.equal('fizz');
  });

  it('should return "buzz" if the parameter passed in is divisible by 5', function(){
    expect(fizzBuzzer(41)).to.equal('buzz');
  });

  it('should return "fizz-buzz" if the parameter passed in is divisible by 3 and 5', function(){
    expect(fizzBuzzer(32)).to.equal('fizz-buzz');
  });

  // EDGE CASE //

  it('should return true if the parameter passed in is a number', function(){
    expect(fizzBuzzer(30)).is.a('string');
  });

  it('should return true if the parameter passed in is a number', function(){
    expect(fizzBuzzer(31)).is.a('number');
  });
});