
// Question  number is palimdrom or not

function checkPalimdrom(number){
    let num = String(number);

    let start = 0;
    let end = num.length -1;
    while(start < end){
         if(num[start] !== num[end]){
             return false;
         }
         start++;
         end--;
    }
    return true;

};

const r = checkPalimdrom(121);
console.log(r);
const d = checkPalimdrom(120);
console.log(d);
const m = checkPalimdrom(123321); 
console.log(m)
const y = checkPalimdrom(1234);
console.log(y)
