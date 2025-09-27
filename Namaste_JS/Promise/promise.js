
const getPromise = function(){
     return new Promise((resolve, reject) =>{
         setTimeout(() =>{
              resolve("hi i am mack")
         }, 5000)
       })
}

// const p = getPromise()
// p.then(function(data){
//    console.log(data)
// }).catch((error)=>{
//    console.log(error)
// })




// const p = new Promise((resolve, reject)=>{
//   setTimeout(() => {
//     reject({ name: 'faiz', address:"kushinagar"})
//   }, 2000)
// })

// p.then((data) => {
// console.log(data)
// }).catch((error) => console.error(error))

// console.log(p)
// setTimeout(()=>{
//   console.log(p)
// }, 5000)


// Simulated list of items
const items = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];
  
  // Cart array
  let cart = [];
  
  // Add to Cart Function
  function addToCart(itemId) {
    console.log("Adding item to cart...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const item = items.find(i => i.id === itemId);
        if (!item) {
          return reject("Item not found!");
        }
        cart.push(item);
        console.log("Item added to cart:", item);
        resolve(cart);
      }, 1000);
    });
  }
  
  // Calculate Total Function
  function calculateTotal(cart) {
    console.log("Calculating total...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        if (total <= 0) {
          return reject("Invalid cart total!");
        }
        console.log("Total calculated:", total);
        resolve(total);
      }, 1000);
    });
  }
  
  // Proceed to Payment Function
  function proceedToPayment(total) {
    console.log("Processing payment...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (total <= 0) {
          return reject("Invalid total amount!");
        }
        console.log("Payment successful! Amount paid:", total);
        resolve("Payment successful!");
      }, 2000);
    });
  }
  
  // Generate Receipt Function
  function generateReceipt(message) {
    console.log("Generating receipt...");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log("Receipt generated. Status:", message);
        resolve("Order completed!");
      }, 1000);
    });
  }
  
 
  
   // Execution of steps with Promises
  // addToCart(1).then((card) => {
  //   return calculateTotal(card)
  // }).then((total) => {
  //    return proceedToPayment(total)
  // }).then((paymentinfo) => {
  //     return generateReceipt(paymentinfo)
  // }).then((msg) => {
  //   console.log(msg)
  // })


  // or 
  // addToCart(1)
  //   .then(cart => calculateTotal(cart))
  //   .then(total => proceedToPayment(total))
  //   .then(paymentStatus => generateReceipt(paymentStatus))
  //   .then(finalStatus => console.log(finalStatus))
  //   .catch(err => console.error(err));




    // question
 addToCart(1).then( data => {
    return calculateTotal(data)
 })
 .then((total)  => {
    return proceedToPayment(total)
 }).then((paymentStatus) => {
     return generateReceipt(paymentStatus)
 }).then((finalStatus) => {
     console.log(finalStatus)
 }).catch((error) => {
    console.log(error)
 }).then(( data) =>{
   console.log("it will always excute because .catch return a error which is a string , string is a resolve promise  !!!")
 })