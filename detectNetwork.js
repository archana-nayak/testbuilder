// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  
  // Once you've read this, go ahead and try to implement this function, then return to the console.
  //   STEP FOUR:
// Excellent work! Write your own tests and make them pass for the last two networks:

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.

// Heads up! Switch and Visa seem to have some overlapping card numbers - 
// in any apparent conflict, you should choose the network with the longer prefix.
   
   if(cardNumber.length){
      if(cardNumber.match("(^490[35])|(^4911)|(^4936)|(^564182)|(^6333)|(^633110)|(^6759)") && [16,18,19].includes(cardNumber.length)){
        return "Switch";
      }else if(cardNumber.match("^4") && [13,16,19].includes(cardNumber.length)){
        return "Visa";
      }else if(cardNumber.match("^3[47]") && [15].includes(cardNumber.length)){
        return "American Express";
      }else if(cardNumber.match("^5[12345]") && [16].includes(cardNumber.length)){
        return "MasterCard";  
      }else if(cardNumber.match("^3[89]") && [14].includes(cardNumber.length)){
        return "Diner's Club";
      }else if(cardNumber.match("(^50(18|20|38))|(^6304)") && [12,13,14,15,16,17,18,19].includes(cardNumber.length)){
        return "Maestro";
      }else if((cardNumber.match("^6(011|44|45|46|47|48|49|5)")) && [16,19].includes(cardNumber.length)) {
        return "Discover";
      }else if(cardNumber.match("(^622[2-8][0-9][0-9])|(^6229[0-1][0-9])|(^62292[0-5])|(^6221[3-9][0-9])|(^62212[6789])|(^62[456])|(^628[2345678])") && [16,17,18,19].includes(cardNumber.length)){
        return "China UnionPay";
      } 
  	}
	return undefined;
};


// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.
var chinaUnionNumbers = [];
var chinaArrayRange1 = ["622126","622925"];//prefix.length = 6
var chinaLenArray = [16,17,18,19]; 
unionPayNumberGenerator(chinaArrayRange1,chinaLenArray,chinaUnionNumbers);
var chinaArrayRange2 = ["624","626"];
unionPayNumberGenerator(chinaArrayRange2,chinaLenArray,chinaUnionNumbers);
var chinaArrayRange3 = ["6282","6288"];
unionPayNumberGenerator(chinaArrayRange3,chinaLenArray,chinaUnionNumbers);

function unionPayNumberGenerator(chinaArrayRange, chinaLenArray,chinaUnionNumbers){
for(var prefix = Number(chinaArrayRange[0]); prefix <= Number(chinaArrayRange[1]); prefix++){
  for(var j = 0; j < chinaLenArray.length;j++){
    var number = prefix.toString();
    for(var k = 0; k < chinaLenArray[j] - prefix.toString().length;k++){
      number = number.concat(Math.floor(Math.random() * 10));
    }
    chinaUnionNumbers.push(number);
    var resultString = detectNetwork(number);
    console.log(resultString + " " + number);
  }
}
}

// //Number generation for Diner's
var dinerNumbers = [];
var dinerLength = [14];
var dinerPrefix = ['38','39'];
callGenericGeneratorForMultipleLengths(dinerPrefix,dinerLength,dinerNumbers);

//Number generation for Mastercard
var mcNumbers = [];
var mcLength = [16];
var mcPrefix = ['51','52','53','54','55'];
callGenericGeneratorForMultipleLengths(mcPrefix,mcLength,mcNumbers);
 
  //Number generation for visa
var visaNumbers = [];
var visaLength = [13,16,19];
var visaPrefix = ['4'];
callGenericGeneratorForMultipleLengths(visaPrefix,visaLength,visaNumbers);

function callGenericGeneratorForMultipleLengths(prefixArray,lengthArray,numbers){
  for(var i = 0; i < prefixArray.length;i++){
    for(var k = 0; k < lengthArray.length; k++){
     var number = prefixArray[i];
     for(var j = 0; j < lengthArray[k] - prefixArray[i].length; j++){
      number = number.concat(Math.floor(Math.random() * 10));
     }
     var resultString = detectNetwork(number);
     console.log(resultString +" " + number);
     numbers.push(number);
    }
  }
}
//Number generation for american express
var americanNumbers = [];
var americanLength = [15];
var americanPrefix = ['34','37'];
callGenericGeneratorForMultipleLengths(americanPrefix,americanLength,americanNumbers);

// Switch always has a prefix of 4903, 4905, 4911, 4936, 564182, 633110, 6333, or 6759 and a length of 16, 18, or 19.
//Number generation for Switch
var sNumbers = [];
var sLength = [16,18,19];
var sPrefix = ['4903','4905','4911','4936','6333','6759'];
callGenericGeneratorForMultipleLengths(sPrefix,sLength,sNumbers);
sPrefix = ['564182', '633110'];
callGenericGeneratorForMultipleLengths(sPrefix,sLength,sNumbers);


// // //var discover =  {name: "Discover", prefix :[6011,644,645,646,647,648,649,65], length :[16,19]};
// //number generation for Discover
var discoverNumbers = [];
var discoverLenArray = [16,19];
var discoverPrefixArray = ["6011","644","645","646","647","648","649","65"];//padded each string with numbers to make length of all strings 4 to match the length of 6011
callGenericGeneratorForMultipleLengths(discoverPrefixArray,discoverLenArray,discoverNumbers);

// //Number generation for Maestro
var maestroNumbers = [];
var lenArray = [12,13,14,15,16,17,18,19];
var prefixArray = ["5018","5020","5038","6304"];
callGenericGeneratorForMultipleLengths(prefixArray,lenArray,maestroNumbers);