let text = "Apple, Banana, Kiwi, Mango. These are great fruits. Yummy!";
let part = text.slice(9, 22);
console.log(part);

let endPart = text.substr(4, 7);
console.log(endPart);
// let x = text.replace("Kiwi", "Egg Plant");

// console.log(text);
// console.log(x);

let sentence =
  "I'm yawning in the office. How can i stop yawning. The yawns are too much";

let parts = sentence.replaceAll("yawn", "shout"); //It'll select text whether that's part of a word.

console.log(parts);

console.log(text.indexOf("these"));

console.log(text.match("fruits"));

console.log(text.includes("yummy")); //Case Sensitive

console.log(text.substr(22, 12)); //It is deprecated

console.log(text.replace("fruits", "Veges"));

console.log(text.trim()); //Remove whitespaces from left and right, not in between

console.log(text.charCodeAt(23));

console.log(text.charAt(23));

console.log(text.split(",")); //Split on commas

console.log(text.split(" ")); //Split on whitespaces

console.log(text.split("")); // Split on characters when nothing is mentioned

console.log(text.valueOf());

const points = [40, 100, 1, 5, 25, 10];

console.log(points);

//The Fisher Yates Method
for (let i = points.length - 1; i > 0; i--) {
  let j = Math.floor(Math.random() * (i + 1));
  let k = points[i];
  points[i] = points[j];
  points[j] = k;
}

console.log(points);

// console.log(text.)

// console.log(text.)

// console.log(text.)

// console.log(text.)
// const a = "réservé"; // With accents, lowercase
// const b = "RESERVE";

// const items = ["réservé", "Premier", "Cliché", "communiqué", "café", "Adieu"];
// items.sort((a, b) => a.localeCompare(b, "fr", { ignorePunctuation: true }));
//  ['Adieu', 'café', 'Cliché', 'communiqué', 'Premier', 'réservé']

//Array flatMap method, and loop approach for fast processing

// const arr = [1, 2, 3, 4];

// arr.flatMap((x) => [x, x * 2]);
// // is equivalent to
// const n = arr.length;
// const acc = new Array(n * 2);
// for (let i = 0; i < n; i++) {
//   const x = arr[i];
//   acc[i * 2] = x;
//   acc[i * 2 + 1] = x * 2;
// }
// [1, 2, 2, 4, 3, 6, 4, 8]
