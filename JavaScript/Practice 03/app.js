// const arr1 = [12, 23, 45, 33, 72, 11, 2, 25, 122];
// const arr2 = [
//   [1, 2],
//   [3, 4],
//   [5, [6, 7]],
// ];

// console.log(arr1);

// // const isBelowThreshold = (currentValue) => currentValue < 100;

// // console.log(arr1.every(isBelowThreshold));

// // console.log(arr1.fill(0, 2, 5));

// const even = arr1.filter((element) => element % 2 == 0 % element > 1);
// const greatFirst = arr1.find((elem) => elem > 70); //It give the first element in the array that satisfies the condition and leaves the rest of the array unchecked
// const greatLast = arr1.findLast((elem) => elem > 70); //Reverse Direction to find the element that meets the condition
// console.log(even);

// console.log(greatFirst);
// console.log(greatLast);
// console.log(arr2.flat(2)); //Default value is 1, You can specify the depth to flatten the array elements. You can also use 'Infinity' to flatten the deep nested array.

// // const arr = new Array(3);
// // for (let i = 0; i < arr.length; i++) {
// //   arr[i] = new Array(4).fill(1); // Creating an array of size 4 and filled of 1
// // }

// // console.log(arr);
// // arr[0][0] = 10;
// // console.log(arr[0][0]); // 10
// // console.log(arr[1][0]); // 1
// // console.log(arr[2][0]); // 1

// // console.log(arr[0]);

// const arrayLike = {
//   length: 3,
//   0: [1, 2],
//   // Array-like objects aren't flattened
//   1: { length: 2, 0: 3, 1: 4 },
//   2: 5,
//   3: 3, // ignored by flat() since length is 3
// };
// console.log(Array.prototype.flat.call(arrayLike));
// // [ 1, 2, { '0': 3, '1': 4, length: 2 }, 5 ]

const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

function threeFunctions(a, b) {
  return [a + b, a * b, a / b];
}

const [
  sum = "No sum",
  multiply = "No multiplication",
  division = " No division",
] = threeFunctions(2, 3);

console.log(sum);
console.log(multiply);
console.log(division);

const personOne = {
  name: "Asfand",
  age: 30,
  address: {
    city: "Okara",
    state: "broke",
  },
};

const personTwo = {
  name: "Huzaifa",
  age: 20,

  address: {
    city: "Okara",
    state: "bekhari",
  },
};

const bothPersons = { ...personOne, ...personTwo };

console.log(bothPersons);

function printUser({ name, age, address }) {
  console.log(
    `My name is ${name} and I'm ${age} years old. Currently I'm ${address.state} .`
  );
}

printUser(personOne);

const {
  name: firstName,
  address: { city = "Lahore" },
} = personTwo;

console.log(city);
console.log(firstName);

const delayedColorChange = (newColor, delay, doNext) => {
  setTimeout(() => {
    document.body.style.backgroundColor = newColor;
    doNext && doNext();
  }, delay);
};

delayedColorChange("aliceblue", 1500, () => {
  delayedColorChange("blue", 1000, () => {
    delayedColorChange("yellow", 1000, () => {
      delayedColorChange("teal", 1000, () => {
        delayedColorChange("orange", 1000, () => {
          delayedColorChange("red", 1000, () => {});
        });
      });
    });
  });
});

const fireButton = document.querySelector("#fireButton");
