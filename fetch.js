const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task is complete");
    resolve(); //resolve and then ko connect krna hai
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise Consumed");
});

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "chai", email: "chai@example.com" });
  }, 1000);
});

promiseThree.then(function (user) {
  console.log(user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "chai", password: "1234" });
    } else {
      reject("ERROR:Something went Wrong");
    }
  }, 1000);
});

async function consumePromiseFour(){
    try {
        const response = await promiseFour
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFour()

fetch("https://api.github.com/users/Tanuj325")
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error)
)