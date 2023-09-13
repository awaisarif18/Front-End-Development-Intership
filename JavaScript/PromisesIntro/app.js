// // THE CALLBACK VERSION
// const fakeRequestCallback = (url, success, failure) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//         if (delay > 4000) {
//             failure('Connection Timeout :(')
//         } else {
//             success(`Here is your fake data from ${url}`)
//         }
//     }, delay)
// }

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })

// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })

// // THE PROMISE VERSION
// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject("Connection Timeout :(");
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   });
// };

// // THE CLEANEST OPTION WITH THEN/CATCH
// // RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise("yelp.com/api/coffee/page1")
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page1)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page2");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page2)");
//     console.log(data);
//     return fakeRequestPromise("yelp.com/api/coffee/page3");
//   })
//   .then((data) => {
//     console.log("IT WORKED!!!!!! (page3)");
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log("OH NO, A REQUEST FAILED!!!");
//     console.log(err);
//   });

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    const rand = Math.random();
    setTimeout(() => {
      if (rand < 0.7) {
        resolve("Your fake data here");
      } else {
        reject("Request Error!");
      }
      resolve();
    }, 1000);
  });
};

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     const rand = Math.random();
//     setTimeout(() => {
//       if (rand < 0.7) {
//         resolve("YOUR FAKE DATA HERE");
//       }
//       reject("Request Error!");
//     }, 1000);
//   });
// };

// fakeRequest("/dogs/1")
//   .then((data) => {
//     console.log("DONE WITH REQUEST!");
//     console.log("data is:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO!", err);
//   });

fakeRequest("/dogs/1")
  .then((data) => {
    console.log("Done with Request");
    console.log("Data is ", data);
  })

  .catch((err) => {
    console.log("Oh no! ", err);
  });

const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("teal", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("aliceblue", 1000))
  .then(() => delayedColorChange("magenta", 1000))
  .then(() => delayedColorChange("cyan", 1000))
  .then(() => delayedColorChange("olive", 1000))
  .then(() => delayedColorChange("wheat", 1000))
  .then(() => delayedColorChange("yellow", 1000));

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("teal", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("aliceblue", 1000))
  .then(() => delayedColorChange("magenta", 1000))
  .then(() => delayedColorChange("cyan", 1000))
  .then(() => delayedColorChange("olive", 1000))
  .then(() => delayedColorChange("wheat", 1000))
  .then(() => delayedColorChange("yellow", 1000));

delayedColorChange("red", 1000)
  .then(() => delayedColorChange("orange", 1000))
  .then(() => delayedColorChange("yellow", 1000))
  .then(() => delayedColorChange("green", 1000))
  .then(() => delayedColorChange("blue", 1000))
  .then(() => delayedColorChange("indigo", 1000))
  .then(() => delayedColorChange("violet", 1000));

// The 4 stages of Programming

// Documentation

// Whether you like it or not, you have to read documentation.

// It's so boring to equip yourself with necessary knowledge.

// I call em tools.

// Now the second part is fun. Coding!!!

// You're rushing and writing code like you own the place.

// Bug Hell

// You're stuck on a small that is making your program.

// Frustration is so high that you want to rip off hairs.

// You may want to throw your laptop but then you remember, it's expensive.

// So better focus on solution

// Last stage, flying into the clouds.

// You finally solved that nasty bug, and your program is working.

// The dopamine rush is so great, that even if someone slaps you, you'll thank him.

// After two minutes of happiness, reality hits.

// There is a list of tasks to do.

// So stay consistent and happy coding!
