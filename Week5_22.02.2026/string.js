// Simple string examples
console.log("Simple string demo");

const a = "Hello";
const b = "world";

// Concatenation
console.log(a + ", " + b + "!");

// Template literal
console.log(`${a} ${b.toUpperCase()}!`);

// Properties and methods
const s = "   javascript "
console.log("Trimmed:", s.trim());
console.log("Length:", s.trim().length);
console.log("Slice:", s.trim().slice(0, 4));
console.log("Includes 'script'?:", s.includes("script"));
console.log("Replace:", s.replace("java", "node"));

// Split
console.log("Chars:", [...s.trim()]);

// Usage: node string.js
