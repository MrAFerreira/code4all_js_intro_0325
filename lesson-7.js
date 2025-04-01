// 8
// Rock, Paper, Scissors
// 2 players
// name of the player
// count the wins/points
// keep track of the player's choices

let options = ["Rock", "Paper", "Scissor"];

let player1 = {
  name: "Emanuela",
  points: 0,
  hands: [],
};

let player2 = {
  name: "Sara",
  points: 0,
  hands: [],
};

// 1. generate a radom option for the hands
// get a random number, between 0 and 2
// with the number get an option from the array

// Math.random
/* let randomOption = Math.random() * options.length; // * 3
let roundedRandom = Math.floor(randomOption);

console.log(roundedRandom); */

// Refactor

function pickNumber() {
  let randomOption = Math.random() * options.length; // * 3
  let roundedRandom = Math.floor(randomOption);
  return roundedRandom;
}

let player1Option = options[pickNumber()];
let player2Option = options[pickNumber()];

// 2. store it in the hands array

player1.hands.push(player1Option);
player2.hands.push(player2Option);

console.log(player1.hands[0]);
console.log(player2.hands);

// Programming !== Coding

// 3. compare both options
// the options are in the player hands arrays
// 3 options
// tie, player1, player2

//  player1.hands[0] == "Rock" && player2.hands[0] == "Rock"   --Empate

//  player1.hands[0] == "Rock" && player2.hands[0] == "Scissor"  -- player1 wins
//  player1.hands[0] == "Scissor" && player2.hands[0] == "Paper"  -- player1 wins
//  player1.hands[0] == "Paper" && player2.hands[0] == "Rock"  -- player1 wins

/* 


(
(player1.hands[0] == "Rock" && player2.hands[0] == "Scissor")
||
(player1.hands[0] == "Scissor" && player2.hands[0] == "Paper")
||
(player1.hands[0] == "Paper" && player2.hands[0] == "Rock")
)
*/

// 4. console.log who is the winner and increase the points if needed

if (player1.hands[0] == player2.hands[0]) {
  // em caso de empate
  console.log("There was a tie");
} else if (
  (player1.hands[0] == "Rock" && player2.hands[0] == "Scissor") ||
  (player1.hands[0] == "Scissor" && player2.hands[0] == "Paper") ||
  (player1.hands[0] == "Paper" && player2.hands[0] == "Rock")
) {
  // player 1 wins
  console.log(`${player1.name} wins with a ${player1.hands[0]}!`);

  // increase points
  //player1.points = player1.points + 1
  //player1.points += 1
  player1.points++;
} else {
  // player 2 win
  console.log(`${player2.name} wins with a ${player2.hands[0]}!`);
  player2.points++;
}

// 5. Repeat the above 5

// The following code isn't complete but it's an example of how the logic works
/* if (player1.hands[0] === "Paper" && player2.hands[0] === "Rock") {
  console.log("Player 1 wins");
  // increase player 1 points
} */
