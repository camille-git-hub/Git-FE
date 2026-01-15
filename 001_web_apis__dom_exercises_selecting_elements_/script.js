// You can work here or download the template
const heading = document.querySelector("h1");
console.log(heading);

//Array of anchor elements inside nav items
const aItems = document.querySelectorAll('.nav-item a');
console.log(aItems);

const button = document.querySelector(".btn");
console.log(button);

//Modify style

const header = document.querySelector("header");
console.log(header);

header.style.backgroundColor = "#b5651d";

heading.style.fontSize = "3rem";

aItems.forEach((item) => {
  item.style.color = "#faf0e6";
});

//Create and add new element
const heroContent = document.querySelector(".hero-content");

const newParagraph = document.createElement("p");
newParagraph.textContent = "Open daily from 7am to 9pm.";

heroContent.appendChild(newParagraph);

