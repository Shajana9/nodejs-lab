// Exercise 3 - Creating a Web Server
const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h1>Hello World from Node.js Server!</h1>");
    res.write("<p>My first web server!</p>");
    res.end();
  })
  .listen(8080);

console.log("Server is running on http://localhost:8080");
