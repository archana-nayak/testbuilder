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
  // var american = {name:"American Express", prefix : [34,37], length : [15]};
  // var diner = {name:"Diner's Club", prefix : [38,39], length : [14]};
  // var visa = {name:"Visa", prefix : [40], length : [13,16,19]};
  // var mastercard = {name:"MasterCard", prefix : [51,52,53,54,55], length : [16]};
  // var maestro = {name :"Maestro", prefix : [5018,5020,5038,6304], length : [12,13,14,15,16,17,18,19]};
  // var discover =  {name: "Discover", prefix :[6011,644,645,646,647,648,649,65], length :[16,19]};
  // var cards = [american,diner,visa, mastercard,maestro,discover];
   
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
        
      }
  	}
	return undefined;
	
};


