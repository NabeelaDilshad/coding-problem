// shallow copy means copy only top level of elements

const obj1 = {
  name: "mack",
  age: 34,
  address: { pincode: 274402, area: "texas" },
};


const obj2 = obj1;    // ❌ this point to same references
obj1.name = "john"; 

// console.log(obj2)


// make this shallow copy 🥰

const obj3 =  { ... obj1 } 
obj1.name = "john";

console.log(obj3)

const obj4 =  Object.assign({},obj1)
obj1.name = "john";

// lets chnage in deep nested priopoties
//  obj1.address.pincode = 232323;  // 👊 it will change the both the object because shallow copy only copy top level of elements



//  JSON.stringify() // convert object , array to string 
//  JSON.parse()   // revert object , array from string to normal


// deep copy
 const deepobj =  JSON.parse(JSON.stringify(obj1))

const deepstrcutrclone = structuredClone(obj1)
 obj1.address.pincode = 232323;
//  console.log(deepobj);




//   shollow copy and deep copy for array

const arr1 = [1,2,3,4, [10,20,30], undefined, {name:"faizuddin"}];

// const arr2 = arr1;    // ❌ this point to same references
// arr1[0] = 500;
// console.log(arr2)


// showcopy

// const arr2 = [...arr1];
// arr1[0] = 500;
// console.log(arr2);


// const arr3 = arr1.slice()
// arr1[0] = 500;
// console.log(arr3);


// deep copy
const deeparr =  JSON.parse(JSON.stringify(arr1));
//  or new method
// const deeparr =  structuredClone(arr1);
arr1[4][0]= 1000;
// console.log(deeparr)



// issue with json parse and json stringify
const deepobject = {
     name :"faiz",
     age : null,
     address : {},
     userdetail : function(){}
}

const deepc = JSON.parse(JSON.stringify(deepobject));
console.log(deepc)



// Use  ...spread, slice(), or Array.from() for simplicity and performance.
// Avoid JSON.parse(JSON.stringify()) unless a deep copy is needed.
// Use loops (for, map, reduce) only if transformation is required during the copy.



/** `JSON.parse(JSON.stringify(obj))` – Issues with Code Examples
      
1. Functions are removed
*/

const obj = {
  name: "John",
  greet() {
    console.log("Hello");
  }
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { name: "John" }



/**
     2. `undefined` is removed

*/

const obj = {
  name: "John",
  age: undefined
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { name: "John" }





/**
 *.  3 `Date` becomes a string

*/

const obj = {
  createdAt: new Date()
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy.createdAt);
// "2026-06-14T12:00:00.000Z"

console.log(copy.createdAt instanceof Date);
// false
/** Map` is not preserved. */


const obj = {
  map: new Map([
    ["a", 1],
    ["b", 2]
  ])
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { map: {} }


/** `Set` is not preserved */


const obj = {
  set: new Set([1, 2, 3])
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { set: {} }

/** 6 Circular Reference throws error */


const obj = {};

obj.self = obj;

const copy = JSON.parse(JSON.stringify(obj));


// Output:
// TypeError: Converting circular structure to JSON


/**  `NaN` becomes `null`. */


const obj = {
  score: NaN
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { score: null }


/** `Infinity` becomes `null` */

const obj = {
  value: Infinity
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { value: null }
```

---
/**  9. `-Infinity` becomes `null` */


const obj = {
  value: -Infinity
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { value: null }
```


// ## 10. `RegExp` is not preserved

```js
const obj = {
  regex: /hello/gi
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { regex: {} }
```


// ## 11. Class instances lose prototype


class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello ${this.name}`;
  }
}

const obj = new User("John");

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { name: "John" }

console.log(copy instanceof User);
// false



// ## 12. Symbol properties are ignored

```js
const id = Symbol("id");

const obj = {
  name: "John",
  [id]: 123
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// { name: "John" }
```



// ## 13. Non-enumerable properties are ignored

```js
const obj = {};

Object.defineProperty(obj, "secret", {
  value: "hidden",
  enumerable: false
});

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// {}
```



// ## 14. Getter becomes a normal value


const obj = {
  firstName: "John",
  lastName: "Doe",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
};

const copy = JSON.parse(JSON.stringify(obj));

console.log(copy);
// {
//   firstName: "John",
//   lastName: "Doe",
//   fullName: "John Doe"
// }
```

`fullName` is no longer a getter; it becomes a plain property.

---

## Recommended Modern Solution

const copy = structuredClone(obj);
```


/**
 * Benefits:

* Preserves `Date`
* Preserves `Map`
* Preserves `Set`
* Supports circular references
* Performs true deep cloning for most built-in JavaScript types
* Cleaner and safer than `JSON.parse(JSON.stringify(obj))`

*/