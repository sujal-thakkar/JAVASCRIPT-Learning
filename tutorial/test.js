// Home Work (Namaste JS!) - Make a promise chain of an e commerce. where there will be 4 APIs.
// 1. createOrder
// 2. showOrderSummary
// 3. proceedToPayment
// 4. updateWallet
// and you have to tackle the errors as well(gracefully)

const cartItems = [
    { name: 'shoe', price: 500 },
    { name: 'tshirt', price: 300 },
    { name: 'jeans', price: 600 },
    { name: 'cap', price: 150 },
    { name: 'sweater', price: 850 }
];

function validateCart(cartItems) {
    if (cartItems) return true;
    else return false;
}

function createOrder(cartItems) {
    return new Promise((resolve, reject) => {
        if (validateCart) {
            const orderId = 12345
            resolve(`order is created, orderid: ${orderId}`)
        }
        else {
            reject(console.error('cart is not valid, order can\'t be created'));
        }
    })
}

function showOrderSummary(orderId) {
    return new Promise((resolve, reject) => {
        if (orderId) {
            const total = 2400;
            resolve(`your total is ₹${total}`);
        }
        else {
            reject('error: can\'t create order summary');
        }
    })

}

function proceedToPayment() {
    if (showOrderSummary()) return true;
    else return false;
}

function updateWallet() {
    if (proceedToPayment()) return true;
    else return false;
}

new Promise((resolve, reject) => {

})
