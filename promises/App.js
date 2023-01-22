//promise object have 2 properties state and the result
//state will give  promise is fulfilled = resolved or rejected
//result -initially undefined, if fulfilled then it will have the value
//promise is used for parallel executions of many operations
//promise is promise of code execution
//what ever the code is written inside the promise will be executed in background

//video-1

// let promise = new Promise((resolve, reject) => {  //resolve and reject are callback functions which will be called when the promise is fulfilled or rejected
//   console.log("promise");
//   resolve(55);
// });

// console.log("1");

// setTimeout(() => {
//   console.log("2");
// }, 2000);

// console.log("3");
// console.log(promise);

//---------------------------------------------

//video-2

let p1 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    // console.log("promise is resolved");
    resolve(true);
  }, 2000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("promise is pending");
  setTimeout(() => {
    // console.log("promise is rejected");

    reject(new Error("i am an error")); // this is the way to throw an error
  }, 2000);
});
// both the promises run parallely
// console.log(p1, p2);

//---------------------------------------------

p1.then((value) => {
  // .then is use when our promise is resolved, whatever we have written in resolve(), we are taking that value and printing it
  console.log(value);
});
//0/p - true
//---------------------------------------------
p1.then(alert); //this will give the same result as above in alert box

//---------------------------------------------
p2.catch((error) => {
  // .catch is used when our promise is rejected, whatever we have written in reject(), we are taking that value and printing it
  console.log(error);
});
//Error: i am an error , at App.js:38:12

//---------------------------------------------

//we can also handle resolve and reject in the same .then() method and at the end of the of previous metheod , pass anothe method which will handle the error

p2.then(
  (value) => {
    //handle resolve
    console.log(value);
  },
  (error) => {
    //handle reject
    console.log(error);
  }
);

//---------------------------------------------
