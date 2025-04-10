// ---------- 1 - Variables

// Create a variable called 'myName' and assign your first name to it
// log the value to the console

//const myName = "André";
//let myName = "André";
let myname;

myname = "André";

// ---------- 2 - Strings and numbers
// Using the variables below, create a new variable that holds the value "I am 99 years old"

let iAm = "I am";
let age = 99;
let yOld = "years old";

let user = {
  name: {
    first: "André",
    last: "Ferreira",
  },
};

//console.log(`Hello ${user.name.first} ${user.name.last}`);
//concatenation
let option1 = iAm + " " + age + " " + yOld;
//console.log(option1);
//console.log(iAm.length);

//interpolation
let option2 = `${iAm} ${age} ${yOld}`;
//console.log(option2);

// ---------- 3 - If statements
// Create an if statement that checks if a number is even or odd. If it's even, log "Even" to the console, otherwise log "Odd"
// you can use the below variables for testing

let testingNumber1 = 171284;
let testingNumber2 = 843;

if (testingNumber1 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

if (testingNumber2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}

// ---------- 4 - Functions
// Create a function called 'greet' that receives a name as an argument. When invoked, the function should log to the console "Hello [name]!"
// Test it with your own name

function greet(name) {
  // Concatenation
  //console.log("Hello " + name + "!");

  // interpolation
  console.log(`Hello ${name}!`);
}

let otherName = "Diogo";

/* greet(otherName);
greet("Marta"); */

// ---------- 5 - Arrays
// The following array contains things that should not go in a fruit salad

let fruitSalad = ["Salt", "Mango", "Apple", "Orange", "Rice"];

// 5.1 - Remove the last element from the array
let lastElement = fruitSalad.pop();
//console.log(lastElement);

// 5.2 - Remove the first element of the array
fruitSalad.shift();

// 5.3 - Add to the array two more fruits, one at the end and one at the beginning
//3
fruitSalad.push("Watermelon");
fruitSalad.unshift("Pear");

console.log(fruitSalad);
// ---------- 6 - Objects
// Create an object called 'product'. The object should have the properties:
//  'name' (a string)
//  'price' (a number)
//  'available' (a boolean)
//  'seller' (an object with the properties 'name' (a string) and city (a string))
// Assign any value you want to those properties

let product = {
  name: "Microphone",
  price: 89,
  available: true,
  seller: {
    name: "Tomás",
    city: "Porto",
  },
};

// 6.1 Log to the console the name of the seller
//console.log(product.seller.name);

// ---------- 7 - Loops
// Write a for loop that logs to the console numbers from 0 to 20.
// On the numbers 10 and 20, instead of logging 10 and 20, log "Ten" and "Twenty"

for (let i = 0; i <= 20; i++) {
  if (i === 10) {
    console.log("Ten");
  } else if (i === 20) {
    console.log("Twenty");
  } else {
    console.log(i);
  }
}

// ---------- 8 - Bonus
// 8.1 - Using the array below, create a new filtered array called 'above100' with only the numbers above 100

let myNumbers = [8, 12, 982, 1923, 918, 78, 0, 111, 67];

function biggerThan100(num) {
  return num > 100;
}

let filteredArray1 = myNumbers.filter(biggerThan100);
console.log(filteredArray1);

let filteredArray2 = myNumbers.filter(function (num) {
  return num > 100;
});

let filteredArray3 = myNumbers.filter((num) => num > 100);

// 8.2 - With the new 'above100' array, create a new array 'doubled' which has all of the previous values but doubled

function double(num) {
  return num * 2;
}

let doubledArray1 = filteredArray1.map(double);
console.log(doubledArray1);

let doubledArray2 = filteredArray2.map(function (num) {
  return num * 2;
});

let doubledArray3 = filteredArray3.map((num) => num * 2);

// ---------- 9 - Bonus
// 9.1 Create a new object called 'user'
// The object should have the following properties
// username (a string)
// isPremium (a boolean)
// favoriteSongs (an array)
// Assign any values you want to the properties, except the array which should be empty

/* let userSpotify = {
  username: "Catarina",
  isPremium: true,
  favoriteSongs: [],
  addToFavorites: function (song) {
    userSpotify.favoriteSongs.push(song);
  },
}; */

// 9.2 Create 2 new objects called 'song1' and 'song2'.
// These objects should have the following properties each
// title (a string)
// artist (a string)
// release year (a number)
// duration (a string)
// Assign any values you want to the properties

let song1 = {
  title: "Os animais da Quinta",
  artist: "Quim Barreiros",
  release_year: 2003,
};

let song2 = {
  title: "Fado Português",
  artist: "Amália Rodrigues",
  release_year: 1967,
};

// 9.3 Add to the 'user' object a method called 'addToFavorites'
// This method receives an argument (an object)
// When invoked the method should add the object it received to the 'favoriteSongs' array of the user
// Using the 'addToFavorites' method, add 'song1' and 'song2' to the users favorite songs
// userSpotify

let userSpotify = {
  username: "Catarina",
  isPremium: true,
  favoriteSongs: [],
  addToFavorites: function (song) {
    userSpotify.favoriteSongs.push(song);
  },
};

userSpotify.addToFavorites(song1);
userSpotify.addToFavorites(song2);

console.log(userSpotify.username);
console.log(userSpotify.favoriteSongs[0].title);
console.log(userSpotify.favoriteSongs[1].artist);

// 9.4 Log to the console the following (in different console.logs, and always using the 'user' object)
// - The username of the user
// - The title of the first song on the user's favorite playlist
// - The artist of the second song on the user's favorite playlist
