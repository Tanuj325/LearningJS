// singleton
//Object.create
//const jsUser = new Object()

//object literals

// const mySym = Symbol("key1");

// const jsUser = {
//   name: "Tanuj",
//   [mySym]: "myKey1",
//   age: 20,
//   loc: "Meerut",
// };

// console.log(jsUser.name);
// console.log(jsUser["name"]); //Better way to access
// console.log(jsUser[mySym]);

// jsUser.email = "tst@gmail.com";
// console.log(jsUser);

// // Object.freeze(jsUser)   //now we can not change values
// // jsUser.email="tanujsinghthakur9999@gmail.com"
// // console.log(jsUser);//no change in email

// jsUser.greeting = function () {
//   console.log("Hello JS USer");
// };
// jsUser.greeting1 = function () {
//   console.log(`Hello JS USer, ${this.name}`);
// };

// console.log(jsUser.greeting());
// console.log(jsUser.greeting1());

// const regularUser = {
//   email: "tst@gmail.com",
//   name: {
//     userfullname: {
//       firstname: "Tanuj",
//       lastname: "Chauhan",
//     },
//   },
// };

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.hasOwnProperty('email'));
// console.log(Object.keys(regularUser));
// console.log(Object.values(regularUser));
// console.log(Object.entries(regularUser));

// const obj1 = { 1: "a", 2: "b" };
// const obj2 = { 3: "c", 4: "d" };
// // const obj3=Object.assign({},obj1,obj2)
// const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);



// const course = {
//   name: "JS in Hindi",
//   price: "999",
//   courseInstructor: "Tanuj",
// };

// // console.log(course.courseInstructor);

// const { courseInstructor: Instructor} = course;
// // console.log(courseInstructor); //agr courseInstructor ko value na denge instructor toh ye chlega vrna nahi
// console.log(Instructor);

// //          //APIs inn json file in object format
// // {
// //     "name":"Tanuj",
// //     "coursename":"JS in Hindi",
// //     "price":"free"
// // }

// // [
// //     {},
// //     {},
// //     {}
// // ]