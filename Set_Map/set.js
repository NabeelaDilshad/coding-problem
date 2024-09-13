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


//  primtive value always pass by value ,   object and array pass by refrence

let a = 10;
let b = a;
a = 50;
// console.log(b)


// const obj1 = { name :'mack' , age :35 , address : { pincode : 202001}};
// const obj2 = {...obj1};
// obj1.address.pincode = 47864874;
// console.log(obj2.address.pincode)



console.log(" --------------   pass by value -----------------------------------------")
function fncase(num){
    num = num +10;
    console.log(num)

}
const num = 10;
fncase(num);
console.log(num)




console.log(" --------------   pass by ref for obj-----------------------------------------")

function fnobjcase(personobeject){
    personobeject.name = "updated name"
    console.log(personobeject.name)

}
const personobeject = { name : 'mack' , age : 35 };
fnobjcase(personobeject);
console.log(personobeject.name)


console.log(" --------------   pass by ref for array-----------------------------------------")

function fnarray(list){
    list.push(100)
    console.log(list)

}
const list = [50,60,70]
fnarray(list);
console.log(list)