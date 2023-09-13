const counterDiv = document.querySelector("#counterDiv");
const decreaseButton = document.querySelector("#decreaseButton");
const resetButton = document.querySelector("#resetButton");
const increaseButton = document.querySelector("#increaseButton");

let counter = 0;

const count = document.createElement("h1");
count.className = "count";
counterDiv.appendChild(count);
count.textContent = ` ${counter} `;

function increaseCounter() {
  counter++;
  count.textContent = ` ${counter} `;
}

function resetCounter() {
  counter = 0;
  count.textContent = ` ${counter} `;
}

function decreaseCounter() {
  if (counter == 0) {
    alert(`Counter cannot be a negative value`);
    return;
  } else {
    counter--;
    count.textContent = ` ${counter} `;
  }
}

increaseButton.addEventListener("click", increaseCounter);
resetButton.addEventListener("click", resetCounter);
decreaseButton.addEventListener("click", decreaseCounter);
