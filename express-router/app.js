'use strict'

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('GET method called on /')
})

app.post('/', function (req, res) {
    res.send('post method is called at /')
})

app.put('/', function (req, res) {
    res.send("PUT method called at /")
})

app.get('/videos', function (req, res) {
    console.log('path params', req.params)
    console.log('query: ', req.query)
    res.send('videos route called')
})

// app.put('/videos/:videoId/comments/:commentId', function (req, res) {
//     console.log('path params', req.params)
//     console.log('query: ', req.query)
//     res.send('videos/comment route called')
// })

app.get('/confidential', function (req, res, next) {
    console.log("Some confidential work is going on")
    next()
}, function (req, res) {
    res.send("THIS is the ******* response")
})

app.all('/list', function (req, res) {
    res.send("Hi there")
})

app.route('/videos/:videoId/comments/:commentId')
.put(function (req, res) {
    res.send(req.params)
})
.delete(function (req, res) {
    res.send(req.params)
})

app.listen(8080)