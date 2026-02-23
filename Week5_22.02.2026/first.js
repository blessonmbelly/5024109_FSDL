console.log("Hi! This is my First JavaScript code!");
try {
  let number = 10;
  console.log(String(number).toUpperCase());
} catch (e) {
  console.error(e);
}
let age = 15;

if (age < 18) {
  throw "You must be 18+";
}