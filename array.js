const myArray=[0,1,2,3,4,5,6,true,"Tanuj"]
console.log(myArray);

const newArr=new Array(1,2,3,4)
console.log(newArr);
console.log(newArr.length);


myArray.push(7)
console.log(myArray);

myArray.pop()
console.log(myArray);

myArray.unshift(7)  //add at first
console.log(myArray);

myArray.shift()     //remove from first
console.log(myArray);

console.log(myArray.includes(9));

const myn1= myArray.slice(1,3)      //slice
console.log(myn1);
console.log(myArray);

const myn2 =myArray.splice(1,3)         //splice(remove and return element form the array within given range)
console.log(myn2)
console.log(myArray);

let arr = [1,2,3]
let arr1=[4,5,6]

console.log(arr.concat(arr1));
console.log([...arr,...arr1]);      //spread operator(...)

const anotherArray = [1,2,3,4,5,[6,7,8,[9,10,11,12,[13,14,15]]]]
console.log(anotherArray.flat(Infinity));
