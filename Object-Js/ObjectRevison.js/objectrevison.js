function copyObject(obj){
    const c = {}
    Object.keys(obj).forEach((item) => {
           c[item]=  obj[key]
    })
    console.log(c)
}


// copyObject({piano :100, tv :500})



function fac(n){
    let r = 1
    for(let i = 5; i >= 1; i-- ){
          r *= i
    }
    return r
}
function getChecheBaseFactorial(fac){
    const cheche = {}
    return function(...args){
         const number = args[0]   
         if(cheche[number]){
              console.log("its comming from cheche !!!")
              return cheche[number]
         }
         else{
            const result  = fac(number)
            cheche[number] = result
            console.log("its comming from fac fun !!!")
            return result
         }   
    }
}
const r = getChecheBaseFactorial(fac)
r(5)
r(5)
r(10)
r(10)



function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") return obj;

    let copy = Array.isArray(obj) ? [] : {}; // ✅ Handles arrays

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]); // 🔄 Recursive copy
        }
    }
    return copy;
}

// Example with an array
const original = { 
    name: "Nabeela", 
    info: { 
        age: 25, 
        city: "Aligarh", 
        hobbies: ["reading", "coding", "traveling"]  
        // 🔹 Array inside object
    } 
};

const deepCopyObj = deepCopy(original);

// Modifying the copied object
deepCopyObj.info.hobbies[0] = "painting";  // Change array in copy

console.log(original.info.hobbies[0]); // Output: "reading" ✅ (Unchanged)
console.log(deepCopyObj.info.hobbies[0]); // Output: "painting" (Only changed in copy)





/** 
Write a function that flattens a deeply nested object.

const nestedObj = {
    name: "Nabeela",
    details: {
        age: 25,
        address: {
            city: "Aligarh",
            country: "India"
        }
    }
};


✅ Solution:

function flattenObject(obj, prefix = "") {
    let result = {};
    
    for (let key in obj) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            Object.assign(result, flattenObject(obj[key], `${prefix}${key}.`));
        } else {
            result[prefix + key] = obj[key];
        }
    }
    
    return result;
}

console.log(flattenObject(nestedObj));
🔹 Output:

{
  "name": "Nabeela",
  "details.age": 25,
  "details.address.city": "Aligarh",
  "details.address.country": "India"
}

*/




/**7️⃣ Deep Merge Two Objects
❓ Question:
Merge two objects deeply, where nested properties are also merged.


const obj1 = { a: 1, b: { x: 10, y: 20 } };
const obj2 = { b: { y: 50, z: 30 }, c: 3 };
✅ Solution:


function deepMerge(target, source) {
    for (let key in source) {
        if (typeof source[key] === "object" && source[key] !== null) {
            target[key] = deepMerge(target[key] || {}, source[key]);
        } else {
            target[key] = source[key];
        }
    }
    return target;
}

console.log(deepMerge(obj1, obj2));




🔹 Output:

{
  a: 1,
  b: { x: 10, y: 50, z: 30 },
  c: 3
}
 */




/**
 * 4️⃣ Remove Duplicates from an Array of Objects
❓ Question:
Remove duplicate objects from the following array based on id.

const users = [
    { id: 1, name: "Nabeela" },
    { id: 2, name: "Alice" },
    { id: 1, name: "Nabeela" },
    { id: 3, name: "Bob" },
    { id: 2, name: "Alice" }
];
✅ Solution:

const uniqueUsers = Object.values(
    users.reduce((acc, user) => {
        acc[user.id] = user; // Store unique by id
        return acc;
    }, {})
);

console.log(uniqueUsers);



🔹 Output:

[
    { id: 1, name: "Nabeela" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
]
 */



