'use strict'

const fs = require('fs').promises

fs.writeFile('message.txt', 'Hello from node.js', 'utf-8')
    .then(() => console.log("Write successful"))
    .catch((err) => console.log("there was some error: ", err))

// function doSomething() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             reject(new Error("custom error"))
//         }, 1000)
//     })
// }

// doSomething()
//     .then(function (msg) {
//         console.log(msg)
//     })
//     .catch(function (err) {
//         console.log("Error received: ", err)
//     })

// console.log("Message should have printed by now")