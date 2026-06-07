/** 

Easy Interview Answer

    Rest Operator (...) multiple values ko ek array/object mein collect karta hai.

    Spread Operator (...) array/object ke elements ya properties ko expand karta hai.

    Syntax same hai (...), difference sirf context ka hai:

    Function parameter ya destructuring mein → Rest
    Function call, array/object copy/merge mein → Spread.

*/
// ==============================
// REST OPERATOR (...)
// ==============================


// 1. Rest in Function Parameters
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4)); // 10


// 2. Rest in Array Destructuring
const arr = [1, 2, 3, 4, 5];

const [first, second, ...rest] = arr;

console.log("First:", first);   // 1
console.log("Second:", second); // 2
console.log("Rest:", rest);     // [3, 4, 5]


// 3. Rest in Object Destructuring
const user = {
    name: "Rahul",
    age: 25,
    city: "Delhi"
};

const { name, ...remainingDetails } = user;

console.log("Name:", name); // Rahul
console.log("Remaining:", remainingDetails);
// { age: 25, city: 'Delhi' }


// ==============================
// SPREAD OPERATOR (...)
// ==============================

// 4. Spread in Array Copy
const arr1 = [1, 2, 3];

const arr2 = [...arr1];

console.log("Copied Array:", arr2);
// [1, 2, 3]


// 5. Spread in Array Merge
const a = [1, 2];
const b = [3, 4];

const mergedArray = [...a, ...b];

console.log("Merged Array:", mergedArray);
// [1, 2, 3, 4]


// 6. Spread in Function Call
const nums = [10, 20, 30, 40];

console.log("Max Number:", Math.max(...nums));
// 40


// 7. Spread in Object Copy
const originalUser = {
    name: "Aman",
    age: 22
};

const copiedUser = {
    ...originalUser
};

console.log("Copied User:", copiedUser);
// { name: 'Aman', age: 22 }


// 8. Spread in Object Merge
const obj1 = {
    a: 1
};

const obj2 = {
    b: 2
};

const mergedObject = {
    ...obj1,
    ...obj2
};

console.log("Merged Object:", mergedObject);
// { a: 1, b: 2 }


// 9. Updating Object with Spread
const person = {
    name: "John",
    age: 30
};

const updatedPerson = {
    ...person,
    age: 31
};

console.log("Updated Person:", updatedPerson);
// { name: 'John', age: 31 }


// ==============================
// REST vs SPREAD Example
// ==============================

// REST -> Collects values
function testRest(x, y, ...others) {
    console.log("x:", x);
    console.log("y:", y);
    console.log("others:", others);
}

testRest(1, 2, 3, 4, 5);
// x: 1
// y: 2
// others: [3, 4, 5]


// SPREAD -> Expands values
const values = [100, 200, 300];

console.log("Spread Values:");
console.log(...values);
// 100 200 300