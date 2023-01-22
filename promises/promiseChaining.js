let p1 = new Promise((resolve, reject) => {
  console.log("resolve after 2 sec");
  setTimeout(() => {
    resolve(55);
  }, 2000);
});

p1.then((value) => {
  console.log(value);
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("promise 2");
    }, 2000);
  });
  return p2; //returing the resolve value, it will wait for the return value the return : here in this case 2sec
})
  .then((value) => {
    console.log(value);
    console.log("we are done");
    return 2; //javaScript converts this value to imediate promise and written
  })
  .then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => {
      resolve("done now");
    });
  })
  .then((value) => {
    console.log(value);
  });
