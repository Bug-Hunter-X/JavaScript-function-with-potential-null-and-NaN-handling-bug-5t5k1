function foo(a, b) {
  // Handle null, undefined, or NaN values
  a = a === null || a === undefined || isNaN(a) ? 0 : a;
  b = b === null || b === undefined || isNaN(b) ? 0 : b; 
  return a + b; // Returns a + b only if values are numbers
}

console.log(foo(null, 5)); // Output: 5
console.log(foo(5, null)); // Output: 5
console.log(foo(5, 5)); // Output: 10
console.log(foo(undefined, 5)); //Output: 5
console.log(foo(5, NaN)); //Output: 5
console.log(foo(NaN, NaN)); //Output: 0