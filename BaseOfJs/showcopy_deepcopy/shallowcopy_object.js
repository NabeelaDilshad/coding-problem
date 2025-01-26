// there are many way to create shallow copy


// 1. Using the Spread Operator
var original = { a: 1, b: 2 };
var copy = { ...original };


// 2. Using Object.assign()
var original = { a: 1, b: 2 };
var copy = Object.assign({}, original);


// 4. Using a for...in Loop
var original = { a: 1, b: 2 };
var copy = {};
for (let key in original) {
  if (original.hasOwnProperty(key)) {
    copy[key] = original[key];
  }
}


// 6. Using Object.fromEntries()
var original = { a: 1, b: 2 };
var copy = Object.fromEntries(Object.entries(original));

// 7. Using a Manual Loop
var original = { a: 1, b: 2 };
var copy = {};
for (var key of Object.keys(original)) {
  copy[key] = original[key];
}

// 8. Using structuredClone (For Deep Copy, Not Shallow)
var original = { a: 1, b: { c: 2 } };
var copy = structuredClone(original);
// or
var copy =  JSON.parse(original)
