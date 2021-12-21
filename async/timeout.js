'use strict'

console.log("this is line 1")

const fun = function() {
    console.log("this is line 2")
}

setTimeout(fun, 1000)

console.log("this is line 3")