console.log("hey debug !!!")


const arr = [1,2,3,1,2,5,6,10,7,6,2,3];   

function getCount(arr){
     const mapOfNumber = {};
     // debugger;
     for(let item of arr){
           if(mapOfNumber[item]){
                mapOfNumber[item] = mapOfNumber[item] +1
           }
           else{
                 mapOfNumber[item] = 1;
           }
     }
    //  console.log('mapOfNumber', mapOfNumber)
}

getCount(arr);




function getSome(){
     let sum = 0;
     for(let item of arr){
          sum += item;
     }
      console.log(sum)
}


// getSome();


function getSomeReduce(arr){
          
     const result =   arr.reduce(function(acc, item){
            acc = acc + item;
            return acc;
      }, 0)

      console.log(result)

    // let sum = 0;
    // for(let item of arr){
    //      sum += item;
    // }
    //  console.log(sum)
}


getSomeReduce(arr);



function reverseNumber(num){

     // const convertString = String(33564);
     // let reversestr = "";
     //   for(let i =convertString.length - 1;  i >=0; i--){
     //       reversestr += convertString[i]
     //  }
     //  const convertinto = + reversestr;
     //  console.log(convertinto, typeof convertinto)
 
     // don't convert into otherdatatype
 
     let final = 0;
     while(num != 0){
           const rem = Math.floor(num%10);
           final = final *10 + rem;
           num = Math.floor(num/10)
     }
     console.log(final)
 }
 
 reverseNumber(33564)



 function isPrime(num){
      // if number is 1 or  less then 1  then not prime
      if(num <= 1) {
          return false
      }
       // if number is 2 then 2 is only even prime
      if(num == 2){
         return true;
      }
      // check from 3 to number 
      for(let i =3 ; i <=Math.sqrt(num) ; i++){
           if(num % i == 0 ){
                return false
           }
           return true;
      }
   }
      
   function findPrimeNumberInrange(start, end){
       for(let i = start; i <= end; i++){
            const r = isPrime(i)
            console.log(r)
             
       }
       console.log("-------- for next function -----------")
    }
    
    findPrimeNumberInrange(1,10)