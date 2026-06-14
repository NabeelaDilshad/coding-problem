// console.log("Call, Apply and Bind polyfill");

// call, apply and bind are used to change the context of a function. 
// They are used to call a function with a specific this value and arguments.

const obj = {
    name : "faiz"
}

const obj1 = {
    name : "nabeela"
}

function test(city , country){
  console.log("hi", this.name, "you are from ", city , "/", country) 
}

// test.call(obj, "kushiangar","india");
// test.call(obj1, "aligarh","india");

// test.apply(obj, ["kushiangar","india"]);
// test.apply(obj1, ["aligarh","india"]);

const r = test.bind(obj, "kushiangar","india");
r()



//  Polyfill for call, apply and bind

const ooooj = { name: "Faiz", age: 25 };

function greet(greeting, mobile) {
  console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old. My mobile number is ${mobile}.`);
}

Function.prototype.myCall = function(context , ...args) {
  //  console.log("args", args);
    context = context || window;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    // console.log("context", context);
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
}

greet.myCall(ooooj, "Hello", 6456456);




Function.prototype.myApply = function(context , args = []){
        context = context || window
        const symbol = Symbol();
        context[symbol] = this 
        const result = context[symbol](...args);
        delete context[symbol]
        return result;
}

greet.myApply(ooooj, ["Hello", 6456456]);




Function.prototype.myBind = function(context , ...args){
  const originalFn = this
   return function(...rest){
         originalFn.apply(context, [...args, ...rest])
   }
}

const r =  greet.myBind(ooooj, "Hello", 6456456)
r()

