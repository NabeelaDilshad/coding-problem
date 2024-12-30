


// console.log(a);
// console.log(b)
// let a = 10;
// const b = "faiz"

// function getName(){
//      console.log("hi name")
// }



 
  // var scope , if declare inside function then function scope 
  // if declare outside function then global scope
  
//   var number = 100;
//   function getNumber(){
//         var number2 = 50;
//         if(number2 == 50){
//             var number2 = 200;
//             console.log(number2)   // 200
//         }
//         console.log(number2)  // 200
//   }
//   console.log(number) // 100

//   getNumber();


   // let and const 
   let number = 100;
   function getNumber(){
         let number2 = 50;
         if(number2 == 50){
             let number2 = 200;
             console.log(number2) // 200
         }
         console.log(number2) // 50
   }
   console.log(number) // 100

   getNumber();

   // var bht kam use 
   // let prefare 
   // const  discount = 20%