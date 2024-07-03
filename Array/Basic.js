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
