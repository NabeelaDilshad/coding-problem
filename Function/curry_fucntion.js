

// function a(){
//      return function(){
//           return function(){
//               return function(){
//                   console.log("hey")
//               }
//           }
//      }
// }

//  a()()()();


// function sum(){

// }

// sum(10)(20)(30)(40)(50) // 150




// function double(x){
//       return 2*x
// }

// function threetime(x){
//         return 3*x
// }

// function fourtime(x){
//     return 4*x
// }

// function tentime(x){
//     return 10*x
// }

// function getCalculation(obj){
//       const { double:d , threetime:three, fourtime:four , thentime:ten } = obj;
//       const result =  double(d) +   threetime(three) + fourtime(four) + tentime(ten)
//       console.log(result)
// }

// ;
// getCalculation({  double : 2 , threetime : 5 , fourtime :4 , thentime : 3 })





// const obj = { a :10};

// const { a} = obj;
// console.log(a)



function sum1(a){
    return function(b){
         if(b === undefined){
             return a;
         }
         return sum1(a+b);
    }
}

// Usage
console.log(sum1(1)(2)(3)(4)());  // Output: 10
console.log(sum1(5)(-1)(2)());    // Output: 6