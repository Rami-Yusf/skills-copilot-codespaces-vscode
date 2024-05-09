// Create web server
// Create a web server that listens to requests on port 3000 and serves comments from comments.js
// The comments should be served as JSON and the server should respond with a status code of 200

const http = require('http');
const comments = require('./comments');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});