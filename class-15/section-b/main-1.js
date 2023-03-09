//
// document.getElementById("id")
//

const i1ListItem = document.getElementById("selecting-targets-1-target-3");

// console.log(i1ListItem);

i1ListItem.style.transform = "rotate(10deg)";

const i2ListItem = document.getElementById("selecting-targets-1-target-2");

i2ListItem.style.transform = "rotate(-10deg)";

//
// document.getElementsByClassName("class")
//

const i3Wrapper = document.getElementsByClassName("container");

i3Wrapper[0].style.transform = "rotate(-60deg)";

//
// document.querySelector(".class")
//

// selecting-targets-3-target-1

const i4ListItem = document.querySelector(".selecting-targets-3-target-1");

// console.log(i4ListItem);

i4ListItem.style.transform = "scale(1.5)";

//
// document.querySelectorAll(".class")
//

const i5List = document.querySelectorAll(".selecting-targets-1");

// console.log(i5List);

i5List[3].style.transform = "scale(1.5)";

//
// AppendChild
//

const i6List = document.getElementById("manipulating-targets-1");

const i7MyListItem = document.createElement("li");

i7MyListItem.textContent = "Item 1 in the list";

i6List.appendChild(i7MyListItem);

const i8MyListItem = document.createElement("li");

i8MyListItem.textContent = "Item 2 in the list";

i6List.appendChild(i8MyListItem);

const i9MyListItem = document.createElement("li");

i9MyListItem.textContent = "Item 3 in the list";

i6List.prepend(i9MyListItem);

//
// Add Items from an Array
//

const colours = ["purple", "gold", "red", "green", "hotpink", "orange"];

console.log(colours);

const i10MyList = document.getElementById("manipulating-targets-2");

for (let i = 0; i < colours.length; i++) {
  const i11MyTempListItem = document.createElement("li");
  i11MyTempListItem.textContent = colours[i];

  // i10MyList.prepend(i11MyTempListItem);
}

//
// Remove a specific item
//

const i11ItemToRemove = document.getElementById(
  "manipulating-targets-2-item-6"
);

// i11ItemToRemove.style.transform = "scale(2)";

i11ItemToRemove.remove();

//
// ADD A CLASS
//

const i12ItemToChangeClass = document.getElementById("mc-1-list-item-1");

i12ItemToChangeClass.classList.add("done");

i12ItemToChangeClass.classList.remove("done");

// FOR EACH LOOP
colours.forEach((element) => {
  const myItem = document.createElement("li");
  myItem.textContent = element;

  i10MyList.appendChild(myItem);
});
