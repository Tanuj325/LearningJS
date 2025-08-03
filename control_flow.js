//              ********************falsy values********************

/* The code snippet `false, 0, -0, 0n, "", null, undefined, NaN;` is listing out the falsy values in
JavaScript. These values are considered falsy when used in a boolean context, meaning they evaluate
to `false`. */

// false, 0, -0, 0n, "", null, undefined, NaN

//              ********************truthy values********************

/* The comment `// "0", "false", " ", [], {}, function () {}, true` is listing out the truthy values in
JavaScript. These values are considered truthy when used in a boolean context, meaning they evaluate
to `true`. */

// "0", "false", " ", [], {}, function () {}, true

//Nullish coalescing operator (??):

// let val1;

// val1 = 5 ?? 10;
// val1 = null ?? 10;
// val1 = undefined ?? 10;
// val1 = null ?? 10 ?? 20;

// console.log(val1);

// --------------------------Loops--------------------------

//for loop
// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

//while loop
// i=0;
// while (i<10) {
//     console.log("Hello "+i);
//     i++
// }

//Do While loop
// i = 0;
// do {
//   console.log(`value of i is ${i}`);
//   i++;
// } while (i < 10);

// ------------Array specific loop------------

// const arr = [1, 2, 3, 4, 5];

//for of loop

// for (const i of arr) {
//     console.log(i);
// }

// //maps
// const map = new Map();
// map.set("IN", "India");
// map.set("FR", "France");
// map.set("UK", "United Kingdom");

// // console.log(map);

// for (const [key, value] of map) {
//   console.log(key, ":-", value);
// }
//NOTE:- forof loop can not be used to iterate the objects

//for in loop

// const myObject = {
//   js: "javascript",
//   cpp: "C++",
//   rb: "Ruby",
// };

// for (const key in myObject) {
//     console.log(key," :- ",myObject[key]);
// }

//for each loop

// const coding=["js","ruby","java","cpp","c","python"]

// coding.forEach( function (item) {
//     console.log(item);

// })

// coding.forEach( (item) => {
//     console.log(item);

// })

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr);

// })

// const myCoding = [
//     {
//         languageName:"Javascript",
//         languageFileName:"js"
//     },
//     {
//         languageName:"Java",
//         languageFileName:"java"
//     },
//     {
//         languageName:"Python",
//         languageFileName:"py"
//     },
// ]

// myCoding.forEach( (item) => {
//     console.log(item.languageName," and ",item.languageFileName);

// })
// ]
// ---------------------------filter---------------------------

// const myNums = [1,2,3,4,5,6,7,8,9,10]
// // for each loop does not return value so we use filter which return values
// const newNums = myNums.filter( (num) => {
//     return num>5

// })
// console.log(newNums);

// ---------------------------map---------------------------

// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.map((num) => num + 10);
// console.log(newNums);

