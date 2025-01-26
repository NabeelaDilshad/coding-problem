

// console.log(a) 
var aa = 10;

function getuser(){
     let name = "faizuddin"
     console.log("hey user")
     function otheruser(){
            // local memmory and parent of his laxial parent  
            let username = "otheruser"
            let price = 40;
            console.log(username)
            console.log(name)
            function thirdfunction(){
                let address = 'aligarh'
                console.log("i am from " + address, a, username)
            }
            thirdfunction();
     }
     otheruser()
}

getuser();



function ab(){
     var b =10;
     c();
     function c(){
          console.log(b);
     }
}

ab()

