const myNums=[1,2,3]
// const myTotal= myNums.reduce( function (acc,currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc+currval
    
// },0)

// console.log(myTotal);

// const myTotal =myNums.reduce( (acc,cv) => acc+cv , 0)
// console.log(myTotal);

const shoppingCart = [
    {
        itemName:"shoes",
        price:1999
    },
    
    {
        itemName:"shirt",
        price:1599
    },
    
    {
        itemName:"jeans",
        price:2999
    },
    
]

const total = shoppingCart.reduce( (acc,cv) => acc+cv.price , 0)
console.log(total);
