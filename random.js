Math.floor(Math.random() * (max - min + 1)) + min

//The parseInt() function parses a string and returns an integer. Here's an example:

var a = parseInt("007");
console.log(a);

//If the first character in the string can't be converted into a number, then it returns NaN.
var z = parseInt("a007");
console.log(z);

//condition ? statement-if-true : statement-if-false;

return num > 0? "Number is positive" : num < 0? "Number is negative " : "Number is zero";