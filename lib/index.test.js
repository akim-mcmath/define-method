'use strict';

var chai = require('chai');
var defineMethod = require('.');

before(function() {
  chai.should();
});

describe('defineMethod(constructor, prop, method)', function() {
  var Person, greet;

  beforeEach(function() {
    Person = function() {};
    greet = function() { return 'hello'; };
  });

  it('is the main module', function() {
    defineMethod.should.equal(require('..'));
  });

  it('adds @method to @constructor', function() {
    defineMethod(Person, 'greet', greet);
    Person.prototype.should.have.property('greet').that.equals(greet);
  });

  specify('method has the correct property descriptor', function() {
    defineMethod(Person, 'greet', greet);
    var desc = Object.getOwnPropertyDescriptor(Person.prototype, 'greet');
    desc.configurable.should.be.true;
    desc.enumerable.should.be.false;
    desc.writable.should.be.true;
  });

  specify('method can be used on new objects', function() {
    defineMethod(Person, 'greet', greet);
    new Person().greet().should.equal('hello');
  });

});
