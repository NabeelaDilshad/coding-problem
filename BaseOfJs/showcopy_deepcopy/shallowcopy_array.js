// there are many way to create shallow copy

// 1. Using the Spread Operator
var original = [1, 2, 3];
var copy = [...original];

// 2. Using Array.slice()
var original = [1, 2, 3];
var copy1 = original.slice();


// 3. Using Array.from()
var original = [1, 2, 3];
var copy = Array.from(original);


// 4. Using concat()
var original = [1, 2, 3];
var copy = [].concat(original);


// 6. Using a for Loop
const original = [1, 2, 3];
const copy = [];
for (let i = 0; i < original.length; i++) {
  copy[i] = original[i];
}


// 7. Using map()
const original = [1, 2, 3];
const copy = original.map(item => item);


// 8. Using filter()
const original = [1, 2, 3];
const copy = original.filter(() => true);


// 9. Using reduce()
const original = [1, 2, 3];
const copy = original.reduce((acc, item) => {
  acc.push(item);
  return acc;
}, []);


// 10. Using structuredClone (For Deep Copy, Not Shallow)
var original = { a: 1, b: { c: 2 } };
var copy = structuredClone(original);
// or
var copy =  JSON.parse(original)