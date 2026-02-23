// Simple array examples
console.log("Simple array demo");

const fruits = ["apple", "banana", "cherry"];
console.log("Initial:", fruits);

// Add and remove
fruits.push("date");
console.log("After push:", fruits);
const last = fruits.pop();
console.log("Popped:", last);
console.log("After pop:", fruits);

// Transformations
const upper = fruits.map(f => f.toUpperCase());
console.log("Uppercase:", upper);

// Query
console.log("Includes banana?", fruits.includes("banana"));
console.log("Starts with b:", fruits.filter(f => f.startsWith("b")));

// Aggregation
const totalLetters = fruits.reduce((sum, f) => sum + f.length, 0);
console.log("Total letters:", totalLetters);

// Iterate
fruits.forEach((f, i) => console.log(`Fruit ${i}: ${f}`));

// Remove an item by value
const idx = fruits.indexOf("cherry");
if (idx !== -1) {
  fruits.splice(idx, 1);
  console.log("After removing cherry:", fruits);
}

// Small usage note
// Run: node arrays.js
