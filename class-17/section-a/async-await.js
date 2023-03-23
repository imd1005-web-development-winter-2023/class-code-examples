// let promise = new Promise(function (resolve, reject) {
//   const delayedRun = function () {
//     const num = 5;
//     resolve(num * 5);
//   };

//   setTimeout(delayedRun, 2000);
// });

// let promiseRefactor = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const num = 5;
//     resolve(num * 5);
//   }, 2000);
// });

// promise.then(
//   function (result) {
//     console.log("Result:", result);
//   },
//   function (error) {
//     console.log("Error", error);
//   }
// );

// promiseRefactor.then(
//   (result) => {
//     console.log("Result und:", result);
//   },
//   (error) => {
//     console.log("Error", error);
//   }
// );

// new Promise(function (resolve, reject) {
//   resolve("done");
// })
//   .then(
//     (result) => {
//       console.log("Result 1:", result);
//     },
//     (error) => {
//       console.log("Error 1", error);
//     }
//   )
//   .finally(() => {
//     console.log("Finally");
//   });

// console.log("Hello");

// async function f() {
//   return Promise.resolve("from function F");
// }

// f().then((result) => console.log("Result async: ", result));

// let response = null;

// async function loadAppData() {
//   console.log("I am in loadAppData");

//   response = await fetch("https://api.adviceslip.com/advice");

//   const something = await response.json();

//   console.log("Pokemon name:", something);
// }

// loadAppData();

// console.log("The response is ", response);

// // Create a promise using the Promise object
// const myFirstPromise = new Promise((resolve, reject) => {
//   // Set a max for our random number
//   const MAX = 10;
//   // Returns a random number from 0 to MAX
//   const random = Math.floor(Math.random() * 10);
//   // Check the value of the random number is greater than 5
//   if (random > 5) {
//     // Success!
//     resolve("Hooray");
//   } else {
//     // Not so successful
//     reject("Not High Enough");
//   }
// });

// myFirstPromise
//   .then((result) => {
//     console.log("Resolved response from Promise: ", result);
//   })
//   .catch((result) => {
//     console.log("Rejected response from Promise: ", result);
//   })
//   .finally(() => {
//     console.log("We're done running our Promise");
//   });

// // Address of the API
// const API_URL = "https://pokeapi.co/api/v2/pokemon/8";

// // The function that has await inside it MUST have the async keyword
// async function fetchPokemon() {
//   try {
//     const response = await fetch(API_URL);
//     const data = await response.json();
//     console.log("Data from fetch using async await", data);
//   } catch (error) {
//     console.log("Error occured: ", error);
//   }
// }

// fetchPokemon();

// Address of the API
const API_URL = "https://pokeapi.co/api/v2/pokemon/8";
let pokemonData = null;

// The function that has await inside it MUST have the async keyword
async function fetchPokemon() {
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log("Data from fetch using async await", data);
    loadedPokemonData(data);
  } catch (error) {
    console.log("Error occured: ", error);
  }
}

fetchPokemon();

function loadedPokemonData(data) {
  pokemonData = data;
  console.log("My pokemon data", pokemonData);

  // RENDER LIST ITEM
  // REDRAW PAGE
  // ETC
}

console.log("My pokemon data", pokemonData);

(async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  pokemonData = data;

  console.log("inline data ", data);
})();

console.log(pokemonData);
