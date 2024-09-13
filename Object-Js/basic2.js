
// primitive   ->  number , string, null , undefined , boolean
// non primitive  --> object , array , function


// object store data in key and value pair,

let user = {};

user.name = "faizuddin";
user.age = 24
// or
user['name'] = "faizuddin";
user['age'] = 24

// console.log(user.name);  // console.log(user['name']);


// object can store anything as value


const userInformation = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
        moredetaillocation : function(){
            //    console.log(`you are from USA`)
        }
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    },
    pricelist : [100,200,300]
}

// console.log(userInformation.address.geo.lat)

// change lat to 467744
userInformation.address.geo.lat = '467744'; 
userInformation['address']['geo']['lat'] = '467744';
// console.log(userInformation)


userInformation.address.geo.moredetaillocation();

const totalsum = userInformation.pricelist.reduce((acc, item) => acc+item, 0);
// console.log(totalsum)



// Object destructing

const getname =  userInformation.name
const getemail =  userInformation.email


// OR
const { name:fullname, address } = userInformation;
// console.log(fullname, address)

//  get level destructuring
const getlat = userInformation.address.geo.lat;
// OR
const { name, address : { geo : { lat , lng: lantitude} } } = userInformation;
console.log(lat)


// Object with dynamic keys and deeply nested structure
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
    stock: undefined
  };
  
  // Dynamic key and nested destructuring with defaults
  const key = 'specifications';
  const { 
    [key]: { features: { camera: { front, back } } },  // Destructure nested keys with dynamic access
    stock = 'Out of Stock', // Default value for missing property
    ...otherDetails          // Rest operator to extract the remaining object properties
  } = product;
  
  console.log(front);        // '16MP'
  console.log(back);         // '48MP'
  console.log(stock);        // 'Out of Stock' (since stock was undefined)
  console.log(otherDetails); // { id: 101, name: 'Smartphone', price: 25000, }


  const {first, second , ...rest } = {first:1, second:2, third:3, fouth:4}
//   console.log(first, second, rest) // 1 2 { third: 3, fouth: 4 }



// Function that uses destructuring in parameters
function displayProductDetails({name, price, specifications}) {

    // console.log(name, specifications)
    // console.log(`Product: ${name}`);
    // console.log(`Price: ₹${price}`);
    // console.log(`Waterproof: ${waterproof ? 'Yes' : 'No'}`);
  }
  
  const productDetails = {
    name: 'Smartphone',
    price: 25000,
    specifications: {
      features: {
        waterproof: true
      }
    }
  };
  
  displayProductDetails(productDetails);
  // Output:
  // Product: Smartphone
  // Price: ₹25000
  // Waterproof: Yes




  console.log("-------------------------------------")
//    default fun operater

function displayScoreSum(n1, n2 = 50){
     console.log(n1+n2)
}
displayScoreSum(10,20)
displayScoreSum(10)


