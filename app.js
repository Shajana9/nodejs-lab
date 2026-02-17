// Exercise 2 - Write to File
const fs = require("fs");

fs.writeFile(
  "file.txt",
  "Hello World! This was written by Node.js!",
  function (err) {
    if (err) throw err;
    console.log("File saved successfully!");
  },
);
