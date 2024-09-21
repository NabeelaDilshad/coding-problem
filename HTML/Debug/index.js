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
