// Exercise 4 - Making an HTTP Request
const https = require("https");

console.log("Fetching data from API...");

https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";

    // Collect data chunks
    resp.on("data", (chunk) => {
      data += chunk;
    });

    // When all data received
    resp.on("end", () => {
      console.log("Data received:");
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });
