'use strict'

const fs = require('fs')

console.log("dirname value -> " + __dirname)
fs.rmSync(__dirname + "/sample.log")
// fs.writeFileSync(__dirname + "/sample.log", "This is the sample log. We're writing something to the file")