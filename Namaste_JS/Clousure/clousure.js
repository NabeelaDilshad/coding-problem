console.log("Closures !!")



// global execution 

// a : whole code of func
// r = undefined


// username : "faizuddin"

// b : function code

function a(){
    let username = "faizuddin"
    function b(){
        let username2 = "mack"
        let price = 500
        function c(){
             console.log(username , username2)
        }
        return c;
    }
    return b;
}

var r  =  a()
var s  =   r()
s()

// or
// a()()()


