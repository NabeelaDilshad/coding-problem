


// filter

const arr = [ 10, 20 , 30, 40, 50, 60, 70]

function getMOrethan30(){
    const ft =   arr.filter((item, index) => item > 30)
    // console.log(ft)
}
getMOrethan30();



const months = ["jan", "feb", "july", ]

months.splice(2, 0 , "march", "march")

months.splice(3, 1, "april", "may", "jun")
// console.log(months)


// Without flatMap():
const arr1 = [1, 2, 3];
const mapped = arr.map(x => [x, x * 2]); // [[1, 2], [2, 4], [3, 6]]
const flattened = mapped.flat();         // [1, 2, 2, 4, 3, 6]
// console.log(flattened);



// With flatMap():
const arr2 = [1, 2, 3];
const result = arr.flatMap(x => [x, x * 2]);
// console.log(result); // Output: [1, 2, 2, 4, 3, 6]


// By default, sort() converts the elements to strings and compares their UTF-16 code unit values.
const fruits = ['Banana', 'Apple', 'Cherry'];
fruits.sort(); // Alphabetical order
// console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

const numbers = [10, 5, 20, 1];
numbers.sort(); // Sorted as strings!
// console.log(numbers); // Output: [1, 10, 20, 5]



const items = [
    { name: "Edward", value: 21 },
    { name: "Sharpe", value: 37 },
    { name: "And", value: 45 },
    { name: "The", value: -12 },
    { name: "Magnetic", value: 13 },
    { name: "Zeros", value: 37 },
  ];
  
  // sort by value
  items.sort((a, b) => a.value - b.value);
  
  // sort by name
  items.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
  
    // names must be equal
    return 0;
  });

// alternative

//   console.log(items)



console.log(" ------------------------------ reduce ----------------------------- ")

const numbersum = [1,3,6,9,12,15];
function getsome(arr){
    //    let sum = 0;
    //     for( let i = 0; i < arr.length; i++ ){
    //            sum += arr[i]
    //     }
    //     console.log(sum);
    
    const sum = arr.reduce((acc,item, index)=> { 
           acc = acc+ item;
           return acc;
    }, 0)
    console.log(sum);

}

getsome(numbersum)


//  

  
