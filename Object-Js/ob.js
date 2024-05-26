
/**  
 * object store data in key and value pair;
 * key always store in string or symbol

*/

let  user = {
     name:'mack doe',
     age : 24,
     address: {
         pincode : 543564,
         state : 'Texas',
         subaddress :{
             gali:6,
         }
         //
     }
};


user.mobile = 9836734534; 

// user['mobile'] = 9836734534;

// const mobile = 'mobile';
// user[mobile] = 9836734534;
// console.log(user.age);

user.address.country = 'United States';
// console.log(user);



// method in Object 

// --------------------------------- Object.Keys()  ----------------------------------------------

const k = Object.keys(user);  // return keys in array
// console.log(k)

for( let item of Object.keys(user)){  // we can do loop on values of object  because its array
    //  console.log(item)
}


// --------------------------------- Object.values()  ----------------------------------------------

const v = Object.values(user);  // return values in array

for(let val of Object.values(v)){  // we can do loop on values of object  because its array
    //  console.log(val);
}
// console.log(v)


// --------------------------------- Object.entries()  ----------------------------------------------


// const asobj = Object.entries(user);

for( let [key , value] of Object.entries(user) ){  
    //  console.log(key , value)
}

// const arr = [1,2,3,4,5,6,];
// const first = arr[0];
// const second = arr[1];
// const [ f , s, ...rest] = arr;
// console.log(rest)



// --------------------------------- Object.seal  ----------------------------------------------
// we can't add new properties , we can't delete existing properties , but we modify the properties; its only freeze object on one top level
const obj = {
     name:"admin",
     password:12345,
     address:{
         pincode:354563,
         state:"Up",
         country:"India"
     }
}


Object.seal(obj);
obj.mobilenumber = 36753765376; 
obj.name = "update name"
// console.log(obj)


// --------------------------------- Object.freeze  ----------------------------------------------
// can't add, delete , modify properties,  its only freeze object on one top level

const obj1 = {
    name:"admin",
    password:12345,
    address:{
        pincode:354563,
        state:"Up",
        country:"India"
    }
}


Object.freeze(obj1);
obj1.mobilenumber = 36753765376; 
obj1.name = "update name";
obj1.address.pincode = 274402
console.log(obj1)

