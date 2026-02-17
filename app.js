// Exercise 1 - Read File
const fs = require("fs");

fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log("File contents:");
  console.log(data);
});
