
/**
 * this inside arrow function always resolve lexiacally
 */


const obj = {
    data : [2,4,6,8],
    processData : function (){
        // this refer to obj
        this.data.forEach((num) => {
            console.log(num* this.multiplier )
        })
    },
    multiplier : 2
}

obj.processData() 