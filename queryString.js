var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.use(express.static('stuff'));

app.get('/', function(req, res) {
    res.render('index');
})

app.get('/login', function(req, res) {
    res.render('login');
})

app.get('/register', function(req, res) {
    res.render('register');
})

app.get('/contact', function(req, res) {
    console.log(req.query);
    res.render('contact', { data: req.query });
})

app.listen(8888);