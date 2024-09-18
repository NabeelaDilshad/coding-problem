const set = new Set();

set.add(10)
set.add(20)
set.add(30)
set.add([1,2,3,4])
set.add({name:"mack", age :25})
// console.log([...set])  // convert set to array

// if(set.has(10)){
//     console.log(`set h`)
// }

// set.clear()    clear set
// set.size      get size of set

// set.delete(10);

// console.log(set)


function elementSet(s){
     console.log([...s][0]);
}

const first = new Set();
first.add(1); 
elementSet(first) // 1

const second = new Set();
second.add("apple"); 
elementSet(second) // "apple"

const third  = new Set();
third.add(false); 
elementSet(third) // false

console.log("--------------------------------------------------------------------------------")
