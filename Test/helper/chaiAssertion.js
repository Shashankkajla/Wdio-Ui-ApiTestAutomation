import * as chai from 'chai';

// Disable or remove type="module" from package.json on running from cucumber its only to learn chai assertions & 
// change file name from ts to js.
// "type": "module",


// 1. Function 
(function m1() {

  let foo = 'bar';
  let bevrage = {
    tea: ['gold', 'gray', 'white'],
    product: ['paste', 'coldrink'],
  };

  // 1.
  chai.expect(bevrage).to.have.property('product').with.lengthOf(2); // Below error occur when length is 1 but here it is 2 
  
   //AssertionError: expected [ 'paste', 'coldrink' ] to have a length of 1 but got 2
  //chai.expect(bevrage, "Hello").to.have.property('product').with.lengthOf(1);  -> print this if exception value failed 
 // AssertionError: Hello: expected [ 'paste', 'coldrink' ] to have a length of 1 but got 2

/* 
  > console.log(typeof chai.expect); // expect is a function 
  > console.log(chai.expect.toString()); //  function

 function expect(val, message) {
  return new Assertion(val, message);
}

**/

//2. 
chai.expect(foo).to.equal('bar')
// AssertionError: expected 'bar' to equal 'bar '

//3.
chai.expect(foo).to.be.a('string')
// AssertionError: expected 'bar' to be a stringi

//4. 
chai.expect(foo).have.lengthOf(3);

//5.
chai.expect(bevrage).to.have.property('tea').deep.equals([ 'gold', 'gray', 'white' ]);

//var chai = require('chai')
// , expect = chai.expect
//  , should = chai.should();


let str = "20"

//6. 
chai.expect(20).to.equal(parseInt(20));

//7. 
//chai.expect(valueInt).to.be.greaterThan(1);
//chai.expect(inValidArray.length).to.equal(0);

// should() and expect work in same way in chai

})();


/** 
> The expect interface provides a function as a starting point for chaining your language assertions. 
It works on node.js and in all browsers.

> The should interface extends Object.prototype to provide a single getter as the starting point for your language 
assertions. It works on node.js and in all modern browsers except Internet Explorer.


db.get(1234, function (err, doc) {
  -> we expect error to not exist
  -> we expect doc to exist and be an object
});

Given that err should be null or undefined, err.should.not.exist is not a valid statement as undefined and null haven’t been extended with a should chain starter. As such, the appropriate few assertions for this scenario are as follows:

var should = require('chai').should();
db.get(1234, function (err, doc) {
  should.not.exist(err);
  should.exist(doc);
  doc.should.be.an('object');
});

-> Provided you assigned should to a var, you have access to several quick helpers to keep you out of trouble when using should.

should.exist
should.not.exist
should.equal
should.not.equal
should.Throw
should.not.Throw

*/


