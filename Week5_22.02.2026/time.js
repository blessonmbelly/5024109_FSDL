// Simple time example
console.log("Simple time demo");

const now = new Date();
const hh = String(now.getHours()).padStart(2, "0");
const mm = String(now.getMinutes()).padStart(2, "0");
const ss = String(now.getSeconds()).padStart(2, "0");
console.log("Current time:", `${hh}:${mm}:${ss}`);
console.log("ISO time:", now.toISOString());
console.log("Process uptime (s):", process.uptime().toFixed(2));

// Usage: node time.js
