const form = document.querySelector(".form");
const scoreInput = document.querySelector("#score");
const message = document.querySelector("#message");
const scoreLocalStorageKey = "score";

let currentScore = null;

// Run when the form is submitted
function submitForm(event) {
  // Prevent default behaviour for form submission
  event.preventDefault();

  // get the score from the form
  const currentScore = scoreInput.value;

  saveToStorage(currentScore);
  loadCurrentScoreFromLocalStoreage();
  updateMessage(currentScore);
}

function saveToStorage(score) {
  localStorage.setItem(scoreLocalStorageKey, score);
}

function loadCurrentScoreFromLocalStoreage() {
  currentScore = localStorage.getItem(scoreLocalStorageKey, score);
}

function updateMessage(score) {
  let displayMessage = "";

  if (score === null) {
    displayMessage = "No score loaded from local storage";
  } else if (!isNaN(score)) {
    displayMessage = `The current score in local storage is ${score}`;
  } else {
    displayMessage = `An error has occured`;
  }

  message.textContent = displayMessage;
}

function initialise() {
  // Check if local storage is set on initialisation of web app
  loadCurrentScoreFromLocalStoreage();

  // Update the message that is displayed
  updateMessage(currentScore);
}

// Add event handler for form submit
form.addEventListener("submit", submitForm);

initialise();
