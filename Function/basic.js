function getmax(n1, n2){
     if(n1 > n2) {
         return n1
     }
}

const m = getmax(20,10);
console.log(m)


// arrow function
const getmaxr  = (n1, n2) => {
    if(n1 > n2) {
        return n1
    }
}
const m1 = getmaxr(20,10);
console.log(m1)


// rest operater 
function totalnumber(...num){
    let sum = 0;
    for (let i = 0; i < num.length; i++) {
        sum += num[i]
    }
    console.log(sum)
}


totalnumber(1,2,3,4,5,6,7,8)

// speread operator
const arr1 = [1,2,3,4,5,6,7]
// const result = [ 0,0, ...arr1, 10]
// console.log(result)

const [ first , second , ...rest ] = arr1;
console.log(first, second, rest) // 1 2 [ 3, 4, 5, 6, 7 ]
// const [,, first , second , ...rest ] = arr1;


// callback function


function sum (n){
    let totalsum = 0;
    for( let i =0; i <= n; i++ ){
        totalsum += i;
    }
    return totalsum;
}

function getAllExpendeture(uptonumber ,extraspend, somewalafun){
          const totalsum = somewalafun(uptonumber);
          console.log(totalsum+ extraspend)
}

getAllExpendeture(10, 500, sum)


console.log(" ---------------- ")
const months = ["Jan", "Mar", "Apr", "May"];

const months2 = months.toSpliced(1, 0, "Feb");
console.log(months2, months); 