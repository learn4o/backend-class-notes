'use strict'

const http = require('http');

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        res.writeHead(200);
        res.end("<h1>Hi There!</h1>");
    } else if (req.url == "/login") {
        res.writeHead(200);
        res.end(`
        <table>
            <tr>
                <td>Enter details</td>
            </tr>
            <tr>
                <td>User name</td>
                <td><input type="text"/>
            </tr>
            <tr>
                <td>Password</td>
                <td><input type="password"/>
            </tr>
            <tr>
                <td><input type="button" text="Login"/>
            </tr>
        </table>`);
    } else {
        res.writeHead(404)
        res.end('')
    }
});

server.listen(8080);