const name="Tanuj "
const rep=50

console.log(name+rep);  //old method to concatenate string 

console.log(`Hello, my name is ${name} and my rep count is ${rep}`);    //Modern method

console.log(name.indexOf('n'));

const gameName = new String("Free Fire")
console.log(gameName[2]);
console.log(gameName.length);
console.log(gameName.toUpperCase());

newString=gameName.substring(0,7);
console.log(newString);

const anotherString=gameName.slice(-8,6)
console.log(anotherString);

const newStr = "    Tanuj    "
console.log(newStr);
console.log(newStr.trim());
console.log(gameName.replace(' ','*'));
console.log(newStr.replaceAll(' ','*'));

const str="Hello-World-I am-using VS-code-for-javascript"

console.log(str.split('-'));
