/**
 * A Generator is a special type of function in JavaScript that can pause its execution 
 * using yield and resume later from the same point using the next() method.
 */

function* numbers() {
     yield 1;
     yield 2;
     yield 3
}

const n = numbers()
console.log(n.next())
console.log(n.next())
console.log(n.next())



// build own generater function same as above
const arr = [10,20,30]

function generater(arr){
    let index = 0;
    return {
        next : function() {
            if(index < arr.length){
                return { value : arr[index++] , done : false }
            }
            return { value : undefined , done : true }
        }
    }
}

const g = generater(arr)
console.log(g.next()) // { value: 10, done: false }
console.log(g.next()) // { value: 20, done: false }
console.log(g.next()) // { value: 30, done: false }
console.log(g.next()) // { value: undefined, done: true }