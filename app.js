// Exercise 7 - Async/Await
function waitForData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data loaded successfully!");
    }, 2000);
  });
}

async function myFunction() {
  console.log("Starting...");

  try {
    const result = await waitForData();
    console.log(result);
    console.log("Done!");
  } catch (error) {
    console.log("Error:", error);
  }
}

myFunction();
