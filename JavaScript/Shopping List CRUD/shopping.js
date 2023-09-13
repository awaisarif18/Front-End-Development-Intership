const userInput = document.querySelector("#userInput");
const submitButton = document.querySelector("#submitButton");
const updateButton = document.querySelector("#updateButton");
const form = document.querySelector("#form");
const list = document.querySelector("#list");
const arr = [];

let index = 0;

const deletebtn = `<i class="fa-solid fa-trash removeButton"  style="color: #cf1717;"></i>`;
const editbtn = `<i id="editButton" class="fa-regular fa-pen-to-square"></i>`;

submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  addItem();
});

function addItem() {
  const grocery = userInput.value;
  const dataObj = {
    task: grocery,
    del: deletebtn,
    edit: editbtn,
    position: index,
  };
  console.log(dataObj);
  if (grocery.trim() !== "") {
    arr.push(dataObj);
    if (list.hasChildNodes()) {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    }

    index++;

    arr.forEach((obj) => {
      index = 0;
      const groc = document.createElement("div");
      const item = document.createElement("div");
      const buttonSpan = document.createElement("div");

      list.appendChild(groc);
      groc.appendChild(item);
      groc.appendChild(buttonSpan);

      item.innerHTML = `${obj.task}`;
      buttonSpan.innerHTML = `${obj.del} ${obj.edit}`;
      groc.className = "grocParent";
      item.className = "listItem";
      item.id = "listItems";

      const removeButton = groc.querySelector(".removeButton");

      removeButton.style.border = "none";

      removeButton.addEventListener("click", function () {
        arr.splice(obj.position, 1);
        list.removeChild(groc);
      });

      const editButton = groc.querySelector("#editButton");

      let editFunc = () => {
        submitButton.textContent = "Update";

        userInput.value = obj.task;

        // const groceryInput = prompt("Enter new grocery Name:");
        if (userInput.value !== null) {
          arr.splice(obj.position, 1);
          list.removeChild(groc);

          obj.task = userInput.value;

          item.innerHTML = `${obj.task}`;
          buttonSpan.innerHTML = `${obj.del} ${obj.edit}`;
        }
      };

      editButton.addEventListener("click", editFunc);
    });

    submitButton.textContent = "Submit";

    userInput.value = "";

    if (list.hasChildNodes()) {
      const deleteAll = document.createElement("button");
      list.appendChild(deleteAll);
      deleteAll.textContent = "Delete All Items";
      deleteAll.className = "delAll";

      deleteAll.addEventListener("click", () => {
        while (list.firstChild) {
          list.removeChild(list.firstChild);
        }
        arr.splice(0, arr.length);
      });
    }

    index++;
  } else {
    alert("Empty data! Please fill all fields");
  }
}

console.log(arr);
