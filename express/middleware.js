'use strict'

const express = require('express')
const app = express()

function logRequest(req, res, next) {
    console.log(`Request method: ${req.method}, url: ${req.url} at time: ${new Date()}`)
    next()
}

app.use(logRequest)

app.get('/', function (req, res) {
  res.send({
      'firstName': 'Tarun',
      'lastName': 'Chabarwal'
  })
})

app.post('/', function (req, res) {
    res.send('<h1>post method is called at /</h1>')
})

app.put('/', function (req, res) {
    res.send("PUT method called at /")
})

app.get('/videos', function (req, res) {
    console.log('path params', req.params)
    console.log('query: ', req.query)
    res.send('videos route called')
})


app.get('/confidential', function (req, res, next) {
    console.log("Some confidential work is going on")
    next()
}, function (req, res) {
    res.send("THIS is the ******* response")
})

app.use(function (req, res) {
    res.status(404)
    res.send('no routes defined')
})

app.listen(8080)