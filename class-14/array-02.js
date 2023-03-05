console.log("Hello world");

let numberOfStudents = 52;

console.log(numberOfStudents);

let isAwesome = true;

console.log(isAwesome);

// Declare an object literal
const elephant = {
  name: "Jimbo",
  age: 200,
  isMarried: false,
};

// Access the whole object literal
console.log(elephant);

// Access a property using the dot notation and something called chaining
console.log(elephant.name);

// Access a property using the dot notation and something called chaining
console.log(elephant.age);

// Declare a const and set it to 100
const boilingPoint = 100;
// Try to assign the const a new value

// Add both of the strings and display using the console log
console.log("The boiling point is:", boilingPoint);

console.clear();

// Declare a const called price and set it
const price = 4.99;

// Declare a const called quantity and set it
const quantity = 7;

// Console log will display - You can buy 7 elephants for $34.93
console.log(`You can buy ${quantity} elephants for $${price * quantity}`);

// Note the two dollar signs - the first is just the regular dollar sign
//  and the second one activates the expression within the curly braces

console.clear();

// Declare some attributes
let areaCode = 613;
let telephonePrefix = 825;
let lineNumber = 6849;

// Use a string template literal
// to display: "My phone number is (613) 825-6849"
console.log(
  `My phone number is (${areaCode}) ${telephonePrefix}-${lineNumber}`
);

// Declare an array with your seven values
let myLotteryNumbers = [1, 4, 23, 43, 45, 46, 47]; // ADD CODE HERE

// Output the array
console.log("The winning numbers are ", myLotteryNumbers);

console.clear();

// Declare an array with your seven values
let myLotteryNumberss = [1, 4, 23, 43, 45, 46, 47];

// Modify the first value in the array by adding 10 to it
myLotteryNumberss[0] = myLotteryNumberss[0] + 10;

// Modify the last value in the array by adding 100 to it
myLotteryNumberss[6] = myLotteryNumberss[6] + 100;

// Modify the third value in the array by multiply it by 3
myLotteryNumberss[2] = myLotteryNumberss[2] * 3;

// Output the array
console.log("The modified numbers are ", myLotteryNumberss);

// Declare an empty array
let myFavouriteColours = [];

// Add a string variable to the array
myFavouriteColours.push("purple");

// Check out the contents of the array - - we should see ("purple")
console.log(myFavouriteColours);

// Add another string variable to the array
myFavouriteColours.push("green");

// Output the array - we should see ("purple, "green")
console.log(myFavouriteColours);

// Declare an empty array
//let myFavouriteColours = [];

// Add two string variables to the array
myFavouriteColours.push("purple");
myFavouriteColours.push("green");

// Output the array - the length should be 2
console.log(
  "The amount of items in the array are:",
  myFavouriteColours.length,
  myFavouriteColours
);
console.clear();

// Declare an array with your seven values
let starWarsShips = [
  "Luke Skywalker",
  "Star Destroyer",
  "Millennium Falcon",
  "CR90 corvette",
];

// ADD YOUR CODE HERE
starWarsShips.push("X-Wing");

starWarsShips[0] = "TIE Advanced x1";

// Output the array -
// ("TIE Advanced x1", "Star Destroyer", "Millennium Falcon", "CR90 corvette", "X-Wing");
console.log(starWarsShips);

console.clear();

let a = 4;

let b = a;

b = 10000;

// console.log("a", a);
// console.log("b", b);

let aArray = [4, 300, 500, 600, 700];

let bArray = [...aArray];

bArray[0] = 400;

console.log("a", aArray);
console.log("b", bArray);

for (let i = 0; i < 5; i++) {
  console.log("Counter at", i);
}
