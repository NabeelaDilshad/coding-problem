
const addItemToCart = (item) => {
    return new Promise((resolve, reject) => {
        console.log(`item is adding to card !!!`)
        setTimeout(() => {
            if(item){
               resolve({sucess : true , item : item})
            }else{
                reject(`failed to add item to card`)
            }
        }, 1000)
    })
}

const proceedToPayment = ({item}) => {
    return new Promise((resolve, reject) => {
        console.log(`payment is processing !!!`)
        setTimeout(() => {
            if(item){
               resolve({sucess : true , item : item})
            }else{
                reject(`failed to payment`)
            }
        }, 2000)
    })
}

const makeOrder = (item) => {
    return new Promise((resolve, reject) => {
        console.log(`please wait !!!`)
        setTimeout(() => {
            if(item){
               resolve({sucess : true , item : item})
            }else{
                reject(`failed to add item to card`)
            }
        }, 3000)
    })
}


// addItemToCart("mobile").then((data) => proceedToPayment(data).then((data) => makeOrder(data).then((data) => console.log(data))))
// addItemToCart("mobile").then((data) => {
//      console.log(data)
//      return proceedToPayment(data)
// }).then(( data) => {
//     console.log(data)
//     return makeOrder(data)
// }).then((data) => {
//      console.log(data)
// }).catch((err) => {
//     console.log(err)
// })


// execute this promise in 



// let apilist = [ addItemToCart , proceedToPayment , makeOrder]

// const callsequenceOrder = (apilist) => {
//     for( let i = 0; i < apilist.length; i++) {
//          apilist[i]().then((data) => {
//              return apilist[++i](data)
//          })
//     }  
// }

// callsequenceOrder(apilist)



/** 
@Input 
{
  a : {
    b : (a,b,c) => a+b+c,
    c : (a,b,c) => a+b-c,
  },
  d : (a,b,c) => a-b-c
}
@example Fn(obj)(1,1,1);

@Output 
{
  a : {
    b : 3,
    c : 1
  },
  d: -1
}

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
        console.log("valye", args)
        let arguments = args;
        for( let key in obj){
            const value = obj[key];
            console.log("valye")
            if(typeof val === 'function' ){
                 finalobj[key] = value(...arguments);
            }
            finalobj[key] = obj[key];
        }
        return finalobj
    }
}


const r = pipe(obj)(1,1,1)
// console.log(r)


const arr = [ 3,5,7,8,1,4,12];

function rorateArray(arr, d){
    const n = arr.length;
    d = d %n;
    for(let i = d; i < n; i++){
           arr[i-d] = arr[i]
    }
    console.log(arr)
}

rorateArray(arr, 2)
rorateArray(arr, 3)
rorateArray(arr, 9)