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
