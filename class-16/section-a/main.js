//
//
// events-add-event-listner
//
//

// Three ways of adding events to an element
// addEventListener()
// inline onclick()
// and the onlick property

// const btn1 = document.querySelector("#btn-1");

// // console.log(btn1);

// btn1.addEventListener("click", greet);

// function greet(event) {
//   console.log(event);
// }

// const greet1 = function (message) {
//   console.log(message);
// };

// greet1("my message");

// const greet2 = (message) => {
//   console.log(message);
// };

// greet2("My other function is cooler");

// const btn3 = document.querySelector("#btn-3");

// btn3.addEventListener("dblclick", greet);

//
//
// events-objects
//
//

// Add an event listener and console log the event object

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

// const form = document.querySelector("#form-1");
// const product = document.querySelector("#form-1-product-name");
// const quantity = document.querySelector("#form-1-product-qty");
// const list = document.querySelector("#list-1");

// form.addEventListener("submit", addToList);

// function addToList(event) {
//   event.preventDefault();

//   console.log(product.value, quantity.value);

//   console.log("I AM A SUBMIT FORM");

//   const myLi = document.createElement("li");
//   myLi.textContent = `${product.value} (${quantity.value})`;

//   // myLi.textContent = product.value + " (" + quantity.value + ")";

//   list.appendChild(myLi);

//   form.reset();
// }

//
//
// events-bubbling
//
//

// Cache all of the four bubble elements and the button
// Add click listeners to all of them
// Show how stopPropogation() stops the event from bubbling

// const myBubble1 = document.querySelector(".bubble-1");
// const myBubble2 = document.querySelector(".bubble-2");
// const myBubble3 = document.querySelector(".bubble-3");
// const myBubble4 = document.querySelector(".bubble-4");
// const myButton = document.querySelector("#btn-6");

// function shout(event) {
//   console.log("Hello from", event.currentTarget);

//   //event.stopPropagation();
// }

// myBubble3.addEventListener("click", shout);
// myBubble2.addEventListener("click", shout);
// myBubble1.addEventListener("click", shout);
// myButton.addEventListener("click", shout);
// myBubble4.addEventListener("click", shout);

//
//
// events-delegation
//
//

// Neil don't forget - event.target.dataset.todo;

// Cache the dom objects #list-2 #message-1
// Create the list hander
// Add the event listeners

const list = document.querySelector("#list-2");
const message = document.querySelector("#message-1");

list.addEventListener("click", updateMessage);

function updateMessage(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }

  const index = event.target.dataset.todo;

  console.log("Clicked", index);

  message.textContent = index;
}