/** 
1️⃣ Deep Clone an Object (Without Using JSON)
Implement a function to deep copy an object, including handling circular references.

✅ Solution:

function deepClone(obj, hash = new WeakMap()) {
    if (obj === null || typeof obj !== "object") return obj;

    // Handle circular references
    if (hash.has(obj)) return hash.get(obj);

    let copy = Array.isArray(obj) ? [] : {};
    hash.set(obj, copy);

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepClone(obj[key], hash);
        }
    }

    return copy;
}

// Example
const obj = { name: "Nabeela", details: { city: "Aligarh" } };
obj.self = obj; // Circular reference

const cloned = deepClone(obj);
console.log(cloned.details.city); // "Aligarh"
console.log(cloned.self === cloned); // true (Ensuring circular reference is handled)
💡 Why is JSON not used?

JSON.stringify() cannot handle functions, undefined, symbols, or circular references.






2️⃣ Flatten a Nested Object
❓ Question:
Convert a deeply nested object into a flat object with dot notation keys.

✅ Solution:

js
Copy
Edit
function flattenObject(obj, prefix = "") {
    let result = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let newKey = prefix ? `${prefix}.${key}` : key;

            if (typeof obj[key] === "object" && obj[key] !== null) {
                Object.assign(result, flattenObject(obj[key], newKey));
            } else {
                result[newKey] = obj[key];
            }
        }
    }

    return result;
}

// Example
const nestedObj = {
    user: {
        name: "Nabeela",
        address: {
            city: "Aligarh",
            zip: 202001
        }
    }
};

console.log(flattenObject(nestedObj));
/*
{
  "user.name": "Nabeela",
  "user.address.city": "Aligarh",
  "user.address.zip": 202001
}


3️⃣ Invert an Object
Write a function that swaps the keys and values of an object.
If multiple keys have the same value, they should be stored in an array.

✅ Solution:

function invertObject(obj) {
    let inverted = {};

    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];

            if (!inverted[value]) {
                inverted[value] = key;
            } else {
                inverted[value] = [].concat(inverted[value], key);
            }
        }
    }

    return inverted;
}

// Example
const obj = { a: 1, b: 2, c: 1, d: 3 };
console.log(invertObject(obj));
/*
{
  1: ["a", "c"],
  2: "b",
  3: "d"
}

💡 Where is this used?
Useful in database indexing where multiple keys map to the same value.



4️⃣ Group Objects by a Property
❓ Question:
Given an array of objects, group them based on a specific property.

✅ Solution:

js
Copy
Edit
function groupBy(arr, key) {
    return arr.reduce((acc, obj) => {
        let prop = obj[key];
        if (!acc[prop]) acc[prop] = [];
        acc[prop].push(obj);
        return acc;
    }, {});
}

// Example
const inventory = [
    { name: "Apple", type: "Fruit" },
    { name: "Carrot", type: "Vegetable" },
    { name: "Banana", type: "Fruit" },
    { name: "Spinach", type: "Vegetable" }
];

console.log(groupBy(inventory, "type"));
/*
{
  Fruit: [{ name: "Apple", type: "Fruit" }, { name: "Banana", type: "Fruit" }],
  Vegetable: [{ name: "Carrot", type: "Vegetable" }, { name: "Spinach", type: "Vegetable" }]
}



💡 Where is this useful?

Used in data analytics & reporting to categorize data efficiently.





5️⃣ Merge Two Objects Deeply
❓ Question:
Write a function that deeply merges two objects.

✅ Solution:

js
Copy
Edit
function deepMerge(obj1, obj2) {
    let result = { ...obj1 };

    for (let key in obj2) {
        if (obj2.hasOwnProperty(key)) {
            if (
                typeof obj2[key] === "object" &&
                obj2[key] !== null &&
                !Array.isArray(obj2[key])
            ) {
                result[key] = deepMerge(obj1[key] || {}, obj2[key]);
            } else {
                result[key] = obj2[key];
            }
        }
    }

    return result;
}

// Example
const obj1 = { user: { name: "Nabeela", age: 25 }, isActive: true };
const obj2 = { user: { city: "Aligarh" }, isActive: false };

console.log(deepMerge(obj1, obj2));
/*
{
  user: { name: "Nabeela", age: 25, city: "Aligarh" },
  isActive: false
}
*/

