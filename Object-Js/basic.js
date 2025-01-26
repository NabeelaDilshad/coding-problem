// Object  {} always store value key and value pair

let user = { firstname: "John", lastname: "doe", age: 25 };


// console.log(user.age);
// console.log(user['age']);


//  add email - johden@example.com

user.email = "johden@example.com";

//Or
user['email'] = "mackdoe@example.com";

// Or
const emailformate = { useremail: 'email', username: 'username' }
// console.log(emailformate.useremail)
user[emailformate.useremail] = "mackdoe@example.com";   //means email:"mackdoe@example.com"


// console.log(user);

const fname = 'firstname'

if (user[fname]) {
    // console.log("first name is there ")
}



// const users = [
//     { firstname: 'Nabeela', lastname: 'dilshad', age: 25 },
//     { firstname: 'Ali', lastname: 'Ahmad', age: 30 },
//     { firstname: 'abdullah', lastname: 'Sheikh', age: 22 },
//     { firstname: 'Rohan', lastname: 'Mehta', age: 28 },
//     { firstname: 'john', lastname: 'Doe', age: 24 },
//     { firstname: 'alesh', lastname: 'fi', age: 22 },
//     { firstname: 'mohn', lastname: 'grt', age: 30 },
//  ];



function getCount(users) {
    const mapOfResult = {};    // { 25 : 1,  }
    for (let i = 0; i < users.length; i++) {
        if (mapOfResult[users[i].age]) {   // mapOfResult[25]
            mapOfResult[users[i].age] = mapOfResult[users[i].age] + 1
            // mapOfResult['22'] = 2
        }
        else {
            mapOfResult[users[i].age] = 1
        }
    }
    console.log(mapOfResult)
}

// getCount(users) // { '22': 2, '24': 1, '25': 1, '28': 1, '30': 2 }






//   const countobject = { count : 1 };

//   countobject['count'] = countobject['count'] +1





const users = [
    { firstname: 'Nabeela', lastname: 'dilshad', age: 25 },
    { firstname: 'Ali', lastname: 'Ahmad', age: 30 },
    { firstname: 'abdullah', lastname: 'Sheikh', age: 22 },
    { firstname: 'Rohan', lastname: 'Mehta', age: 28 },
    { firstname: 'john', lastname: 'Doe', age: 24 },
    { firstname: 'alesh', lastname: 'fi', age: 22 },
    { firstname: 'mohn', lastname: 'grt', age: 30 },
];


function firstnamelist(arr) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age < 30) {
            newarr.push(arr[i].firstname)
        }
    }
    return newarr;
}

const result = firstnamelist(users);
// console.log(result);



//by using reduce
const result2 = users.reduce(function (acc, curr) {
    if (curr.age < 30) {
        acc = (acc + curr.firstname);
    }
    return acc;
}, [])
console.log(result2);




//by using filter
const output = users.filter((x) => x.age < 30).map((x) => x.firstname)
// console.log(output);



//  learn again 22 dec 2024 

const num = { n: 10 }
const n = "faiz"
num[n] = 20     // here we are passing the reference of n which is faiz
// console.log(num)

//num.200 = 1000     // ❌ which is not allowed



//  Oject Destucturing 

const product = {
    id: 101,
    name: 'Smartphone',
    price: 25000,
    specifications: {
        battery: '4000mAh',
        processor: 'Octa-core',
        features: {
            waterproof: true,
            camera: {
                front: '16MP',
                back: '48MP'
            }
        }
    },
    stock: 100
};

// const name = product.name
// const price =  product.price
// const stock =  product.stock

const battery = product.specifications.battery

// alternatice approach  destructing

const stock = 400;
const { name, price, stock: productstock, specifications: { battery: updatebattery } } = product;
// console.log(productstock, stock)
const { specifications: { features: { camera: { front } } } } = product
console.log(front)
// front , 

// console.log(updatebattery)

<<<<<<< HEAD
=======


// for(let [first , second] of en){
//     console.log(first)
// }
>>>>>>> de202690394e96ee99dba2f39780852fa2a4e7c9
