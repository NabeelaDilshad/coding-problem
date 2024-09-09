// function add(num1, num2, num3) {
//     return num1 + num2 + num3;
// }
// const r = add(3, 4, 7)
// console.log(r);

// return in one line
const addition = (num1, num2, num3) => num1 + num2 + num3

const res = addition(3, 4, 7)
console.log(res);


// function CallThePolice(name , age){
//      return {
//          name :name,
//          age:age
//      }
// }
// const r = CallThePolice("mack", 34);
// console.log(r)



const  CallThePolice = (name, age) => {
    return {
        name :name,
        age:age
    }
}
//  in one line
// const  CallThePolice = (name, age) =>({name :name, age:age });

const r = CallThePolice("mack", 34 );
// console.log(r)


// rest operater and speread operater -------------------------------->


// rest operater 
function sumtoN(a,b, ...c){  
    // console.log(c)
}

sumtoN(1,2,3,4,5,6,7,8)


// sperate operater 


const numbers = [1,2,3,4,5,6,7];
const num2 = [10,20,30];

// const result = numbers.concat(num2)

const result = [...numbers, 45, ...num2, 10]
// console.log(result)



// destructuring

const num3 = [100,200,300,400,500];

// const  firstnumber = num3[0];
// const  second = num3[1];

// const [firstnumber,afaiz , ...bakihjoh] = num3;   
// console.log(firstnumber, bakihjoh)


// console.log(`phla numbers`, arr[0])

// console.log(`dusra numbers`, arr[1])

// console.log(`tisra numbers`, arr[2])



10,   50
// Question  [10,20,30,40,50]   --> [50,90,90,90,10]


function RorateArraySum(list){
      let finalarray = []
      const lastelment = list[list.length - 1];
      const firstELement = list[0];
      finalarray[0] = lastelment;

      let sum = 0;
      let count = 0
      for(let i = 1; i < list.length - 1; i++){
              count += 1
              sum +=list[i];
      }
      while(count > 0 ){
          finalarray.push(sum);
          count--;
      }
      finalarray.push(firstELement)
      console.log(finalarray)
}

RorateArraySum([10,20,30,40,50])