'use strict'

function doSomething() {
    setTimeout(async () => {
        // sayHi().then((msg) => console.log(msg))
        let msg = await sayHi()
        console.log("Msg:::" + msg)
    }, 1000)
}

async function sayHi() {
    return "Hi There"
}

doSomething()