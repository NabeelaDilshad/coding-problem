// question  add by one if index om even

var map = function(arr, fn) {
    let newArray = [];
    for(let i=0; i< arr.length; i++){
          newArray[i] = fn(arr[i], i);  
    }
    return  newArray; 
};


function plusone(item, index){
        if(index % 2 == 0){
            return item+1;
        }
        else{
           return item
        }
}

let arr = [1,2,3,5,7,8,9,10]
const newArray = map(arr, plusone);
console.log(newArray)
