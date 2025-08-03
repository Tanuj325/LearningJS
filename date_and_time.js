let date = new Date()
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());

let myCreatedDate = new Date(2025,6,31)
let newCreatedDate = new Date(2025,6,31,20,55,33)
let anotherWay= new Date("2025-07-31")
console.log(myCreatedDate.toDateString());
console.log(newCreatedDate.toLocaleString());
console.log(anotherWay.toLocaleString());

let myTimeStamp= Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000));

