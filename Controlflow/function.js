
// normal function , function definition, function statements
function addUser() { }

// function expression
let a = function (a, b) { }
a(10, 20);

// arrow function
let arrow = (a, b, c) => { }
arrow(10, 20, 30);


// function progmming 

function sum(n) {
    let totalsum = 0;
    for (let i = 0; i <= n; i++) {
        totalsum += i;
    }
    return totalsum
}


function checkSum(fn, type) {    // (fn) callback function that can pass to another function and execute some time later know as callback function
    if (type === 'findsum') {
        const result = fn(10);
        console.log(`result`, result)
    }
};


checkSum(sum, 'findsum');  // high order function - function that can take another function as argument



// Function to add item to cart
function addItemToCart(item, quantity, callback) {
    setTimeout(() => {
        console.log(`${quantity} ${item}(s) added to cart.`);
        callback();
    }, 1000); // Simulating an asynchronous operation with setTimeout
}

// Function to process payment
function processPayment(total, callback) {
    setTimeout(() => {
        console.log(`Payment of $${total} processed successfully.`);
        callback();
    }, 2000); // Simulating an asynchronous operation with setTimeout
}

// Function to place order
function placeOrder() {
    console.log("Order placed successfully!");
}

// Adding item to cart
addItemToCart("Laptop", 1, () => {
    // After item is added to cart, process payment
    processPayment(1000, () => {
        // After payment is processed, place the order
        placeOrder();
    });
});



function currr(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
};
//  const r =  currr(10);
//  const res = r(10);
//  const final = res(10)
//  console.log(final)

//  or do 
const d = currr(10)(10)(10);
// console.log(d)


// what do out be 30







