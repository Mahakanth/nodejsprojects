const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);

    if (req.url === '/home') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome home');
    } else if (req.url === '/about') {
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to About Us page');
    } else(req.url === '/node')
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Welcome to my Node.js project');
     
});

server.listen(4000);
