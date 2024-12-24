function validPerathesis(peralist){
       const mapToChar = { '(':')', '{':'}','[':']' };
       const stack = [];
       for(let char of peralist){
           if(mapToChar[char]){
                stack.push(char);
           }
           else{
                const topElement = stack.pop();
                if(mapToChar[topElement] !== char){
                     return false;
                }
           }    
       }
       return stack.length === 0;
}



// console.log(validPerathesis("()"))       // true
// console.log(validPerathesis("(){}[]"))  // true
// console.log(validPerathesis("(){)[]"))    // false
// console.log(validPerathesis("()[])[]{}")) // false
// console.log(validPerathesis("()[][]"))    // true





function findunique(){
    
    
}



findunique([1,1,2,2,3,4,4,5,5,6,6,7,7])