'use strict'

function getUserDetails(userId) {
    return new Promise(function (resolve, reject) {
        resolve({
            userId: userId,
            addresses: {
                '56': {
                    addressId: 56,
                    pincode: '302028'
                },
                '322': {
                    addressId: 322,
                    pincode: '201304'
                }
            }
        })
    })
    //some IO operation
}

function getProductDetails(productIds) {
    //Some IO operation
    return new Promise((resolve, reject) => {
        resolve(productIds.map(p => ({productId: p, categoryId: 3})))
    })
}

function applyPromocode(userId, cart, productDetails) {
    return Promise.resolve({
        applied: true,
        discount: 75,
        code: 'NEW_USER_15',
        netAmount: 425
    })
}

function isDeliverable(pincode, products) {
    return Promise.resolve(true)
}

function createOrder(userId, cart, promo) {
    return Promise.resolve({
        orderId: "1234-123",
        status: "PENDING_PAYMENT"
    })
}

function consumeInventory(userId, cart) {
    return Promise.resolve()
}

let cartObj = {
    products: [
        {
            qty: 2,
            productId: 25,
            amount: 150
        },
        {
            qty: 1,
            productId: 23,
            amount: 100
        },
        {
            qty: 1,
            productId: 10,
            amount: 100
        }
    ],
    addressId: 56,
    promocode: 'NEW_USER_15',
    totalAmount: 500
}

placeOrder(11, cartObj)
    .then((order) => console.log("order: ", order))
    .catch((err) => console.log("got error: ", err))

function placeOrder(userId, cartObj) {

    //userDetails: to get pincode
    //is deliverable to this pincode - cart products
    //products belongs to which category -> getProductDetails
    //applyPromocode => cart, categoryId of products
    //placeOrder => 
    //consumeInventory => 

    let products = cartObj.products.map(p => p.productId)
    let orderResult

    return new Promise((resolve, reject) => {

        let pincode, productDetails

        Promise.all([getUserDetails(userId), getProductDetails(products)])
        .then((result) => {
            let userResult = result[0]
            productDetails = result[1]
            pincode = userResult.addresses[cartObj.addressId].pincode
            if (!pincode) {
                return reject(new Error("Invalid address found"))
            }
        })
        .then(() => Promise.all([isDeliverable(pincode, products), applyPromocode(userId, cartObj, productDetails)]))
        .then((res) => {
            if (!res[0]) {
                return reject(new Error("Products not deliverable to this address"))
            }
            if (!res[1].applied) {
                return reject(new Error("Promocode not applicable"))
            }
            return res[1]
        })
        .then((promoResult) => createOrder(userId, cartObj, promoResult))
        .then((res) => orderResult = res)
        .then(() => consumeInventory(userId, cartObj))
        .then(() => resolve(orderResult))

    })
}

