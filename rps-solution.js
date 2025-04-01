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

function pickNumber() {
  let randomOption = Math.random() * options.length;
  let roundedRandom = Math.floor(randomOption);
  return roundedRandom;
}

for (let i = 0; i < 5; i++) {
  //console.log(i);
  // Escolha de mãos
  let player1Option = options[pickNumber()];
  let player2Option = options[pickNumber()];

  // registo de mãos
  player1.hands.push(player1Option);
  player2.hands.push(player2Option);

  /*   console.log(player1.hands);
  console.log(player2.hands); */
  // verificação das mãos

  //if (player1.hands[0] == player2.hands[0]) {
  //if (player1.hands[1] == player2.hands[1]) {
  //if (player1.hands[2] == player2.hands[2]) {
  //if (player1.hands[3] == player2.hands[3]) {
  //if (player1.hands[4] == player2.hands[4]) {
  if (player1.hands[i] == player2.hands[i]) {
    console.log("There was a tie");
  } else if (
    (player1.hands[i] == "Rock" && player2.hands[i] == "Scissor") ||
    (player1.hands[i] == "Scissor" && player2.hands[i] == "Paper") ||
    (player1.hands[i] == "Paper" && player2.hands[i] == "Rock")
  ) {
    console.log(`${player1.name} wins with a ${player1.hands[i]}!`);
    player1.points++;
  } else {
    console.log(`${player2.name} wins with a ${player2.hands[i]}!`);
    player2.points++;
  }
}
