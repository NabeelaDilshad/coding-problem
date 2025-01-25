
/**
 * 1- if the function invoke the using new keyword then 
 * this will point newaly created object
 */


function Person(){
    console.log("inside", this)
}

const p = new Person();
console.log(p)



/**
 * 2- if the function invoke by using call, apply , bind 
 * then this will point to the object pass as argument
 */

var name = "mack";
var age = 25;
function getUser(){
    console.log(`your name is ${this.name} and age is ${this.age}`)
}

const obj = {
     name :"faiz",
     age :24
}
getUser()
getUser.call(obj)
getUser.apply(obj)



/**
 * 3- if the function invoke on the object
 * then this will point to the object it self
 */



const Univercity = {
       name :'AKTU',
       branch:'lucknow',
       totalcollegs: 400,
       getdetail: function (){
             // this refer to object which is calling the function
            return `name of univercity is ${this.name} and branch is ${this.branch}`
       }
}

const ak = Univercity.getdetail();
console.log(ak)


/**
 * 4- if the function invoke on the window object
        * if (strict mode){
        *       point to undefined
        * } else{
        *     point to the window object
        *  }
 */


function funtionInvocationCheckThis(){
    "use strict"
    console.log(this)
}
funtionInvocationCheckThis()





/**
 *  -----   Question 1    ---------
 */

const user = {
    firstName: 'Piyush!',
    getName() {
      const firstName = 'Jen!';
      return this.firstName;
    }
  };
  console.log(user.getName());   // What is logged?





/**
 *  -----   Question 2    ---------
 */

  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user1 = makeUser();
  
  console.log('question2 ', user1.ref.name );   // What's the result?
  


  // what need to do for print john 
  function makeUser1() {
    return {
      name: "John",
      ref: function(){
          return this
      }
    };
  }
  let user2 = makeUser1();
  console.log('question2 update', user2.ref().name);



  

  /**
 *  -----   Question 3    ---------
 */