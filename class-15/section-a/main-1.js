//
// document.getElementById("ID")
//

const i1ListItem = document.getElementById("selecting-targets-1-list");

// console.log(i1ListItem);

i1ListItem.style.transform = "scale(1.4)";

const i2ListItem = document.getElementById("selecting-targets-1-target-4");

i2ListItem.style.transform = "rotate(10deg)";

//
// document.getElementsByClassName("class")
//

const i3Target1s = document.getElementsByClassName("selecting-targets-1");

// console.log(i3Target1s);

// DONT DO THIS
// i3Target1s.style.transform = "rotate(15deg)";

const i4TargetContainer = document.getElementsByClassName("container");

for (let i = 0; i < i4TargetContainer.length; i++) {
  // i4TargetContainer[i].style.backgroundColor = "white";
  // i4TargetContainer[i].style.transform = "rotate(15deg)";
}

//
// document.querySelector(".class")
//

// CLASS NAMES:
// selecting-targets-3-list
// selecting-targets-3-target-2

const i5List = document.querySelector(".selecting-targets-1");

// console.log(i5List);

i5List.textContent = "WTF";

//

const i6List = document.querySelectorAll(".selecting-targets-1");

i6List[3].style.backgroundColor = "white";

//
// APPEND CHILD
//

const i7List = document.getElementById("manipulating-targets-1");

const i8ListItem = document.createElement("li");

i8ListItem.textContent = "List Item 1";

i7List.appendChild(i8ListItem);

const i9ListItem = document.createElement("li");

i9ListItem.textContent = "List Item 2";

i7List.appendChild(i9ListItem);

const i10ListItem = document.createElement("li");

i10ListItem.textContent = "List Item 3";

i7List.prepend(i10ListItem);

//
// LIST ITEMS FROM ARRAY
//

const colours = ["purple", "green", "blue", "hotpink", "yellow"];

const i11List = document.getElementById("manipulating-targets-2");

for (let i = 0; i < colours.length; i++) {
  let iXListItem = document.createElement("li");
  iXListItem.textContent = colours[i];

  i11List.prepend(iXListItem);
}

//
// Remove List Item
//

const i12ListItem = document.getElementById("manipulating-targets-2-item-4");

console.log(i12ListItem);

i12ListItem.remove();

//
// MODIFYING CLASSES
//

const i13ListItem = document.getElementById("mc-1-list-item-1");

// console.log(i13ListItem);

i13ListItem.classList.add("done");

// console.log(i13ListItem);

// Remove the class

const i14ListItem = document.getElementById("mc-1-list-item-3");

console.log(i14ListItem);

i14ListItem.classList.remove("done");

console.log(i14ListItem);
