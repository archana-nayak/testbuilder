/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num / 2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    // throw new Error('Delete me!');
 
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
  //chai.FILL_ME_IN;
 

  it('has a prefix of 4 and a length of 13', function() {
    // assert(detectNetwork('4123456789012') === 'Visa');
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var should= chai.should;
 
  it('has a prefix of 51 and a length of 16', function() {
    //expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    // expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal('MasterCard');
  });
 
 
  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal('MasterCard');
  });
 
});

//"^6(011|44|45|46|47|48|49|5)")) && [16,19]
describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function() {
    detectNetwork('6011057508903633').should.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() { 
   detectNetwork('6011142827556863327').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 16', function() {
    detectNetwork('6448059022698655').should.equal('Discover');
  });

  it('has a prefix of 644 and a length of 19', function() { 
   detectNetwork('6442798307115560625').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 16', function() {
    detectNetwork('6459831443729024').should.equal('Discover');
  });

  it('has a prefix of 645 and a length of 19', function() { 
   detectNetwork('6459858533114388864').should.equal('Discover');
  });

    it('has a prefix of 646 and a length of 16', function() {
    detectNetwork('6469831443729024').should.equal('Discover');
  });

  it('has a prefix of 646 and a length of 19', function() { 
   detectNetwork('6469858533114388864').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 16', function() {
    detectNetwork('6479831443729024').should.equal('Discover');
  });

  it('has a prefix of 647 and a length of 19', function() { 
   detectNetwork('6479858533114388864').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 16', function() {
    detectNetwork('6489831443729024').should.equal('Discover');
  });

  it('has a prefix of 648 and a length of 19', function() { 
   detectNetwork('6489858533114388864').should.equal('Discover');
  });
    it('has a prefix of 649 and a length of 16', function() {
    detectNetwork('6499831443729024').should.equal('Discover');
  });

  it('has a prefix of 649 and a length of 19', function() { 
   detectNetwork('6499858533114388864').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    detectNetwork('6551151678788549').should.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() { 
   detectNetwork('6551151678788549123').should.equal('Discover');
  });


  // it('has a prefix of 6011 and a length of 16');
  // it('has a prefix of 6011 and a length of 19');
});

//(^50(18|20|38))|(^6304)") && [12,13,14,15,16,17,18,19]
describe('Maestro', function() {
  // Write full test coverage for the Maestro card

  var should = chai.should();

//5018 series
  it('has a prefix of 5018 and a length of 12', function() {
    detectNetwork('501805750890').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 13', function() { 
   detectNetwork('5018057508901').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 14', function() { 
   detectNetwork('50180575089012').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 15', function() { 
   detectNetwork('501805750890123').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 16', function() { 
   detectNetwork('5018057508901234').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 17', function() { 
   detectNetwork('50180575089012345').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 18', function() { 
   detectNetwork('501805750890123456').should.equal('Maestro');
  });

  it('has a prefix of 5018 and a length of 19', function() { 
   detectNetwork('5018057508901234567').should.equal('Maestro');
  });

//5020 series
  it('has a prefix of 5020 and a length of 12', function() {
    detectNetwork('502005750890').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 13', function() { 
   detectNetwork('5020057508901').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 14', function() { 
   detectNetwork('50200575089012').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 15', function() { 
   detectNetwork('502005750890123').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 16', function() { 
   detectNetwork('5020057508901234').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 17', function() { 
   detectNetwork('50200575089012345').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 18', function() { 
   detectNetwork('502005750890123456').should.equal('Maestro');
  });

  it('has a prefix of 5020 and a length of 19', function() { 
   detectNetwork('5020057508901234567').should.equal('Maestro');
  });

//5038
  it('has a prefix of 5038 and a length of 12', function() {
    detectNetwork('503805750890').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 13', function() { 
   detectNetwork('5038057508901').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 14', function() { 
   detectNetwork('50380575089012').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 15', function() { 
   detectNetwork('503805750890123').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 16', function() { 
   detectNetwork('5038057508901234').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 17', function() { 
   detectNetwork('50380575089012345').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 18', function() { 
   detectNetwork('503805750890123456').should.equal('Maestro');
  });

  it('has a prefix of 5038 and a length of 19', function() { 
   detectNetwork('5038057508901234567').should.equal('Maestro');
  });

//6304 series
  it('has a prefix of 6304 and a length of 12', function() {
    detectNetwork('630455220088').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 13', function() { 
   detectNetwork('6304746689160').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 14', function() { 
   detectNetwork('63040316070785').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 15', function() { 
   detectNetwork('630411500602176').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 16', function() { 
   detectNetwork('6304627016195250').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 17', function() { 
   detectNetwork('63040507860218839').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 18', function() { 
   detectNetwork('630414098487695909').should.equal('Maestro');
  });

  it('has a prefix of 6304 and a length of 19', function() { 
   detectNetwork('6304731977434769533').should.equal('Maestro');
  });

});


describe('China UnionPay', function() {

  var should = chai.should();

  // China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

var chinaArrayRange1 = ["622126","622925"];//prefix.length = 6
var chinaLenArray = [16,17,18,19]; 
unionPayNumberGenerator(chinaArrayRange1,chinaLenArray);
var chinaArrayRange2 = ["624","626"];
unionPayNumberGenerator(chinaArrayRange2,chinaLenArray);
var chinaArrayRange3 = ["6282","6288"];
unionPayNumberGenerator(chinaArrayRange3,chinaLenArray);

function unionPayNumberGenerator(chinaArrayRange, chinaLenArray){
for(var prefix = Number(chinaArrayRange[0]); prefix <= Number(chinaArrayRange[1]); prefix++){
  for(var j = 0; j < chinaLenArray.length;j++){
    var number = prefix.toString();
    for(var k = 0; k < chinaLenArray[j] - prefix.toString().length;k++){
      number = number.concat(Math.floor(Math.random() * 10));
    }
    // chinaUnionNumbers.push(number);
    //we call the it() and pass the number, along with the expectation
    (function(prefix, number){
      it('has a prefix of ' + prefix +' and a length of ' + chinaLenArray[j] , function() {
        detectNetwork(number).should.equal('China UnionPay');
      });
    })(prefix,number);
    
  }
}
}
});

//Switch: 4903 series for length 16,18,19
describe('Switch', function() {

  var should = chai.should();

var sLength = [16,18,19];
var sPrefix = ['4903','4905','4911','4936','6333','6759'];
callGenericGeneratorForMultipleLengths(sPrefix,sLength);
sPrefix = ['564182', '633110'];
callGenericGeneratorForMultipleLengths(sPrefix,sLength);

function callGenericGeneratorForMultipleLengths(prefixArray,lengthArray){
  for(var i = 0; i < prefixArray.length;i++){
    for(var k = 0; k < lengthArray.length; k++){
     var number = prefixArray[i];
     for(var j = 0; j < lengthArray[k] - prefixArray[i].length; j++){
      number = number.concat(Math.floor(Math.random() * 10));
     }
    
      (function(i, number){
      it('has a prefix of ' + prefixArray[i] +' and a length of ' + lengthArray[k] , function() {
        detectNetwork(number).should.equal('Switch');
      });
    })(i,number);

    }
  }
}

});

//describe('should support China UnionPay')
//describe('should support Switch')
