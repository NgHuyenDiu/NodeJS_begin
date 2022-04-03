// call module Express 
var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.send('this is homepage');
});

app.get('/contact', function(req, res) {
    res.send('this is contact');
});
app.listen(8088);