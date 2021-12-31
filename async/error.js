'use strict'

function division(a, b) {
    if (b == 0) {
        throw new Error("Division by 0 is not allowed")
    }
    return a / b
}

let a = 10
let b = 0


// try {
//     console.log(`${a}/${b} = ${division(a, b)}`)
// } catch (e) {
//     console.log("Got error: ", e.message)
// }

// function divisionAsync(a, b, cb) {
//     setTimeout(() => {
//         if (b == 0) {
//             return cb(new Error("Divide by 0 not allowed in asyc"))
//         }
//         cb(null, a/b)
//     }, 1000);
// }

function divisionAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b == 0) {
                return reject(Error("Divide by 0 not allowed in asyc"))
            }
            resolve(a/b)
        }, 1000);
    })
}

async function testMe(a, b) {
    try {
        console.log(`${a}/${b} = `)
        // divisionAsync(a, b)
        //     .then((res) => console.log(res))
        //     .catch((err) => console.log("promise err: ", err.message))

        let res = await divisionAsync(a, b)
        console.log(res)
        console.log("just for testing")
    } catch (e) {
        console.log("Got error: ", e.message)
    }
}

testMe(a, b)