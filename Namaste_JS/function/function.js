console.log("function called");

// 1 function declaration and function statement
function a() {
  console.log("a");
}
a();

// 2 function expression , named function
var secondfunction = function u() {
  console.log(`function expression`);
};

secondfunction();
// u();  // not defined

// 3  Anonymous function
var secondfunction = function () {
  console.log(`function expression`);
};

//4 arrow function

var arrowfn = (a, b) => {
  // arguments
  console.log("➡️  arrow function");
};

arrowfn(12, 24); // perameter

// first class function  ➡️  means function ki power

// callBack function

function getUser(user) {
  return user + "_aktu";
}
function getAmdin(callback) {
  const r = callback("mack");
  console.log(r);
}

getAmdin(getUser);
// getUser is callback fun , --> the function that can pass to onother fun as arguments
// getAmdin is high order function  --> the function that can recieve to onother fun as arguments

const users = [
  {
    id: 1,
    name: "Nabeela dilshad",
    age: 21,
    email: "nabeela.dilshad@example.com",
    city: "Aligarh",
    occupation: "Software Developer",
  },
  {
    id: 2,
    name: "Faizuddin",
    age: 25,
    email: "faiz.@example.com",
    city: "Kushinagar",
    occupation: "Software engineer",
  },
  {
    id: 3,
    name: "Aarav Sharma",
    age: 32,
    email: "aarav.sharma@example.com",
    city: "Delhi",
    occupation: "Digital Marketer",
  },
  {
    id: 4,
    name: "Kabir Das",
    age: 35,
    email: "kabir.das@example.com",
    city: "Bengaluru",
    occupation: "Product Manager",
  },
];

function getUserdetail(username) {
  if (username == "Nabeela dilshad") {
    return users[0];
  } else if (username == "Faizuddin") {
    return users[1];
  } else if (username == "Aarav Sharma") {
    return users[2];
  } else if (username == "Kabir Das") {
    return users[3];
  } else {
    return;
  }
}

const submitbutton = document.getElementById("information");
submitbutton.addEventListener("click", function () {
  const username = document.getElementById("searchbox").value;
  const userd = getUserdetail(username);
  if (!userd) {
    window.alert("user is not found");
    return;
  }
  window.alert(JSON.stringify(userd));
});

// remove event handlers
// submitbutton.removeEventListener("click", function(){
//   // add your code
// })

// event loop
const apiCallbutton = document.getElementById("apicall");
console.log("start");
setTimeout(() => {
  console.log("setTimeout!!!");
}, 5000);
const url = `https://jsonplaceholder.typicode.com/users`;

console.log("apiCallbutton", apiCallbutton);
apiCallbutton.addEventListener("click", function () {
  fetch(url)
    .then((response) => response.json())
    .then((json) => console.log(json));
});

console.log("End !!!");


//setTimeout has trust issue , setTimeout athleast wait for 5 sec 

console.log("Start");
setTimeout(function cb() {
  console.log("Callback");
}, 5000);
console.log("End");

// million
let startDate = new Date().getTime();
let endDate = startDate;
while (endDate < startDate + 10000) {
  endDate = new Date().getTime();
}

console.log("While expires");
