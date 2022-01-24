// Basic Http Server with HTML Response

const http = require('http');
const fs = require('fs');

let HTML = fs.readFileSync(`${__dirname}/index.html`);

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-type': 'text/html'});
    res.end(HTML);
});

const port = 8282;
server.listen(port, '127.0.0.1');
console.log(`The Server is running on ${port}`);
