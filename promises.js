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
                //Approach 1
// promiseFour
//   .then((user) => {
//     console.log(user);
//     return user.username;
//   })
//   .then((un) => {
//     console.log(un);
//   })
//   .catch(function (err) {
//     console.log(err);
//   })
//   .finally(()=>console.log("The promise is either resolve or rejected..."))

                //Approach 2

async function consumePromiseFour(){
    try {
        const response = await promiseFour
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFour()