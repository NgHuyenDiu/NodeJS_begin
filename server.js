var http = require('http');
// khoi tao server
var server = http.createServer(function(req, res) {
    res.writeHead(200, { 'ContentType': 'application/json' });
    var doituong = {
        ten: 'toan',
        nghenghiep: 'designer',
        age: '21',
        que: 'Thai binhhhh'
    };
    res.end(JSON.stringify(doituong));

});

server.listen(3333, '127.0.0.1');
console.log('server run on port 3333');