'use strict'

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("<h1>Hi There!</h1>");
});

server.listen(8080);