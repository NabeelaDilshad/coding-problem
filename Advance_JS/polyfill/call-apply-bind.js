console.log("Call, Apply and Bind polyfill");


const obj = { name: "Faiz", age: 25 };

function greet(greeting, mobile) {
  console.log(`${greeting}, my name is ${this.name} and I am ${this.age} years old. My mobile number is ${mobile}.`);
}

Function.prototype.myCall = function(context , ...args) {
    context = context || window;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
}
    

greet.myCall(obj, "Hello", 6456456);