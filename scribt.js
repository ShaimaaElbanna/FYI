console.log ("Halo, dunia!");
console.log ("Ciao, mondo!");
console.log ("Hola, mundo!");

//2
//console.log('pk awesome');
console.log("'I'm awesome'");

//3
var x ;
  console.log('the value of my variable x will be: justanexample');
  x = 10;
  console.log (x);

var y;
 console.log("The value of my y will be empty space ");
 console.log (y)
 y = "just a string"
 console.log("The value of my y will be the string  just a string");
 console.log (y)

 var z = 7.25;
 console.log (z);
 var a = Math.round(z);
 console.log(a);
 console.log("z=" + z + " a="+ a);
 
 var array =[];
 console.log ("The value of array will be what inside the[] ")
 console.log(array)
 array = ["cat", "lion", "dog"];
 console.log(array)
array.push("baby pig");
console.log(array)

let myString = "this is a test";
console.log(myString);
console.log(myString.length);

//Write a program that checks the types of two variables and
 //prints out SAME TYPE if they are the same type.

 var s =5; //number
 var h = "myName"; //string
 var a = ["black", "blue", "red"]; //arrya
 var person = {firstName:"shaimaa", age:"22"}; //Objects

 console.log('The value of my variable s is: ' + s);
 console.log('The value of my variable h is: ' + h);
 console.log('The value of my variable a is: ' + a);
 console.log('The value of my variable persono is: ' + person);

 console.log('The Tybe of my variable s is: number');
 console.log('The Tybe of my variable h is: string');
 console.log('The Tybe of my variable a is: arrya');
 console.log('The Tybe of my variable person is: Objects');

 console.log(typeof s);
 console.log(typeof a);
 console.log(typeof h);
 console.log(typeof person);

 function sametype(a,s){
    if (typeof (a) === typeof (s)){
       console.log("Same Type");}
    else {
        console.log("diffrent Type");   
    }
}
 sametype (a, s);

//9
var x = 7; 
x = 7%3;
console.log(x);

var x = 10; 
x = 10%3;
console.log(x);

var x = 20; 
x = 20%5;
console.log(x);

//10
var x = 10;
array = ["red",2, x];
console.log(array);

console.log(6/0 === 10/0);
