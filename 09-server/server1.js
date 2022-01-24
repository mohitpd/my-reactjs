// Basic Http Server with Plain Text Response

const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/plain'});
    res.end('Hello this is the new server response');
});

const port = 8282;
server.listen(port, '127.0.0.1');
console.log(`The Server is running on ${port}`);
