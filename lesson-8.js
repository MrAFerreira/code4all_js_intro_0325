// Array methods

// High Order Functions // HOF

// calculator

function sum(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function calculator(num1, num2, operation) {
  let myCalculation = operation(num1, num2);
  console.log(myCalculation);
}

// calculator(10, 5, sum); //
// calculator(10, 5, subtract); //

// Invocar / Executar / Chamar
/* calculator()
sum()
subtract() */

// Array methods

let animalArray = ["Cat", "Dog", "Turtle", "Pinguin", "Elephant"];

// forEach
// doesn't return a new array
// doesn't mutate the original array

function yell(str) {
  console.log(str.toUpperCase());
}

//yell("pikachu");

//animalArray.forEach(yell);
//console.log(animalArray)

// filter
// returns a new array
// doesn't mutate the original

let ages = [15, 8, 9, 30, 76, 9, 43];

function biggerThan18(num) {
  return num > 18;
}

let adults = ages.filter(biggerThan18);
// 30, 76, 43

//console.log(ages);
//console.log(adults);

// find
// returns the first value that satisfies the condition
// doesn't mutate the original array

let firstAdult = ages.find(biggerThan18);
// console.log(firstAdult);

// map
// returns a new array
// doesn't mutate the original array

function addOneYear(num) {
  return num + 1;
}

function double(num) {
  return num * 2;
}

let transformedAges = ages.map(addOneYear);

let doubledAges = ages.map(double);

//console.log(transformedAges);
//console.log(doubledAges);

// let ages = [15, 8, 9, 30, 76, 9, 43];

function isEven(num) {
  return num % 2 === 0;
}

//console.log(isEven(8));

let evenArray = ages.filter(isEven);

let arrowEven = ages.filter((age) => age % 2 === 0);

//console.log(evenArray);

/* function multiply(num1, num2) {
  return num1 * num2;
}  */

let multiply = function (num1, num2) {
  return num1 * num2;
};

console.log(multiply(2, 2));

// ES6
// arrow functions

// return implicit
let arrowMultiply = (num1, num2) => num1 * num2;

// return explicit
let arrowBiggerThan18 = (num) => {
  console.log(num);
  return num > 18;
};

// Anonymous functions

// let animalArray = ["Cat", "Dog", "Turtle", "Pinguin", "Elephant"];

/* function turnToUpperCase(str){
  return str.toUpperCase();
}

let loudAnimals = animalArray.map(turnToUpperCase) */

let loudAnimals = animalArray.map((animalName) => animalName.toUpperCase());

console.log(loudAnimals);
