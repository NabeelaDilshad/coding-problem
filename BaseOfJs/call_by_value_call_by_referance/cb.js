//  primtive value always pass by value , (number , string , boolean , null , undefined ,)

let a = 10;
let b = a;
a = 50;
// console.log(b)



console.log(" --------------   pass by value -----------------------------------------")
function fncase(num){
    num = num +10;
    console.log(num) // 20

}
const num = 10;
fncase(num); 
console.log(num) //10



//  non primtive value always pass by references , (object, array, function , Set , Map)

console.log(" --------------   pass by ref for obj-----------------------------------------")

function fnobjcase(personobeject){
    personobeject.name = "updated name"
    console.log(personobeject.name)  // "updated name"

}
const personobeject = { name : 'mack' , age : 35 };
fnobjcase(personobeject);
console.log(personobeject.name) //  "updated name"


console.log(" --------------   pass by ref for array-----------------------------------------")

function fnarray(list){
    list.push(100)
    console.log(list)

}
const list = [50,60,70]
fnarray(list);
console.log(list)



//  object example
const student = { 
    name :"faiz",
    age :25
};
function userupdate(a = {...student}){
      a.age = 30;
      a.pincode  = 274402;
      console.log(a) 
}
userupdate();

console.log(student)