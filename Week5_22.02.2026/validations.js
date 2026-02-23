// Simple validation helpers
console.log("Simple validations demo");

const isNonEmpty = s => typeof s === "string" && s.trim() !== "";
const isEmail = s => typeof s === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isPhone = s => typeof s === "string" && /^\+?\d{7,15}$/.test(s);
const isStrongPassword = p => typeof p === "string" && p.length >= 8 && /[A-Z]/.test(p) && /[0-9]/.test(p);
const isAdult = age => {
  const n = Number(age);
  return Number.isFinite(n) && n >= 18;
};

// Examples
console.log("Email valid:", isEmail("test@example.com"));
console.log("Email invalid:", isEmail("bad@com"));
console.log("Phone valid:", isPhone("+1234567890"));
console.log("Phone invalid:", isPhone("123-456"));
console.log("Strong password:", isStrongPassword("Abc12345"));
console.log("Weak password:", isStrongPassword("password"));
console.log("Non-empty:", isNonEmpty(" hello "));
console.log("Empty:", isNonEmpty("   "));
console.log("Adult (20):", isAdult(20));
console.log("Adult (16):", isAdult(16));

// Usage: node validations.js
