// Simple error-handling example
console.log("Simple error-handling demo");

function parseNumber(input) {
  const n = Number(input);
  if (Number.isNaN(n)) {
    throw new TypeError(`Invalid number: ${input}`);
  }
  return n;
}

try {
  // Accept an optional CLI argument, default to "42"
  const userInput = process.argv[2] ?? "42";
  const value = parseNumber(userInput);
  console.log("Parsed number:", value);
} catch (err) {
  console.error("Error:", err.message);
} finally {
  console.log("Done.");
}

// Usage examples:
// node errorhandling.js       -> uses default 42
// node errorhandling.js 10    -> prints 10
// node errorhandling.js abc   -> catches and reports error
