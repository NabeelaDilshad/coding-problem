/** 
 *  @question 1 chain calulater
 */

const calculator = {
    total: 0,
    add: function(val){
      this.total += val;
      return this;
    },
    subtract: function(val){
      this.total -= val;
      return this;
    },
    divide: function(val){
      this.total /= val;
      return this;
    },
    multiply: function(val){
      this.total *= val;
      return this;
    }
  };
calculator.add(10).subtract(2).divide(2).multiply(5);
// console.log(calculator.total);  //20



/** 
@question 2 pipe mapping question
*/

const obj = {
  a : {
      b : (a,b,c) => a+b+c,
      c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c,
  e:10
}



const pipe = (obj) =>{
  let finalobj = {}
  return function(...args){
      let arguments = args;
      for( let key in obj){
          const value = obj[key];
          console.log(typeof value)
          if(typeof value === 'function' ){
              finalobj[key] = value(...arguments);
          }
          else if(value && typeof value === 'object' && !Array.isArray(value)){
              finalobj[key] = pipe(value)(...arguments);
          }
          else{
              finalobj[key] = obj[key];
          } 
      }
      return finalobj
  }
}
const r = pipe(obj)(1,1,1)
console.log(r)




/** 
@question 3 
*/