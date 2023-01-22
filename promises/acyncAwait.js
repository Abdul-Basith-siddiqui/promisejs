function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log(`Making Resquest to ${location}`);
    if (location === "Google") {
      resolve("Google says hi");
    } else {
      reject("we can only talk to Google");
    }
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra Information + ${response}`);
  });
}

/*

makeRequest("facebook") // this is the way to call a promise
  .then((response) => {
    // .then is used when our promise is resolved, whatever we have written in resolve(), we are sending to prcessRequest function , which returns a promise
    console.log("Response Recieved");
    return processRequest(response); // we are returning the promise
  })
  .then((processResponse) => {
    // .then is used when our promise is resolved
    console.log(processResponse);
  })
  .catch((err) => {
    // .catch is used when our promise is rejected,it will catch when ever promise is rejected
    console.log(err);
  });

  */

//async await

async function doWork() {
  //`async` keyword is used to define a function that returns a promise
  try {
    const response = await makeRequest("facebook"); //`await` keyword is used to wait for a promise to be resolved
    console.log("response recieved");
    const processRequest = await processRequest(response); //`await` keyword is used to wait for a promise to be resolved
    console.log(processRequest);
  } catch (err) {
    //`catch` keyword is used to catch the error , whatever the reject value is there is coming to err and we are consoling it
    console.log(err);
  }
}

doWork(); // this is the way to call a promise
