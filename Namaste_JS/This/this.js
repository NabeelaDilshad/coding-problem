
/**
 * 1- if the function invoke the using new keyword then 
 * this will point newaly created object
 */


function Person(){
    console.log("inside", this)
}

const p = new Person();
console.log(p)



// /**
//  * 2- if the function invoke by using call, apply , bind 
//  * then this will point to the object pass as argument
//  */

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



// /**
//  * 3- if the function invoke on the object
//  * then this will point to the object it self
//  */



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


// /**
//  * 4- if the function invoke on the window object
//         * if (strict mode){
//         *       point to undefined
//         * } else{
//         *     point to the window object
//         *  }
//  */


function funtionInvocationCheckThis(){
    "use strict"
    console.log(this)
}
funtionInvocationCheckThis()


// /**
//  * 5- arrow function does not have its own this value. Instead, 
//     it captures the this value of the enclosing context at the time it is defined. 
//  */





/** ------------------------------------------------  Question 1 ----------------------------------- */

const user = {
    firstName: 'Piyush!',
    getName() {
      const firstName = 'Jen!';
      return this.firstName;
    }
  };
  console.log(user.getName());   // What is logged?   // Piyush





/** ------------------------------------------------  Question 2 ----------------------------------- */

  function makeUser() {
    return {
      name: "John",
      ref: this
    };
  }
  
  let user1 = makeUser();
  
  console.log('question2 ', user1.ref.name );   // What's the result?  // Undefined
  


/** ------------------------------------------------  Question 3 ----------------------------------- */

  function makeUser1() {
    return {
      name: "John",
      ref: function(){
          return this
      }
    };
  }
  let user2 = makeUser1();
  console.log('question2 update', user2.ref().name); // John



  
/** ------------------------------------------------  Question 4 ----------------------------------- */


  const obj = {
    name : "faiz",
     test(){
        console.log(this.name)
     }
  }

  obj.test()

  

  /** ------------------------------------------------  Question 4 ----------------------------------- */

  const user = {
    name: "Faiz",
    greet() {
        function inner() {   
            console.log(this.name);  // undefined
        }
        inner();
    }
};

user.greet();

// fix by

const user = {
    name: "Faiz",
    greet() {
        const self = this
        function inner() {   
            console.log(self.name); //  Faiz
        }
        inner();
    }
};

user.greet();
   

 /** ------------------------------------------------  Question 5 ----------------------------------- */

 const arrow  = () => {
      console.log(this)
 }

 arrow()


const aobj = {
    name : "faiz",
    arrow : () => {
        console.log(this)
    }
}

aobj.arrow()



/** ------------------------------------------------  Question 6 ----------------------------------- */


const user = {
    name: "Faiz",
    greet() {
        const inner = () => {
            console.log(this.name);  // Faiz , because inside arrow function value of this will resolve lexically 
        };
        inner();
    }
};

user.greet();


/** ------------------------------------------------  Question 7 ----------------------------------- */

const user = {
    name: "Faiz",

    greet: () => {
        console.log(this.name);   // this will point to window object and name is not defined in window object so it will print undefined
    }
};

user.greet();



/** ------------------------------------------------  Question 8 ----------------------------------- */

const user = {
    name: "Faiz",

    greet() {
        setTimeout(function () {
            console.log(this.name); // undefined
        }, 1000);
    }
};

user.greet();



/** ------------------------------------------------  Question 9 ----------------------------------- */

const user = {
    name: "Faiz",

    greet() {
        // yha pr this ki value user object 
        setTimeout(() => {
            console.log(this.name); // Faiz , because inside arrow function value of this will resolve lexically
        }, 1000);
    }
};

user.greet();
