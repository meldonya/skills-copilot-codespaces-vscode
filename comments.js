// Create web server and listen on port 8080
// Respond to all requests with "Hello, World!"
// Respond to GET requests to /comments with a list of comments
// Respond to POST requests to /comments by adding a new comment
// Respond to DELETE requests to /comments by deleting a comment
// Respond to PUT requests to /comments by updating a comment

var http = require('http');
var url = require('url');
var comments = [];

http.createServer(function (req, res) {
    var url_parts = url.parse(req.url);

    if (req.method === 'GET' && url_parts.pathname === '/comments') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end(JSON.stringify(comments));
    } else if (req.method === 'POST' && url_parts