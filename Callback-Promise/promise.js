const cart = ["pyjama", "shoes"];

const promise = createORDER(cart);

promise.then(function (orderId) {
    console.log(orderId);
    // proceedtoPayment(orderId)
})

    .catch(function (orderId) {
        console.log("order id is not valid")
    })
function createORDER(cart) {
    const pr = new Promise(function (resolve, reject) {

        if (!validatecart(cart)) {
            const err = new Error("cart is not valid")
            reject(err);
        }

        //logic for create order
        const orderId = 1234556;
        if (orderId) {
            setTimeout(function () {
                resolve(orderId);
            }, 5000)
        }

        return;

    })
    return pr;
}
function validatecart(cart) {
    return true;
}





