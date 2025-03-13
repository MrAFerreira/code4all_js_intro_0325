// Variables
// hold information

// DRY - Don't repeat yourself

// Best practices
// clear and short names
// camelCase

//var - don't use it!

// let - reserved keyword
// declaration - we declare that the variable now exists
let age;

// Assignment - give a value to the variable
age = 31;

// re-assignment
age = 77;
age = "Seventy seven";

// Declaration e assignment
let myName = "André";

//console.log(age);

// const - reserved keyword
// constant

// declaration + assignment
const ourPlanet = "Earth";

//Error: assignment to constant
// ourPlanet = "Jupiter";

//console.log("We live in :" + ourPlanet);

//undefined
let favouriteAnimal;
let myAge = null;

//console.log(favouriteAnimal);

//null - no content
let tournamentWinner = null;
let subscribePremium = null;

// boolean

let isTired = false;
let isAwake = true;

// strings with content always represent a TRUE value
// only an empty string "" represents false
let nonBoolean = "false";

if (nonBoolean) {
  // This will only print if nonBoolean represents a false value
  //console.log("This is true");
}

// comparison operators

let age1 = 40;
let age2 = 50;

let isOlder = age1 > age2;

/* console.log(age1 > age2);
console.log(isOlder);

console.log(age1 < age2);
console.log(age1 <= age2);
console.log(age1 >= age2);
 */
let myFavColor = "red";
let yourFavColor = "red";

// comparison with == & ===
//console.log(myFavColor == yourFavColor);

// coercion
//console.log(25 == "25");

// doesn't coerce the values
// checks the data type
// strict comparison operator
//console.log(25 === "25");

//  + - * /
// % - Modulus operator / Remainder
//console.log(6 % 2);
let isEvenOrOdd = 671361523612387612;
//console.log(isEvenOrOdd % 2);

let completeThis = "Hello";
console.log("1", completeThis);
// re-assignment
completeThis = completeThis + " I am";
console.log("2", completeThis);
completeThis = completeThis + " André";
console.log("3", completeThis);

/* 
version assignment operators 

let completeThis = "Hello";
console.log("1", completeThis);
// re-assignment
completeThis += " I am";
console.log("2", completeThis);
completeThis += " André";
console.log("3", completeThis); */

let pikachuAttack = 35;
//console.log(pikachuAttack);

pikachuAttack = pikachuAttack * 2;
//console.log(pikachuAttack);

// assignment operators
// +=, -= , *= , /= , %=
let bulbasaurAttack = 50;
console.log("1", bulbasaurAttack);

bulbasaurAttack *= 2;
console.log("2", bulbasaurAttack);

bulbasaurAttack -= 20;
console.log("3", bulbasaurAttack);

// string manipulation

let message = "Hello my name is ";
let bestManager = "Diogo";

//concatenation
let completeMessage = message + bestManager;
console.log(completeMessage);
console.log("Hello" + "my" + "etc...");

const myCat = "Azeitona";
const catAge = 3;
const fur = "Tortoise";

console.log(
  "My cat is named " +
    myCat +
    " and she is " +
    catAge +
    " years old, and her fur is " +
    fur
);

// interpolation - only works with backticks ``
// use ${variableName} to inject the value
console.log(
  `My cat is named ${myCat} and she is ${catAge} years old, and her fur is ${fur}`
);

// If statements
// ternary operators
