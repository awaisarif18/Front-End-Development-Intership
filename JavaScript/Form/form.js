const form = document.getElementById("my-form");
let i = 0;
const arr = [];
// const newLine = " \n ";

function onFormSubmit(event) {
  event.preventDefault();
  const data = new FormData(event.target);
  // const firstName = data.get("First Name");
  // const lastName = data.get("Last Name");
  // const email = data.get("Email Address");
  // const phoneNumber = data.get("Phone Number");

  // arr.push(`User: ${i}`);
  const formDataObj = {};
  data.forEach((value, key) => (formDataObj[key] = value));
  arr.push(formDataObj);
  showBoxs();

  // i++;
}

form.addEventListener("submit", onFormSubmit);

const showBoxs = () => {
  const element = document.getElementById("data");
  element?.remove();

  const userData = document.createElement("div");
  userData.id = "data";
  userData.className = "data-container";

  arr.forEach((obj) => {
    let box = document.createElement("div");
    // const box = document.createElement("div");
    // box.removeChild("p");
    const firstName = document.createElement("p");
    const lastName = document.createElement("p");
    const phoneNumber = document.createElement("p");
    const email = document.createElement("p");

    firstName.innerHTML = `First Name : ${obj.firstName}`;
    lastName.innerHTML = `Last Name : ${obj.lastName}`;
    phoneNumber.innerHTML = `Phone No : ${obj.phoneNumber}`;

    email.innerHTML = `Email : ${obj.email}`;

    box.appendChild(firstName);
    box.appendChild(lastName);
    box.appendChild(phoneNumber);
    box.appendChild(email);
    // box.appendChild(box);
    // entry.innerHTML = ` ${key}: ${value}`; //I can use this or simply print the array index at each loop trip
    box.style.padding = "2px";
    userData.appendChild(box);
    box.style.width = "90%";
    box.style.height = "17vh";
    box.style.margin = "15px auto";
    box.style.borderRadius = "5px";
    box.style.backgroundColor = "aliceblue";
    box.style.boxShadow = "2px 2px 2px 2px aliceblue";
    box.style.animation = "formData 0.7s ease forwards 0s";
    box.style.textAlign = "center";
  });

  document.getElementById("main").appendChild(userData);
};
showBoxs();

console.log(arr);

// box.innerHTML = `${arr}`;

// box.id = "dataBox";
//box.innerHTML = `User ${i}: ${firstName} ${lastName} ${email}  ${phoneNumber}`;

//Styling
