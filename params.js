// call module Express 
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('this is homepage');
});

app.get('/contact/:userId/send/:content', function(req, res) {
    res.send('customer have id ' + req.params.userId + ' send content ' + req.params.content);
});
app.listen(8088);