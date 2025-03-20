/* console.log("Take out the ingredients");
console.log("Cut ingredients");
console.log("Add them to the frying pan");
console.log("Season");
console.log("Taste");
console.log("Plate"); */

// Functions

// declare a function
// function keyword
// name of the function (should be a verb + something)
// parenthesis and curly brackets

let energy = 20;

function cookDish() {
  console.log("Function was executed");

  if (energy > 1) {
    console.log("Take out the ingredients");
    console.log("Cut ingredients");
    console.log("Add them to the frying pan");
    console.log("Season");
    console.log("Taste");
    console.log("Plate");
  }
}

//  invoke (executar)
//cookDish();
// hard-coded

let user1 = "Diogo";
let user1Password = 12345;

let user2 = "Catarina";
let user2Password = 54321;

// Parameters -
// placeholder
function changePassword(user, password) {
  console.log(`You're username is ${user} and your password is ${password}`);
  console.log("Do you want to change it?");
}

// arguments
/* changePassword(user1, user1Password);
changePassword(user2, user2Password);
changePassword("Marta", 887624); */

function sum(n1, n2) {
  console.log(n1 + n2);
}

/* sum(689123, 123123);
sum(657, 78);
sum(12, 12);
sum(3, 4);
 */

let globalSecret = "Not really a secret";

// scope
function tellSecret() {
  let secretMessage = "Don't tell this to anyone";
  console.log(secretMessage);
  console.log(globalSecret);
}

if (true) {
  //console.log(secretMessage);

  let anotherSecret = "Hello";
  //console.log(anotherSecret);
  //console.log(globalSecret);
}
//tellSecret();
// console.log(secretMessage);

// Return
// What the function gives us back
// only return 1 thing per function

function calculateWallet(currentAmount, shoppingAmount) {
  console.log(currentAmount - shoppingAmount);
  //console.log(`You know have ${currentAmount - shoppingAmount} euros`);
  return currentAmount - shoppingAmount;
}

let diogoWallet = 200;
let catarinaWallet = 300;

diogoWallet = calculateWallet(diogoWallet, 30);
diogoWallet = calculateWallet(diogoWallet, 100);
diogoWallet = calculateWallet(diogoWallet, 50);

console.log(diogoWallet);

function goOutside(weather) {
  if (weather === "Sunny") {
    return true;
  } else {
    return false;
  }
}

// 5 , 6
// Math.random(), Math.floor()
