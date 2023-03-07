//
// JS File
//

//
// SELECTING TARGETS
//

// getElementById
let item1 = document.getElementById("selecting-targets-1-list");

// console log the element
// console.log(item1);

// change the element
item1.style.transform = "scale(1.2) rotate(5deg)";

let item2 = document.getElementById("selecting-targets-1-target-4");

// console.log(item2);

item2.textContent = "Update content in target 4";

// getElementByClassName
let item3 = document.getElementsByClassName("selecting-targets-2-list");

//
// console.log(item3[0]);

item3[0].style.transform = "rotate(-7deg)";

// getElementByClassName
let containers = document.getElementsByClassName("container");

// for loop to iterate through the HTML collection
// for (let i = 0; i < containers.length; i++) {
//   containers[i].style.transform = "rotate(5deg)";
//   containers[i].style.backgroundColor = "white";
// }

// querySelector
let item4 = document.querySelector(".container");

// console.log(item4);

// item4.textContent = "Got you!";
// item4.style.borderColor = "red";
item4.style.transform = "rotate(10deg)";

// querySelectorAll

//
// MANIPULATING HTML
//

// Get the list
let item5List = document.getElementById("manipulating-targets-1");

// console.log(item5List);

// Create an element
let item6Child = document.createElement("li");

// Added text to it
item6Child.textContent = "This is a list item";

item5List.appendChild(item6Child);

let item7Child = document.createElement("li");

item7Child.textContent = "This is another list item";

item5List.appendChild(item7Child);

// Add from array

const array = ["purple", "green", "blue", "orange", "hotpink", "dark blue"];

console.log(array);

let item8List = document.getElementById("manipulating-targets-2");

// console.log(item8List);

// Loop through the array of items
for (let i = 0; i < array.length; i++) {
  let item9ListItem = document.createElement("li");
  item9ListItem.textContent = array[i];

  item8List.appendChild(item9ListItem);
}

// Remove from List

let item10ListItem = document.getElementById("manipulating-targets-2-item-5");

console.log(item10ListItem);

item10ListItem.remove();

document.getElementById("manipulating-targets-2-item-2").remove();

// Replace

let item11ListItem = document.createElement("li");

item11ListItem.textContent = "My new item";

document
  .getElementById("manipulating-targets-2-item-4")
  .replaceWith(item11ListItem);

//

//
// ADD MORE COMPLEX ITEMS
//

/*

<li>
    <h4>Hello world</h4>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      Illum, tempore.
    </p>
    <a href="#">What's up!</a>
</li>

*/

// USE INNER HTML

let item12List = document.getElementById("manipulating-targets-3");

let item13ListItem = document.createElement("li");

let myListItem = `
  <h4>Hello world</h4>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Illum, tempore.
  </p>
  <a href="#">What's up!</a>
`;

item13ListItem.innerHTML = myListItem;

item12List.appendChild(item13ListItem);

// Use Fragment

let item14ListItem = document.createElement("li");

let i14Heading = document.createElement("h4");

i14Heading.textContent = "Second item";

let i14Paragraph = document.createElement("p");

i14Paragraph.textContent =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit.Illum, tempore.";

let i14Link = document.createElement("a");

i14Link.textContent = "What's up!";
i14Link.attributes = "href='#'";

item14ListItem.appendChild(i14Heading);
item14ListItem.appendChild(i14Paragraph);
item14ListItem.appendChild(i14Link);

item12List.prepend(item14ListItem);

//
// MANIPULATE CLASSES
//

// Add a class

let i15ListItem = document.getElementById("mc-1-list-item-3");

// i15ListItem.style.borderColor = "red";

let i16ListItem = document.getElementById("mc-1-list-item-4");

i16ListItem.classList.add("done");
// i16ListItem.classList.remove("done");

let i17ListItem = document.getElementById("mc-1-list-item-1");

i17ListItem.classList.add("done");
// i17ListItem.classList.remove("done");

i17ListItem.style.transform = "rotate(30deg)";
