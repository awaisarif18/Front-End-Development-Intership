console.log("Hello World");

let x = 10;
let y = 33;
const name = "Muhammad Awais Arif";
const age = 20;

let z = x + y;

if (z > 40) {
  console.log(z);
} else {
  console.log("Z is less than 40");
}

//Another way to contatenate the strings
console.log(`My name is: ${name}`);
console.log(`My name is ${name} and my age is ${age} and I'm getting old.`);

function multiplication(p1, p2) {
  const m = p1 * p2;
  console.log(m);
}

function toUpper(text) {
  const upperCased = text.toUpperCase();
  console.log(upperCased);
}

//Another way to declare function : The Modern Way
const toLower = (text) => {
  const lowerCased = text.toLowerCase();
  console.log(lowerCased);
};

//Calling functions
multiplication(5, 3);
multiplication(5, 3);
multiplication(5, 3);
toUpper(name);
toLower(name);

//To get to know the data type
console.log(typeof toLower);
const text = document.querySelector(".title");
const userList = document.querySelector(".name-list");
const listInput = document.querySelector(".input-list");
const changeColor = document.querySelector(".addListBtn");

text.style.backgroundColor = "lightBlue";

addListBtn.addEventListener("click", function () {
  //Creating new LI out of thin air
  const newLi = document.createElement("LI");
  const liContent = document.createTextNode(listInput, value);

  //Add the input value inside the new LI
  newLi.appendChild(liContent);

  //Attaching the LI to the user list
  userList.appendChild(newLI);
});

let change = document.getElementById("prodcts");
let view = document.getElementById("image");
view.src = "./lake.jpg";
