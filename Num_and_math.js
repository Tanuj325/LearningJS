const score = 400
console.log(score);

const balance = new Number(1000)
console.log(balance);

console.log(balance.toString().length);

console.log(balance.toFixed(2));

const hundreds = 10000000000
console.log(hundreds.toLocaleString('en-IN'));

console.log(Math.abs(-4));
console.log(Math.round(8.6));
console.log(Math.sqrt(100));
console.log(Math.pow(10,2));
console.log(Math.max(2,5,8,9,5,4,8,6,9,5,6));
console.log(Math.min(2,5,8,9,5,4,8,6,9,5,6));

console.log(Math.random()); // always between 0 and 1

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1)+min));
