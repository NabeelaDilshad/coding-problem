console.log("Closures !!")



// global execution 

// a : whole code of func
// r = undefined


// username : "faizuddin"

// b : function code

function a(){
    let username = "faizuddin"
    function b(){
        let username2 = "mack"
        let price = 500
        function c(){
             console.log(username , username2)
        }
        return c;
    }
    return b;
}

var r  =  a()
var s  =   r()
s()

// or
a()()()


// uses of closure

// 1. Module Design Pattern
// The module design pattern helps organize code into self-contained units with private and public members.

// IFFI function , once we create it will execude
const CounterModule = (function () {
  let count = 0;   // Private variable

  return {
    increment: function () {
      count++;
      console.log(`Count: ${count}`);
    },
    decrement: function () {
      count--;
      console.log(`Count: ${count}`);
    },
    getCount: function () {
      return count;
    },
  };
})();

CounterModule.increment(); // Count: 1
CounterModule.increment(); // Count: 2
CounterModule.decrement(); // Count: 1
console.log(CounterModule.getCount()); // 1





//  calculation.add(10).multy(2).minus(10).add(5)    // 15
const calculation = (function(){
    let count = 0;
    return {
         add: function (n){
             count += n;
             return this;
         },
         multy: function (n){
            count *= n;
            return this;
         },
         minus: function(n){
            count -= n;
            return this;
         },
         gettotal : function(){
             return count;
         }
    }
})()

const result = calculation.add(10).multy(2).minus(10).add(5).gettotal() // 15
// console.log(result)





// 2. function curring 
function getA(x){
     return function getB(y){
           return function getC(z){
                 return x+y+z;
           }
     }
}

const finaltotal = getA(10)(5)(2);
console.log(finaltotal)




console.log("````` memorization technique `````````````")
// memorization technique 
// Memoization is an optimization technique to cache results of expensive function calls.

function getProfile(username){  // 'Nabeela'
 // asume this data comming from DB call
    const studentlist = [
        {
            name :"nabeela",
            rollno:21478368743,
            course : "BTECH",
            year : 2020-2025
       },
       {
        name :"mack",
        rollno:21478354343,
        course : "BTECH",
        year : 2020-2025
       },
       {
        name :"john",
        rollno:214432478368743,
        course : "BTECH",
        year : 2020-2025
       }
    ]

    if(username === "Nabeela"){
        return studentlist[0];
    }
    if( username === "mack"){
          return studentlist[1]
    }
    if( username === "john"){
        return studentlist[2]
    }
}


function getProfileCheche(fun){
    let studentcheche = {};
     return function(...args){                  // ['Nabeela']
           const studentname = args[0]         //  'Nabeela'
           if(studentcheche[studentname]){
               console.log(`calling from cheche`)
              return studentcheche[studentname]
           }
           else{
                console.log(`calling from DB`)
                const result =  fun(studentname)    /**  {
                                                            name :"nabeela",
                                                            rollno:21478368743,
                                                            course : "BTECH",
                                                            year : 2020-2025
                                                     }*/
                studentcheche[studentname] = result
                return result;
           }
     }
}

const profilecall = getProfileCheche(getProfile);
profilecall("Nabeela")
profilecall("Nabeela")


profilecall("mack")
profilecall("mack")
profilecall("mack")







console.log("-------------------------- Settimeout --------------------------")

// console.log("start")
// setTimeout(function(){
//      console.log("second")
// },1000)
// console.log("third")


// question  ,1 2,3,4,5,


/** 
        function a(){
        }

        function b(){
        }
        
        b(a)   // a is callback function and b is high order function

*/


function getCounter(){
  for( var i =1; i <= 5 ; i++){
      setTimeout(() => {
         console.log(i);
      }, 1000*i)
  }
}

getCounter();
 

function getCounterLet(){
  for( let i =1; i <= 5 ; i++){
      setTimeout(() => {
         console.log(i);
      }, 1000*i)
  }
}

getCounterLet();



function getCounter(){
  var i
  for( i =1; i <= 5 ; i++){
      function newfunction(index){
          setTimeout(() => {
              console.log(index);
          }, 1000*index)
      }
      newfunction(i);
  }
}

getCounter();