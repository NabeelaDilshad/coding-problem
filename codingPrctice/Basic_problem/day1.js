
let str = "faizuddin";   // nidduziaf
const reverseString = str => {
    let reversestr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversestr += str[i]
    }
    //   console.log(reversestr)

    //   second approach
    // console.log(str.split("").reverse().join(""))
}


reverseString(str);




// convert number to string ,    String(str), str.toString();
// string number to number ,    +str ,  Number(str), Math.floor() , Math.ceil() , etc


//  reverse the number 
function reverseNumber(num) {

    // const convertString = String(33564);
    // let reversestr = "";
    //   for(let i =convertString.length - 1;  i >=0; i--){
    //       reversestr += convertString[i]
    //  }
    //  const convertinto = + reversestr;
    //  console.log(convertinto, typeof convertinto)

    // don't convert into otherdatatype
    let final = 0;
    while (num != 0) {
        const rem = Math.floor(num % 10);
        final = final * 10 + rem;
        num = Math.floor(num / 10)
    }
    console.log(final)
}

reverseNumber(33564)


function evenNumberSum(num) {
    let final = 0;
    while (num != 0) {
        const rem = Math.floor(num % 10);
        if (rem % 2 == 0) {
            final += rem;
        }
        num = Math.floor(num / 10)
    }
    console.log(final)
}

evenNumberSum(323564)  // 12



function isPrime(num) {
    // write your code her


}

console.log(isPrime(2)) // true
console.log(isPrime(1)) // prime
console.log(isPrime(13)) // true
console.log(isPrime(8)) // false





function findPrimeNumberInrange(num) {
    // write your code here 
}

console.log(findPrimeNumberInrange(1, 10))
console.log(findPrimeNumberInrange(10, 30))
console.log(findPrimeNumberInrange(20, 60))
