'use strict'

const fs = require('fs')

fs.writeFile('message.txt', 'Hello Node.js', 'utf8', function(err) {
    if (err) {
        console.log("Some error occurred" + err)
    } else {
        console.log("File successfully saved")

        fs.readFile('message.txt', function (err, data) {
            if (err) {
                console.log("there is some error reading the file")
            } else {
                console.log("File contents:\n", data.toString())
            }
        })

        console.log("File successfully saved---------- to debug")
        
    }
});