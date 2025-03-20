// IF

let pokemon = "Pikachu";
let experienceLevel = 10;

let attack = 5;
let defense = 20;

// if statement
// condition to be true
if (experienceLevel > 15) {
  // everything inside this block will only be executed if the condition is true

  // only happens if the statement is executed
  attack *= 2;
  defense *= 2;
  console.log("This pokemon leveled up!");
}

//console.log(attack, defense);

// let age = 2025 - 1994;
let food = "Ramen";
let isTired = false;
/* 
let isOlder = age > 18;
console.log(isOlder); */

// the condition inside an if statement can be a comparison (age > 18) or it can be a variable (isOlder)
// what matters is if the result/value is true

// if(isOlder) {

/* if (age > 18) {
  console.log("You can drive a car!");
}

if (food === "Bolognese") {
  console.log("Yey, food is ready!");
}

if (isTired) {
  console.log("Time to rest!");
}

if (true) {
  console.log("this will always run");
} */

// fun park
let age = 22;
let height = 177;
let isScared = false;

// Nested if statements

if (age > 18) {
  console.log("You are old enough to ride!");

  if (height > 160) {
    console.log("You are tall enough to ride!");

    if (isScared === false) {
      console.log("You are not afraid, go in!");
    }
  }
} else {
  //will only be executed if the condition is FALSE (in this case if the age is less than 18)
  console.log("You are not old enough!");
}

// else

// if money > 10
// if restaurant === "Italian"

/* if(money >10 ){
  if (restaurant === "Italian") {
    console.log("I'll eat here!")
    }
    } */

// Logical operators
// && AND
// || OR
// ! NOT

let money = 9;
let restaurant = "Japanese";
/* if (money > 10 && restaurant === "Italian") {
  // false && restaurant === "Italian"
  // false && true

  console.log("I'll eat here!");
}
 */

if (money > 10 || restaurant === "Italian") {
  //false || false
  console.log("I'll eat here!");
}

let isHungry = false;

/* if (isHungry === false) {
  console.log("That's enough food for today!");
}
 */

if (!isHungry) {
  console.log("That's enough food for today!");
}

if (age > 18 && height > 160 && !isScared) {
  console.log("You can go in!");
} else {
  console.log("You cannot go in");
}

let isSleepy = false;

// WAKE UP
// You are awake, good!
let message;

if (isSleepy) {
  message = "Wake up!";
} else {
  message = "You are awake, good!";
}

// ternary operator - ? :
// stores first result if condition is true, second if false
// Syntatic sugar
let ternaryMessage = isSleepy ? "Wake up!" : "You are awake, good!";

//console.log(message);
//console.log(ternaryMessage);

// Loops

// While loops

let numOfLaps = 0;

while (numOfLaps <= 20) {
  // console.log(numOfLaps);

  //numOfLaps += 1;
  numOfLaps++;
  //numOfLaps--;
}

// %

console.log(60 % 15 === 0);

// run from 1 until 100
// when i find a number divisible by 12 AND 15, console.log that number

// control variable
/* let count = 1;

while (count <= 100) {
  //console.log(count);
  if (count % 12 === 0 && count % 15 === 0) {
    console.log(`${count} is divisible by 12 and 15`);
    break;
  } else {
    console.log(count);
  }
  count++;
}
 */
