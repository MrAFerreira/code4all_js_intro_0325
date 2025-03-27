let player = {
  name: "Diogo",
  token: "Ship",
  money: 1000,
  checkBankrupt: function () {
    if (player5.money <= 0) {
      console.log("You lost the game!");
    } else {
      console.log("You still got this!");
    }
  },
  buyHouse: function (housePrice) {
    player5.money -= housePrice;
  },
  // rollDice
  // console.log() // 1 a 6
  rollDice: function () {
    let initialResult = Math.random() * 6 + 1; // entre 1  e 6.9999
    let roundedResult = Math.floor(initialResult); // entre 1 e 6
    console.log(roundedResult);
  },
};
/* 
player.money = 1000000000000000;
console.log(player.money);

player.rollDice(); */

let user = {
  name: "Francisco",
  age: 22,
  address: {
    street: "Rua do Javascript",
    doorNumber: 7,
    apartmentNumber: "1ºJ",
    zipCode: {
      first: 2770,
      second: 880,
    },
    city: {
      en: "Lisbon",
      pt: "Lisboa",
    },
  },
};

//console.log(user.address.city.en); // Lisbon

// Arrays  - Lists

let arr = [];

let studentNames = ["Angela", "Emanuela", "Sara"];

//console.log(studentNames);

// bracket notation
// to access an array element we use it's index
// zero-indexed

//console.log(studentNames[0]);
//console.log(studentNames[1]);
//console.log(studentNames[2]);
//console.log(studentNames[3]); // undefined

// length
//console.log(studentNames.length); // 3

// access the last element
//console.log(studentNames[studentNames.length - 1]);

// random array element

// random number

let randomNumber = Math.floor(Math.random() * studentNames.length);

//console.log(studentNames[randomNumber]);
//console.log(studentNames[Math.floor(Math.random() * studentNames.length)]);

// Array methods

let lineEntry = ["Angela", "Sara", "Emanuela", "Diogo", "Catarina"];

// remove the last element
let lastPerson = lineEntry.pop();
//console.log(lineEntry);
//console.log(lastPerson);

// remove the first element
lineEntry.shift();
//console.log(lineEntry);

// adds to the end of the array - push
lineEntry.push("André");
//console.log(lineEntry);

// adds to the beggining of the array - unshift
lineEntry.unshift(lastPerson);
lineEntry.unshift("Angela");
//console.log(lineEntry);

// pop, shift, push, unshift

lineEntry.push("Rodrigo");

lineEntry.pop();

lineEntry.unshift("Adelle");

lineEntry.shift();

//console.log(lineEntry);

// while loop

let count = 0;

while (count < 10) {
  //console.log(count);
  //count +=1
  count++;
}

// for loop
// counting variable
// condition for the loop
// increment
for (let i = 0; i < 10; i++) {
  //console.log("first loop", i);
}

for (let i = 0; i < 10; i++) {
  //console.log("second loop", i);
}

// iteration
for (let i = 0; i <= lineEntry.length - 1; i++) {
  // i = 0
  // lineEntry[0]
  //i = 1
  // lineEntry[1]
  //i = 2
  // lineEntry[2]
  //console.log(lineEntry[i]);
}

// getArraySize
// receives an array as an argument
// returns the size of the array

let testArray = [1, 2, 3];

function getArraySize(arr) {
  return arr.length;
}

/* console.log(getArraySize(testArray));
console.log(getArraySize(lineEntry));
console.log(getArraySize(studentNames)); */

// getFirstElement
// receives an array as an argument
// return the first element of the array

function getFirstElement(arr) {
  return arr[0];
}

console.log(getFirstElement(testArray));
console.log(getFirstElement(lineEntry));
console.log(getFirstElement(studentNames));

/* function sum(a, b){
  return a + b;
} */

// 8
// Rock, Paper, Scissors
// 2 players
// name of the player
// count the wins/points
// keep track of the player's choices

let options = ["Rock", "Paper", "Scissor"];

let player1 = {
  name: "Player 1",
  points: 0,
  hands: [],
};

let player2 = {
  name: "Player 2",
  points: 0,
  hands: [],
};

// generate a random hand for each player
// store it in the hands array
// compare both options
// console.log who is the winner and increase the points if needed

// The following code isn't complete but it's an example of how the logic works
if (player1.hands[0] === "Paper" && player2.hands[0] === "Rock") {
  console.log("Player 1 wins");
  // increase player 1 points
}
