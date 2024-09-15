// shallow copy means copy only top level of elements

const obj1 = {
  name: "mack",
  age: 34,
  address: { pincode: 274402, area: "texas" },
};


// const obj2 = obj1;    // ❌ this point to same references
// obj1.name = "john"; 

// make this shallow copy 🥰

const obj3 =  { ... obj1 } 
obj1.name = "john";


const obj4 =  Object.assign({},obj1)
obj1.name = "john";

// lets chnage in deep nested priopoties
//  obj1.address.pincode = 232323;  // 👊 it will change the both the object because shallow copy only copy top level of elements



//  JSON.stringify() // convert object , array to string 
//  JSON.parse()   // revert object , array from string to normal


// deep copy
 const deepobj =  JSON.parse(JSON.stringify(obj1))
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
console.log(deeparr)

