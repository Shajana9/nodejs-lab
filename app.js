// Exercise 6 - Promises
function checkNumber(number) {
  const myPromise = new Promise((resolve, reject) => {
    if (number > 0) {
      resolve("Success! Number is positive: " + number);
    } else {
      reject("Failure! Number is not positive: " + number);
    }
  });
  return myPromise;
}

// Test with positive number
checkNumber(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Test with negative number
checkNumber(-5)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
