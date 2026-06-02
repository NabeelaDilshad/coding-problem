

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
               //  console.log("i am from " + address, a, username)
            }
            thirdfunction();
     }
     otheruser()
}

getuser();


let number = 100;
function getnumber(){
     let number = 200;
     if(number == 200){
          let number = 300;
          console.log(number)
     }
     console.log(number)
}
getnumber()
console.log(number)




function ab(){
     let b =10;
     c();
     function c(){
          let a = 20;
          console.log(b);
     }
}

ab()


