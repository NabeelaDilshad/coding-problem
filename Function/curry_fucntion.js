

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


function sum(a) {
    return function (b) {
        return function (c) {
            return function (d) {
                return function (e) {
                    console.log(a + b + c + d + e);
                }
            }
        }
    }
}

sum(10)(20)(30)(40)(20)




