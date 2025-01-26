console.log("hoisting")




console.log(a) 
console.log(getuser())
console.log(getAdminuser())
var a = 10;

function getuser(){
     let name = "faizuddin"
     console.log("hey user")
}


var  getAdminuser = () => {
     console.log("hey Amdin user")
}


