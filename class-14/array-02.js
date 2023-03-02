let orignalArray = ["one", "two", "three"];

let copyArray = orignalArray;

copyArray[0] = "three";

console.log(orignalArray, copyArray);

function isEven(num) {
  if (num % 2 === 0) {
    console.log("Even");
  }
}

isEven(300);
isEven(55);
isEven(44);
isEven(99);
isEven(22);
isEven(2400);

let ages = 20;
let cost = null;

if (ages > 18) {
  cost = 20;
} else if (ages > 10) {
  cost = 10;
} else if (ages > 5) {
  cost = 5;
} else {
  cost = 0;
}

console.log(cost);

let age = 19;
let stateOrProvince = "Ontario";

if (stateOrProvince === "California") {
  if (age >= 21) {
    console.log("Hello Vegas");
  } else {
    console.log("Sorry");
  }
} else if (stateOrProvince === "Ontario") {
  if (age >= 19) {
    console.log("Hello Toronto");
  } else {
    console.log("Sorry");
  }
}

let isLoggedIn = false;
let isLocalUser = true;

if (isLoggedIn && isLocalUser) {
  console.log("The user is both local AND logged in");
} else {
  console.log("The user is either not local or not logged in, or not both");
}

let isLoggedInG = false;

if (!isLoggedInG) {
  console.log("The user is not logged in");
}

const mystery = "Sfffffffff";

if (mystery[0] === "S" && mystery.length > 4 && mystery.indexOf("A") !== -1) {
  console.log("YOU GOT IT!");
} else {
  console.log("Keep trying, you can do it!");
}
/*
function canVisitVegas(age) {
  let allowed = null;

  if (age >= 21) {
    allowed = true;
  } else {
    allowed = false;
  }
  return allowed;
}
*/

// console.log(canVisitVegas(25)); // Error!

let ageFF = 21;

function canVisitVegas() {
  let allowed = null;
  if (ageFF >= 21) {
    allowed = true;
  } else {
    allowed = false;
  }
  return allowed;
}

console.log(canVisitVegas()); // Error!

let listOfAges = [12, 34, 28, 21, 44, 90, 18, 20, 25];

function canConsumeAlcoholInVegas(age) {
  if (age >= 21) {
    return true;
  } else {
    return false;
  }
}

for (let i = 0; i <= listOfAges.length; i++) {
  if (canConsumeAlcoholInVegas(listOfAges[i])) {
    console.log(`Age at Index ${i} is of age`);
  }
}

function displayTodoItem(id, title, done) {
  console.log(
    `ToDo ID: ${id}, ToDo Title: ${title}, Todo Done Status: ${done}`
  );
}

displayTodoItem(1, "Buy Groceries");
displayTodoItem(2, "Order Uber Eats");
displayTodoItem(3, "Call Mom");
displayTodoItem(4, "File taxes");

function addNumbers(a, b) {
  return a + b;
}

let result = addNumbers(3, 4);

console.log(result);
