// Demonstrating !!, ||, ??, ==, === operators in JavaScript

// 1. !! (Double Negation) - Converts value to boolean
console.log(!!1);        // true
console.log(!!0);        // false
console.log(!!"hello");  // true  
console.log(!!null);     // false

// 2. || (Logical OR) - Returns first truthy value or last falsy value
console.log(false || "Hello");    // "Hello"
console.log(0 || null || "Hi");   // "Hi"
let name = "" || "Default Name";
console.log(name);  // "Default Name"

// 3. ?? (Nullish Coalescing) - Returns right-hand value only if left-hand is null or undefined
console.log(null ?? "Default Value"); // "Default Value"
console.log(undefined ?? "Fallback"); // "Fallback"
console.log(0 ?? 100); // 0 (not overridden like in ||)

// 4. == (Loose Equality) - Checks equality without type check
console.log(5 == "5");   // true (type coercion happens)
console.log(0 == false); // true
console.log(null == undefined); // true

// 5. === (Strict Equality) - Checks equality with type check
console.log(5 === "5");  // false (different types)
console.log(0 === false); // false
console.log(null === undefined); // false

// Comparison of || and ??
console.log(false || "Default"); // "Default"
console.log(false ?? "Default"); // false
console.log(0 || 100); // 100
console.log(0 ?? 100); // 0

// optinal chaning operater

/*
🧠 In short:
    Expression	          Meaning	                                         Result Type
      !value	           Convert to boolean and invert	                        Boolean (negated)
      !!value	           Convert to boolean (keep original truthiness)	     Boolean

**/



// object and array k case m compariosion hmessh reference se hoti h 

// yha every object and array pointing to diff diff ref in memory 
// console.log({} == {})  // false
// console.log({} === {})  // false
// console.log([] == [])   // false
// console.log([] === [])    // false



// note -  but in the case of primitive value like string , number , boolean  always compare with thier values

// let a = 5
// let b = 5
// console.log(a == b )  // true



//   users.push(nuser)                array inside propties has been changed so refrences will same
//    users = [...users , nuser]      here assign again so refences will changes 


//  obj[mobile] = mobilenumber                     inside object propties has been changed so refrences will same
// obj =  { ...obj , [mobile] : mobilenumber }    here assign again so refences will changes 