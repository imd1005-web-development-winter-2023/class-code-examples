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
