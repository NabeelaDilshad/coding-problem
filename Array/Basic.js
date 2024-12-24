const array1 = [1, 4, 9, 16];

// for(let i =0;  i < array1.length ; i ++){
//       console.log(array1[i]*2)
// }

function callbackfun(item, index, array) {
  return item * 2;
}

const r1 = array1.map(callbackfun);
// console.log(r1);

// another way
const r2 = array1.map(function callbackfun(item, index, array) {
  return item * 2;
});
// console.log(r2);

// another way
const r3 = array1.map(function (item, index, array) {
  return item * 2;
});
// console.log(r3);

// another way
const r4 = array1.map((item, index, array) => {
  return item * 2;
});
// console.log(r4);




const names = [
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Elijah",
  "Sophia",
  "James",
  "Isabella",
  "Benjamin",
  "Mia",
  "Lucas",
  "Charlotte",
  "Henry",
  "Amelia",
  "Alexander",
  "Harper",
  "Mason",
  "Evelyn",
  "Ethan",
];

for (let i = 0; i < names.length; i++) {
  if (names[i] == "Henry") {
    // console.log(names[i]);
  }
}

let array = [2, 3, 6, 7, 9, 23]

function reversearray(array) {

  let newarr = [];
  for (let i = array.length - 1; i >= 0; i--) {

    newarr.push(array[i])
  }
  // console.log(newarr);
}

reversearray(array)

// pop - remove element to end of array
// push - add element to end of array
// shift - remove element starting from beginning of array
// unshift - add element starting from beginning of array

// let demoarray = [];
// demoarray.push(1);
// demoarray.push(5,6); 
// demoarray.pop();
// demoarray.unshift(100)
// demoarray.pop();
// demoarray.shift();
// demoarray.push(134);
// console.log(demoarray) 


let numbers = [ 10, 2, 3 , 4, 5];

let sum = 0;
for (let i = 1; i < numbers.length; i++) {
     sum += numbers[i]
}
// console.log(sum* numbers[0])


const firstELement = numbers.push(5); // push or unshift both return array length after the add
// console.log(firstELement)



// for in loop or for of loop

// const dm = [1,2,3]

// for( let i in dm){
//    console.log(i)
// }




let totalnumbers = [10,20,30,40];


// forEach

function getTotal(list){
       let forsum = 0;
       
      list.forEach(function forEachcallback(item, index , array){
              forsum+= item     
      });

      // without  name 
      list.forEach(function(item, index , array){
        forsum+= item     
       });

      // with arrow function
       list.forEach((item, index , array) => {
        forsum+= item     
       });
      //  console.log(forsum)
};


getTotal(totalnumbers);


// map

function getDouble(list){

  const doublearray =  list.map(function ( item , index, array) {
          return item*2
   })

   // with arrow function
  //  const doublearrayarrowfun =  list.map(( item , index, array) => {
  //       item*2
  //    })

  //  console.log(doublearray)

}

getDouble(totalnumbers)



// Our array with items
const cart = ["apple", "banana", "pear"];

// A function which returns the last item of a given array
function returnLast(arr) {
  return arr.at(-1);
}
// Get the last item of our array 'cart'
const item1 = returnLast(cart);
// console.log(item1); // 'pear'





// concat 
let ca = [1,2];
let ca1 = [3,4,5];   // [1,2,3,4,5]

    // for(let i=0; i<ca1.length; i++){
    //     ca.push(ca1[i]);
    // }

    const resultarray = ca.concat(ca1)  // concat return new array
  //  console.log(resultarray)



  // every

  const studentsResult = [
    { name: 'John Doe', marks: 85, pass: true },
    { name: 'Jane Smith', marks: 92, pass: true },
    { name: 'Jack Johnson', marks: 45, pass: true },
    { name: 'Emily Davis', marks: 78, pass: true },
    { name: 'Michael Brown', marks: 38, pass: false },
    { name: 'Sarah Wilson', marks: 55, pass: true },
    { name: 'Chris Lee', marks: 67, pass: true },
    { name: 'Jessica Taylor', marks: 49, pass: false },
    { name: 'Matthew Harris', marks: 80, pass: true },
    { name: 'Laura Martinez', marks: 91, pass: true }
  ];

  // to get all pass or not
  function getPass(studentsResult){
     let isallpass = true;
     for(let i=0; i<studentsResult.length; i++){
          if(studentsResult[i].pass == false){
               return false
          }
     }
     return isallpass;
  }
 const allpass =  getPass(studentsResult)
