/* Math.random, Math.floor  */

//console.log(10 - 2);

// Math.random returns  number between 0 (inclusive) and 1 (exclusive)

let randomNumber = Math.random();
let randomNumber2 = Math.random();
//console.log(randomNumber);
//console.log(randomNumber2);

// get numbers between 0 and 10
//console.log(Math.random() * 10);

// dice -  between 1 and 6
//console.log(Math.random() * 6 + 1);

// Math.floor - rounds down
//console.log("Floor", Math.floor(6.9));
// Math.ceil -rounds up
//console.log("Ceil", Math.ceil(6.01));
// Math.round - rounds according to the decimal spaces
//console.log("Round", Math.round(6.49));
//console.log("Round", Math.round(6.5));

let dice = Math.random() * 6 + 1;
let roundedDice = Math.floor(dice);

//console.log(roundedDice);
//

// toUpperCase - works with any string
function capsLock(text) {
  return text.toUpperCase();
}

let myShoutMessage = capsLock("be quiet");
//console.log(myShoutMessage);

let anotherMessage = "i am also uppercase";
//console.log(anotherMessage.toUpperCase());
//console.log("this is also upper case".toUpperCase());
// Codewars
// LeetCode

/* Objects */
// non-primary data types

let player1Name = "Sara";
let player1Token = "Car";
let player1Money = 1000;

let player2Name = "Angela";
let player2Token = "Tophat";
let player2Money = 1000;

let player3Name = "Emanuela";
let player3Token = "Suitcase";
let player3Money = 1000;

let player4Name = "André";
let player4Token = "Ship";
let player4Money = 1000;

// Transform into objects

// key - value
let player1 = {
  name: "Sara",
  token: "Car",
  money: 1000,
};

let player2 = {
  name: "Angela",
  token: "Tophat",
  money: 1000,
};

let player3 = {
  name: "Emanuela",
  token: "Suitcase",
  money: 1000,
};

let player4 = {
  name: "André",
  token: "Ship",
  money: 1000,
};

let spotifyUser = {
  name: "André",
  isPremium: false,
  favouriteArtist: null,
  dateJoined: 2018,
};

//console.log(player1);

// to access a property from an object, we use dot notation

console.log(player1.name);
console.log(player1.token);
console.log(player1.money);

// to add a property

console.log("antes", player1);
player1.numberOfHouses = 0;
console.log("depois", player1);

// to change the value of a property in an object

//player1Money = 500
player1.money = 500;
console.log("depois de alterar", player1);

// delete a property

delete player1.numberOfHouses;
console.log("depois de apagar propriedade", player1);

/*  Methods */
// a function inside an object
let player5 = {
  name: "Diogo",
  token: "Thumb",
  money: 1000,
  checkBankrupt: function () {
    if (player5.money <= 0) {
      console.log("You lost the game!");
    } else {
      console.log("You still got this!");
    }
  },
  sayHello: function (name) {
    console.log(`Hello ${name}!`);
  },

  buyHouse: function (housePrice) {
    //housePrice 200
    // player5.money 1000
    //player5.money = player5.money - housePrice
    player5.money -= housePrice;
    // player5.money 800
  },
};

// Criem um método chamado buyHouse
// Receber o valor da casa (numero)
// Retirar o valor da casa do dinheiro do jogador

player5.buyHouse(300);
player5.buyHouse(400);
console.log(player5.money); // 800

//player5.money(checkBankrupt)
//player5.checkBankrupt();
//player5.sayHello("Catarina");

//console.log("hello");
//console.log();
//Math.random();
// function checkBankrupt

/* 

Utiliza o seguinte objecto de jogador como base:

let player = { 
	name: "Diogo", 
	token: "Thumb", 
	money: 1000, 
	checkBankrupt: function () { 
		if (player5.money <= 0) { 
			console.log("You lost the game!"); 
		} else { 
			console.log("You still got this!"); 
		} 
	}
};

Cria um método chamado `receiveMoney` dentro do objecto do player. 
Este método tem um parâmetro, um número. 
Adiciona esse número ao dinheiro total do jogador.

Cria um método `checkWin`. 
Este método não precisa de parâmetros.
Este método verifica se o jogador tem mais de 5000 money, e se sim faz console.log de "You won the game!"

Cria um método chamado `rollDice`
Este método não precisa de parâmetros. 
Quando invocado o método faz console.log de um número entre 1 e 6 (ambos inclusive);

*/

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
};
