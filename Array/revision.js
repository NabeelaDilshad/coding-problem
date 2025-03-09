

// const arr = [10,20,30,40,50];
// let sum = 0;
// function arrayMethod(arr){
//       arr.forEach((item, index, array) => {
//         if(item % 2 == 0){
//            sum+= item
//         }
//       })
//       console.log(sum)
// }
// arrayMethod(arr)


// const arr = [10,20,30,40,50];
// let doublearray = [];
// function arrayMethod(arr){
//       arr.forEach((item, index, array) => {
//         doublearray.push(item*2)
//       })
//       console.log(doublearray)
// }
// arrayMethod(arr)

const arr1 = [10,20,30,40,50];
function arrayMethodMap(arr){
    //   const result = arr.map((item, index, array) => {
    //      return item*2
    //   })
      const result = arr.map((item, index, array) => item*2)
    //   const result = arr.map((item, index, array) => ({}))
      console.log(result)
}
arrayMethodMap(arr1)



const arr2 = [10,25,30, 37, 40,50, 57];
function arrayMethodFilter(arr){
       const result = arr.filter((item, index) => item% 2 == 0)
       console.log(result)
}
arrayMethodFilter(arr2)



const arr3 = [10,25,30, 37, 40,50, 57];
let evenofarray = []
function arrayEvenFE(arr){
       arr.forEach((item, index) => {
           if(item %2 === 0){
            evenofarray.push(item)
           }
       })
       console.log(evenofarray)
}
arrayEvenFE(arr3)



// Array.from("mabeela")
//  ['m', 'a', 'b', 'e', 'e', 'l', 'a']
// Array.from([10,20,30], (item , index) => item*2 )
//  [20, 40, 60]
