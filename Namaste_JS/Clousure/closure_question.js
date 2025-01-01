
// 1. Variable Scope Inside Closures
// Question:
// What will the following code print and why?
function outer() {
  var x = 10;
  return function inner() {
    console.log(x);
    var x = 20;
  };
}

const closureFn = outer();
closureFn();




function outerFunc() {
    var count = 0;
    return function innerFunc() {
      count++;
      return count;
    };
  }
  
  const counter1 = outerFunc();
  const counter2 = outerFunc();
  
  console.log(counter1()); // ?
  console.log(counter1()); // ?
  console.log(counter2()); // ?
  





    const arr = [];
   for (var i = 0; i < 5; i++) {
    arr.push(() => console.log(i));
    }

    arr[0](); // ?
    arr[1](); // ?
    arr[2](); // ?
    arr[3](); // ?
    arr[4](); // ?


    // solution----

    // const arr = [];
    // var i;
    // for (i = 0; i < 5; i++) {
    //     function x(index){
    //         arr.push(() => console.log(index));
    //     }
    //     x(i)
    // }
    // arr[0](); // ?
    // arr[1](); // ?
    // arr[2](); // ?
    // arr[3](); // ?
    // arr[4](); // ?

