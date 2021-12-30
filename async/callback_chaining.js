'use strict'

function getUserDetails(userId, cb) {
    //some IO operation
    return cb(null, {
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
}

function getProductDetails(productIds, cb) {
    //Some IO operation
    return cb(null, productIds.map(p => ({productId: p, categoryId: 3})))
}

function applyPromocode(userId, cart, productDetails, cb) {
    return cb(null, {
        applied: true,
        discount: 75,
        code: 'NEW_USER_15',
        netAmount: 425
    })
}

function isDeliverable(pincode, products, cb) {
    return cb(null, true)
}

function createOrder(userId, cart, promo, cb) {
    return cb(null, {
        orderId: "1234-123",
        status: "PENDING_PAYMENT"
    });
}

function consumeInventory(userId, cart, cb) {
    return cb(null);
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

placeOrder(11, cartObj, function (err, data) {
    console.log("order: ", data)
})

function placeOrder(userId, cartObj, cb) {
    //userDetails: to get pincode
    //is deliverable to this pincode - cart products
    //products belongs to which category -> getProductDetails
    //applyPromocode => cart, categoryId of products
    //placeOrder => 
    //consumeInventory => 

    getUserDetails(userId, function (err, userDetails) {
        if (err) {
            console.log("Error with user details service: " + err)
            return cb(err)
        }

        let products = cartObj.products.map(p => p.productId)

        let pincode = userDetails.addresses[cartObj.addressId].pincode

        if (!pincode) {
            return cb(new Error("Invalid address found"))
        }

        isDeliverable(pincode, products, function (err, result) {
            if (err) {
                return cb(err)
            }

            if (!result) {
                return cb("Products not deliverable to this address")
            }

            getProductDetails(products, function (err, productDetails) {
                if (err) {
                    return cb(err)
                }

                applyPromocode(userId, cartObj, productDetails, function (err, promoResult) {
                    if (err) {
                        return cb(err)
                    }

                    if (!promoResult.applied) {
                        return cb(new Error("Promocode not applicable"))
                    }

                    createOrder(userId, cartObj, promoResult, function (err, orderResult) {
                        if (err) {
                            return cb(err)
                        }

                        consumeInventory(userId, cartObj, function (err, data) {
                            if (err) {
                                return cb(err)
                            }

                            return cb(null, orderResult)
                        })
                    })
                })
            })
        })    
    })

}

