console.log("Hello");

// Template literals

let students = 32;

console.log("String", students);

console.log(`String ${students + 10}`);

// Declare some attributes
let areaCode = 613;
let telephonePrefix = 825;
let lineNumber = 6849;

// Use a string template literal
// to display: "My phone number is (613) 825-6849"
console.log(`ADD_YOUR_CODE_HERE`);

// Declares an empty array
let myEmptyArray = [];

// Declares an array with string values
let myFavouriteColoursArray = ["purple", "blue", "hotpink", "green", "yellow"];

// Declares an array of a different data types
let myMixedArray = ["blue", 55, false, "green"];

// Output the arrays
console.log(myEmptyArray);
console.log(myFavouriteColoursArray);
console.log(myMixedArray);

console.clear();

// Declare an array with your seven values
let myLotteryNumbers = [4, 12, 23, 45, 45, 56, 76];

// Modify the first value in the array by adding 10 to it
myLotteryNumbers[0] = myLotteryNumbers[0] + 10;
// Modify the last value in the array by adding 100 to it
myLotteryNumbers[6] = myLotteryNumbers[6] + 100;
// Modify the third value in the array by multiply it by 3

// Output the array
console.log("The modified numbers are ", myLotteryNumbers);

console.clear();

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

console.clear();

// Declare an empty array
let myFavouriteColourss = [];

// Add two string variables to the array
myFavouriteColourss.push("purple");
myFavouriteColourss.push("green");
myFavouriteColourss.push("hotpink");

// Output the array - the length should be 2
console.log(
  "The amount of items in the array are:",
  myFavouriteColourss.length
);

console.clear();

// Declare an array of colours
let myFavouriteColoursss = ["purple", "blue", "hotpink", "green", "yellow"];

// Access the first array item and modify it
myFavouriteColoursss[0] = "azure";

// Access the last array item and modify it
myFavouriteColoursss[myFavouriteColoursss.length - 1] = "beige";

// Output the array - "azure", "blue", "hotpink", "green", "beige"
console.log(myFavouriteColoursss);

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

// starWarsShips.unshift("TIE Advanced x1");

// Output the array -
// ("TIE Advanced x1", "Star Destroyer", "Millennium Falcon", "CR90 corvette", "X-Wing");
console.log(starWarsShips);

console.clear();

const myLotteryNumberss = [1, 22, 34, 56, 83, 59, 23];

// Output the array
console.log("Original: ", myLotteryNumberss);

// Reverse method
myLotteryNumberss.reverse();

// Output the array
console.log("After reverse: ", myLotteryNumberss);

console.clear();

let a = false;

let b = a;

b = true;

console.log("a", a);
console.log("b", b);

let aArray = [1, 2, 3, 4];

let bArray = [...aArray];

bArray[0] = 100;

console.log("a", aArray);
console.log("b", bArray);

//number % 2 == 0
console.clear();

function isEven(num) {
  if (num % 2 == 0) {
    console.log("Even");
  } else {
    console.log("Odd");
  }
}

isEven(300); // Even
isEven(55); // (Blank)
isEven(44); // Even
isEven(99); // (Blank)
isEven(22); // Even
isEven(2400); // Even

console.clear();

const rating = 4;

if (rating === 5) {
  /* If rating is 5 */
  console.log("Excellent job");
} else if (rating === 4) {
  /* If rating is 4 */
  console.log("That's really wonderful");
} else if (rating === 3) {
  /* If rating is 3 */
  console.log("Great job");
} else if (rating === 2) {
  /* If rating is 2 */
  console.log("Awh no, that was a good try");
} else if (rating === 1) {
  /* If rating is 1 */
  console.log("Ummm, so this is awkward");
}

console.clear();

const mystery = "S00A08900";

if (mystery[0] === "S" && mystery.length > 4 && mystery.indexOf("A") !== -1) {
  console.log("YOU GOT IT!");
} else {
  console.log("Keep trying, you can do it!");
}
