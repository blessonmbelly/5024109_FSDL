// Simple date example
console.log("Simple date demo");

const now = new Date();
console.log("Now:", now.toString());
console.log("ISO:", now.toISOString());
console.log("Locale date:", now.toLocaleDateString());
console.log("Locale time:", now.toLocaleTimeString());

// Short YYYY-MM-DD formatted date
const y = now.getFullYear();
const m = String(now.getMonth() + 1).padStart(2, "0");
const d = String(now.getDate()).padStart(2, "0");
console.log("Formatted:", `${y}-${m}-${d}`);

// Usage: node date.js