//  console.log(allpass)



  function getPassByEvery(list){
          const r =  list.every(function (item) {
                  return item.pass == true
            })
            // console.log(r)
  }
  getPassByEvery(studentsResult)




  // fill 

  const fillarray = [1,2,3,4];
  fillarray.fill(5,0,3);
  // console.log(fillarray)


  

// filter
 function getPassStudentonly(students){
      // let onlypass = [];
      // for(let i =0 ; i < students.length; i++){
      //    if(students[i].pass === false){
      //       onlypass.push(students[i])
      //    }
      // }
        //  console.log(onlypass)

      const result =  students.filter( function (item){
             return item.pass === true 
        })

        // in one line
        const result1 =  students.filter((item) => item.pass === true)
        // console.log(result1)
        
 }
 getPassStudentonly(studentsResult)



  // const isAdmin = false;
  // if(isAdmin) console.log("admin h")
  // else console.log("admin ni h ")
     
  


  const arrlist = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    {},
    { id: null },
    { id: NaN },
    { id: "undefined" },
  ];

  function getValidNumbers(arrlist){
    let invalidEntries = 0;
     const final =  arrlist.filter(( item ) => {
           if(Number.isFinite(item.id) && item.id !== 0){
                return true;
           }
            invalidEntries++
            return false;
        })
        // console.log(final);
        // console.log(`number of invalid entries: ${invalidEntries}`)
  }

  getValidNumbers(arrlist)
  




  // includes method array & string

  //  let fullname = "faizuddin";
  //   console.log(fullname.includes("ddi"))

  // array includes method always search exact match elements
  //   const searchlist = ["faizuddin", "mack", "Adam"];
  //   console.log(searchlist.includes("faizuddin"))



      const fruits = ["apple", "banana", "grapes", "mango", "orange"];

      function filterItems(arr, query) {
               return arr.filter((el) => el.toLowerCase().includes(query.toLowerCase()));
      }

      // console.log(filterItems(fruits, "ap")); // ['apple', 'grapes']
      // console.log(filterItems(fruits, "an")); // ['banana', 'mango', 'orange']



      // find


        const num = [5, 12, 8, 130, 44];

        const found = num.find(function (element){
            return element > 12
        });

        console.log(found);
  

        // flatness of array 

        const ftarr = [1,2,[4,5],[10], [15, [30,40]]];

        // let result = [];
        // function flatarr(ftarr){
        //      for (let item of ftarr) {
        //         if(Array.isArray(item)){
        //           flatarr(item)
        //         }
        //         else{
        //           result.push(item)
        //         }
        //      }
        // }
        // flatarr(ftarr)
        // console.log(result);

        // const fruitses = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'apple'];

        // function getfruitscount(fruits){
        //     const count = fruits.reduce((acc, item) => {
        //       acc[item] = (acc[item] || 0) + 1;
        //       return acc;

        //     }, {})
        //     console.log(count)

        // }
        // getfruitscount(fruitses)


        const originalObject = {
          name: 'Nabeela',
          age: 25,
          city: 'Aligarh'
        };

        function convertkeytovalue(originalObject){
            const result = Object.keys(originalObject).map((item) => {
              return  { originalObject.item : item }
            })

        }
        convertkeytovalue(originalObject)




function moveZerosToEnd(numbers){
  let sarr = []
  let count = 0;
  for(let i = 0 ; i< numbers.length ; i++){
         if(numbers[i] !== 0)  {
               sarr.push(numbers[i])
         }
         else{
              count += 1
         }
      }
   while(count > 0){
          sarr.push(0)
          count -= 1
   }
  return sarr
}


console.log(moveZerosToEnd([0, 1, 2, 0, 3]));  // [1,2,3,0,0,]

console.log(moveZerosToEnd([0, 10,20,0, 2, 9,0, 3]));  // [10,20,2,9,3,0,0,0]