const numbers = [1, 2, 3, 4, 5];

// map() – transform array
const doubled = numbers.map((num) => num * 2);

// filter() – select values
const evenNumbers = numbers.filter((num) => num % 2 === 0);

// reduce() – combine values
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Original:", numbers);
console.log("Doubled:", doubled);
console.log("Even Numbers:", evenNumbers);
console.log("Sum:", sum);
