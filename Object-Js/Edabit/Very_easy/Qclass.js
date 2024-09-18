
//  100 jinka data;
const p1 = {
     name :"mack",
     age :24,
     adress:"USA"
}


const p2 = {
    name :"hon",
    age :24,
    adress:"USA"
}

const p3 = {
    name :"ahmad",
    age :24,
    adress:"aligarh"
}
// ... uptto



const action = {
     userdetail : function(){
         console.log(`your detail`)
     }
}

function mainObject(name, age , address){
     const obj = Object.create(action);
     obj.name = name
     obj.age = age
     obj.address = address;
     return obj

}

const obj1 = mainObject("mack", 25, "USA")
obj1.userdetail();
const obj2 = mainObject("ahmad", 22, "india")
obj2.userdetail();