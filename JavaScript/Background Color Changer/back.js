const colorContainer = document.querySelector("#colorContainer");
const colorButton = document.querySelector("#colorButton");
const headingSpan = document.querySelector("#headingSpan");
const colorSpan = document.querySelector("#colorSpan");

let charArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

let colorArr = [];

let allColors = [];

colorButton.addEventListener("click", changeColor);

function changeColor() {
  for (let index = 0; index < 6; index++) {
    let a = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
    colorArr[index] = charArr[a];
  }

  let colorPick = colorArr.join("");
  allColors.push(colorPick);

  console.log(colorPick);
  console.log(allColors);

  colorContainer.style.backgroundColor = `#${colorPick}`;
  colorSpan.textContent = `#${colorPick}`;
}
