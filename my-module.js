// my-module.js - Custom Module
function myFunction() {
  return "Hello from my custom module!";
}

function addNumbers(a, b) {
  return a + b;
}

function greetUser(name) {
  return `Welcome, ${name}! This is a Node.js module.`;
}

// Export the functions
module.exports = {
  myFunction,
  addNumbers,
  greetUser,
};
