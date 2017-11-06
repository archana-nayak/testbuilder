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
      if(cardNumber.match("^4") && [13,16,19].includes(cardNumber.length)){
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
      }else if(cardNumber.match("(^622[2-8][0-9][0-9])|(^6229[0-2][0-5])|(^6221[3-9][0-9])|(^62212[6789])|(^62[456])|(^628[2345678])") && [16,17,18,19].includes(cardNumber.length)){
        return "China UnionPay";
      }else if(cardNumber.match("(^490[35])|(^49[13][16])|(^564182)|(^6333)|(^633110)|(^6759)") && [16,18,19].includes(cardNumber.length)){
        return "Switch";
      }
  	}
	return undefined;
};
// //Number generation for Diner's
var dinerNumbers = [];
var dinerLength = 12;
var dinerPrefix = ['38','39'];

for(var i = 0; i < dinerPrefix.length;i++){
  var number = dinerPrefix[i];
  for(var j = 0; j < dinerLength; j++){
    number = number.concat(Math.floor(Math.random() * 10));
  }
  console.log(number);
  console.log(detectNetwork(number));
  dinerNumbers.push(number);
}

// //Number generation for Mastercard
var mcNumbers = [];
var mcLength = 14;
var mcPrefix = ['51','52','53','54','55'];

for(var i = 0; i < mcPrefix.length;i++){
  var number = mcPrefix[i];
  for(var j = 0; j < mcLength; j++){
    number = number.concat(Math.floor(Math.random() * 10));
  }
  console.log(number);
  console.log(detectNetwork(number));
  mcNumbers.push(number);
}
 
//Number generation for visa
var visaNumbers = [];
var visaLength = [12,15,18];
var visaPrefix = ['4'];

for(var i = 0; i < visaPrefix.length;i++){
  for(var k = 0; k < visaLength.length; k++){
  var number = visaPrefix[i];
  for(var j = 0; j < visaLength[k]; j++){
    number = number.concat(Math.floor(Math.random() * 10));
  }
  console.log(number);
  console.log(detectNetwork(number));
  visaNumbers.push(number);
}
}
//Number generation for american express
var americanNumbers = [];
var americanLength = 13;
var americanPrefix = ['34','37'];

for(var i = 0; i < americanPrefix.length;i++){
  var number = americanPrefix[i];
  for(var j = 0; j < americanLength; j++){
    number = number.concat(Math.floor(Math.random() * 10));
  }
  console.log(number);
  console.log(detectNetwork(number));
  americanNumbers.push(number);
}

// //var discover =  {name: "Discover", prefix :[6011,644,645,646,647,648,649,65], length :[16,19]};
// //number generation for Discover
var discoverNumbers = [];
var discoverLenArray = [12,15];
var discoverPrefixArray = ["6011","6440","6450","6460","6470","6480","6490","6589"];
for(var k = 0; k < discoverPrefixArray.length; k++){
  for(var i = 0; i < discoverLenArray.length; i++){
    var discoverNumber = discoverPrefixArray[k];
    for(var j = 0; j < discoverLenArray[i]; j++){
      discoverNumber = discoverNumber.concat(Math.floor(Math.random() * 10));
    }
    console.log("number: " + discoverNumber);
    console.log(detectNetwork(discoverNumber));
    discoverNumbers.push(discoverNumber);
  }
}




// //Number generation for Maestro
var maestroNumbers = [];

var lenArray = [8,9,10,11,12,13,14,15];
var prefixArray = ["5018","5020","5038","6304"];

for (var k = 0; k < prefixArray.length; k++) {
  for(var i = 0; i < lenArray.length;i++){
    var beginning = prefixArray[k];
    for(var j = 0; j < lenArray[i]; j++){
      beginning = beginning.concat(Math.floor(Math.random()*10));
    }
    console.log("number: " + beginning);
    console.log(detectNetwork(beginning));
    maestroNumbers.push(beginning);
  }
}

// China UnionPay always has a prefix of 622126-622925, 624-626, or 6282-6288 and a length of 16-19.

var chinaArrayRange1 = ["622126","622925"];//prefix.length = 6
var chinaArrayRange2 = ["624","626"];
var chinaArrayRange3 = ["6282,6288"];
var chinaUnionNumbers = [];
var chinaLenArray = [10,11,12,13];//[16-19](Range) - 6 
for(var prefix = Number(chinaArrayRange1[0]); prefix <= Number(chinaArrayRange1[1]); prefix++){
  console.log("prefix: " + prefix);
  for(var j = 0; j < chinaLenArray.length;j++){
    //console.log("j: " + j);
    var number = prefix.toString();
    for(var k = 0; k < chinaLenArray[j];k++){
      //console.log("chinaLenArray[j]: " + chinaLenArray[j]);
      number = number.concat(Math.floor(Math.random() * 10));
    }
    console.log("number: " + number);
    console.log(detectNetwork(number));
  }
}


