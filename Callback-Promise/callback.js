

function sum(n){    
    let total = 0;
    for( let i=1; i<=n; i++ ){
       total += i
    }
    return total
}

function getCalculation(fun, username){
       const r = fun(10);
       return function(){
         return  r
       }

};
const r = getCalculation(sum,'faiz')   // getCalculation HOC h and  sum callback function h 
// console.log(r())



// memorization


function getMemo(fun){
     let storeValue = {};
     return function(args){
             if(storeValue[args]){
                console.log(`getting data from chehc fun`, storeValue[args])
             }
             else{
                const r =  fun(args)
                storeValue[args] = r; 
                // console.log(storeValue)  // { '10': 55, '100': 5050 }
                console.log(`getting data from main fun`, r)
             }
     }
}

const finalcall = getMemo(sum)
finalcall(10)    // getting data from main fun , 210
finalcall(100)   // getting data from main fun , ...
finalcall(10)    // getting data from cheche fun , ...
finalcall(100) 



/*
    Callback hell -------------------------------->
*/


// question  add to card -> make payment ---> order sucessful page  using callback

//  "redmi 10 is added to card sucesfully" -> "Your payment is sucessful" ->  "You ordered Sucessfully "



console.log("------------------------------------------------------------------------------------------------")


// Add to Cart function
function addToCart(item, callback) {
    console.log(`Adding ${item} to the cart...`);
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log(`${item} added to the cart!`);
        callback();
    }, 1000);
}

// Make Payment function
function makePayment(amount, callback) {
    console.log(`Making payment of Rs. ${amount}...`);
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log(`Payment of Rs. ${amount} successful!`);
        callback();
    }, 1000);
}

// Order Success function
function orderSuccess(callback) {
    console.log("Redirecting to order success page...");
    // Simulate an asynchronous operation with setTimeout
    setTimeout(() => {
        console.log("Order placed successfully! Showing success page.");
        callback();
    }, 1000);
}

// Callback Hell Scenario
function placeOrder(item, amount) {
    addToCart(item, () => {
        makePayment(amount, () => {
            orderSuccess(() => {
                console.log("Order process completed!");
            });
        });
    });
}

// Example usage
placeOrder("Mobile Phone", 15000);



// resolve by promise callback

// Add to Cart function with Promise
function addToCart(item) {
    return new Promise((resolve, reject) => {
        console.log(`Adding ${item} to the cart...`);
        setTimeout(() => {
            console.log(`${item} added to the cart!`);
            resolve();
        }, 1000);
    });
}

// Make Payment function with Promise
function makePayment(amount) {
    return new Promise((resolve, reject) => {
        console.log(`Making payment of Rs. ${amount}...`);
        setTimeout(() => {
            console.log(`Payment of Rs. ${amount} successful!`);
            resolve();
        }, 1000);
    });
}

// Order Success function with Promise
function orderSuccess() {
    return new Promise((resolve, reject) => {
        console.log("Redirecting to order success page...");
        setTimeout(() => {
            console.log("Order placed successfully! Showing success page.");
            resolve();
        }, 1000);
    });
}

// Function to place order using Promises
function placeOrder(item, amount) {
    addToCart(item)
        .then(() => {
            return makePayment(amount);
        })
        .then(() => {
            return orderSuccess();
        })
        .then(() => {
            console.log("Order process completed!");
        })
        .catch((error) => {
            console.error("Error occurred during order process:", error);
        });
}

// Example usage
placeOrder("Mobile Phone", 15000);