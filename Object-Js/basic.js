// Object  {} always store value key and value pair

let user = { firstname: "John", lastname: "doe", age: 25 };


// console.log(user.age);
// console.log(user['age']);


//  add email - johden@example.com

user.email = "johden@example.com"; 

//Or
user['email'] = "mackdoe@example.com";

// Or
const emailformate = { useremail :'email' , username: 'username'}
// console.log(emailformate.useremail)
user[emailformate.useremail] = "mackdoe@example.com";


// console.log(user);

const fname = 'firstname'

if(user[fname]){
    // console.log("first name is there ")
}



const users = [
    { firstname: 'Nabeela', lastname: 'dilshad', age: 25 },
    { firstname: 'Ali', lastname: 'Ahmad', age: 30 },
    { firstname: 'abdullah', lastname: 'Sheikh', age: 22 },
    { firstname: 'Rohan', lastname: 'Mehta', age: 28 },
    { firstname: 'john', lastname: 'Doe', age: 24 },
    { firstname: 'alesh', lastname: 'fi', age: 22 },
    { firstname: 'mohn', lastname: 'grt', age: 30 },
  ];



  function getCount(users){
     const mapOfResult = {};
     for(let i = 0; i < users.length; i++){
          if(mapOfResult[users[i].age]){
              mapOfResult[users[i].age] = mapOfResult[users[i].age] + 1
          }
          else{
             mapOfResult[users[i].age] = 1
          }
     }
     console.log(mapOfResult)
  }

  getCount(users)


//   const countobject = { count : 1 };

//   countobject['count'] = countobject['count'] +1
