
const arr = [1,2,3,1,2,5,6,10,7,6,2,3];   


const obj = {};
for(let i =0 ; i < arr.length ; i++){
     obj[arr[i]] =  obj[arr[i]] ? obj[arr[i]] + 1 : 1
    //  if(obj[arr[i]]){
    //     obj[arr[i]] = obj[arr[i]] + 1
    //  }
    //  else{
    //     obj[arr[i]] = 1;
    //  }
}

console.log(obj)
