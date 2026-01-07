// Function Declaration
function greet(name) {
  return `Hello, ${name}`;
}

// Function Expression
const add = function (a, b) {
  return a + b;
};

// Arrow Function
const multiply = (a, b) => a * b;

// Scope Example
let globalVar = "I am global";

function scopeTest() {
  let localVar = "I am local";
  console.log(globalVar);
  console.log(localVar);
}

console.log(greet("Lokesh"));
console.log(add(2, 3));
console.log(multiply(4, 5));
scopeTest();
