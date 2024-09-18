
function totalAmountAdjectives(obj) {
     let count = 0;
    for(let i in obj){
        count += 1
    }
    // console.log(count)

    // const keys = Object.keys(obj)
    //  for( let i =0; i < keys.length ; i++){
    //        console.log(keys[i])
    //  }

    // const entries = Object.entries(obj)
    // for( let [key, value] of entries){
    //      console.log(key, value)
    // }
    
}



totalAmountAdjectives({ a: "moron" }) // 1

totalAmountAdjectives({ a: "idiot", b: "idiot", c: "idiot" }) // 3

totalAmountAdjectives({ a: "moron", b: "scumbag", c: "moron", d: "dirtbag" }) // 4



// ================================================================================================
const obj =  { two : 2 }
var { one = 1, two } = obj
console.log(one) // outputs undefined


function addtosum(a = 10 , b = 20){ // defualt paramter
    //   console.log(a+b)
}

addtosum()
addtosum(50)
addtosum(100, 200)


// ================================================================================================

function determineLever(levercontainer){
    //   if(levercontainer[0] == 'f'){
    //      console.log(`third class lever`)
    //   }
    //   else if (levercontainer[1] == 'f'){
    //     console.log(`first class lever`)
    //  }
    //  else{
    //       console.log(`second class lever`)
    //  }

    const r = levercontainer.indexOf('f') == 0 ? `third class lever` : levercontainer.indexOf('f') == 1 ? `first class lever` : `third class lever`
    console.log(r)
}


determineLever(["e", "f", "l"]) // "first class lever"

determineLever(["e", "l", "f"]) // "second class lever"

determineLever(["f", "e", "l"]) //  "third class lever"