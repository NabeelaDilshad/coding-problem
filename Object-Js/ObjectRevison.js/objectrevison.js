function copyObject(obj){
    const c = {}
    Object.keys(obj).forEach((item) => {
           c[item]=  obj[key]
    })
    console.log(c)
}


// copyObject({piano :100, tv :500})



function fac(n){
    let r = 1
    for(let i = 5; i >= 1; i-- ){
          r *= i
    }
    return r
}
function getChecheBaseFactorial(fac){
    const cheche = {}
    return function(...args){
         const number = args[0]   
         if(cheche[number]){
              console.log("its comming from cheche !!!")
              return cheche[number]
         }
         else{
            const result  = fac(number)
            cheche[number] = result
            console.log("its comming from fac fun !!!")
            return result
         }   
    }
}
const r = getChecheBaseFactorial(fac)
r(5)
r(5)
r(10)
r(10)


