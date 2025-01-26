
// add to card --> proceed to payment ---> order successful


// Simulated list of items
const items = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Phone", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 }
  ];
  
  // Cart array
  let cart = [];
  
  // Add to Cart Function
  function addToCart(itemId, callback) {
    console.log("Adding item to cart...");
    setTimeout(() => {
      const item = items.find(i => i.id === itemId);
      if (!item) {
        return callback("Item not found!");
      }
      cart.push(item);
      console.log("Item added to cart:", item);
      callback(null, cart);
    }, 1000);
  }
  
  // Calculate Total Function
  function calculateTotal(cart, callback) {
    console.log("Calculating total...");
    setTimeout(() => {
      const total = cart.reduce((sum, item) => sum + item.price, 0);
      console.log("Total calculated:", total);
      callback(null, total);
    }, 1000);
  }
  
  // Proceed to Payment Function
  function proceedToPayment(total, callback) {
    console.log("Processing payment...");
    setTimeout(() => {
      if (total <= 0) {
        return callback("Invalid total amount!");
      }
      console.log("Payment successful! Amount paid:", total);
      callback(null, "Payment successful!");
    }, 2000);
  }
  
  // Generate Receipt Function
  function generateReceipt(message, callback) {
    console.log("Generating receipt...");
    setTimeout(() => {
      console.log("Receipt generated. Status:", message);
      callback(null, "Order completed!");
    }, 1000);
  }
  
  // Execution of steps with callback hell
  addToCart(1, (err, cart) => {
    if (err) {
      return console.error(err);
    }
    calculateTotal(cart, (err, total) => {
      if (err) {
        return console.error(err);
      }
      proceedToPayment(total, (err, paymentStatus) => {
        if (err) {
          return console.error(err);
        }
        generateReceipt(paymentStatus, (err, finalStatus) => {
          if (err) {
            return console.error(err);
          }
          console.log(finalStatus);
        });
      });
    });
  });
  

  