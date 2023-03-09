function greet(message = "WTF") {
  console.log(message);
}

// greet("Use this instead");

const greet2 = function (message) {
  console.log(message);
};

// greet2("Use this instead");

const greet3 = (message = "default") => {
  console.log(message);
};

// greet3("Hello word");

//
//
// events-add-event-listner
//
//

// const btn1 = document.querySelector("#btn-1");

// function shout(event) {
//   console.log("SHOUT!");
// }

// function quiet(event) {
//   console.log("quiet");
// }

// btn1.addEventListener("click", shout);
// btn1.addEventListener("click", quiet);

// Three ways of adding events to an element
// addEventListener()
// inline onclick()
// and the onlick property

// btn1.onclick = shout;

//
//
// events-objects
//
//

// Add an event listener and console log the event object

// const btn4 = document.querySelector("#btn-4");

// btn4.addEventListener("click", showEventDetails);

// function showEventDetails(event) {
//   console.log(event);
// }

//
//
// events-forms
//
//

// Cache all of the dom items
// Add an event listener on form submit
// Grab the form data
// Create a new li
// Add the list item into the parent ul

// Variables
const form = document.querySelector("#form-1");
const product = document.querySelector("#form-1-product-name");
const quantity = document.querySelector("#form-1-product-qty");
const list = document.querySelector("#list-1");

// Adding event handler
form.addEventListener("submit", addToList);

// Function to add something to my list
function addToList(event) {
  event.preventDefault();

  console.log(product.value, quantity.value);

  const tempListItem = document.createElement("li");

  tempListItem.textContent = `${product.value} (${quantity.value})`;

  list.appendChild(tempListItem);
}

//
//
// events-bubbling
//
//

// Cache all of the four bubble elements and the button
// Add click listeners to all of them
// Show how stopPropogation() stops the event from bubbling

//
//
// events-delegation
//
//

// Neil don't forget - event.target.dataset.todo;

// Cache the dom objects #list-2 #message-1
// Create the list hander
// Add the event listeners
