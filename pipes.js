var http = require('http');
var file = require('fs');

var server = http.createServer(function(req, res) {

    res.writeHead(200, { 'ContentType': 'text/html' });
    var docluong = file.createReadStream(__dirname + '/index.html', 'utf8');
    docluong.pipe(res);
});
server.listen(8888, '127.0.0.1');
console.log('server running on port 8888');