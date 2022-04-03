var http = require('http');
var file = require('fs');
// khoi tao server
var server = http.createServer(function(req, res) {
    console.log('nguoi dung yeu cau link ' + req.url);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        file.createReadStream(__dirname + '/index.html', 'utf8').pipe(res);
    } else if (req.url === '/login') {
        res.writeHead(200, { 'ContentType': 'text/html' });
        file.createReadStream(__dirname + '/login.html', 'utf8').pipe(res);
    } else if (req.url === '/api/register') {
        var register = [{ name: 'Diu' }, { age: '21' }, { username: 'diunguyen' }, { password: '123' }];
        res.writeHead(200, { 'ContentType': 'application/json' });
        res.end(JSON.stringify(register));
    } else if (req.url === '/404') {
        res.writeHead(404, { 'ContentType': 'text/html' });
        file.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
    }
});

server.listen(3333, '127.0.0.1');
console.log('server run on port 3333');