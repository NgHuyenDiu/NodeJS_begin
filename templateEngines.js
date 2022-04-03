// EJS : truy cap trang de tim hieu cach nhung javascript vao html

var express = require('express');

var app = express();
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html', 'utf8');
})

app.get('/login', function(req, res) {
    res.sendFile(__dirname + '/login.html', 'utf8');
})

app.get('/register/:userId', function(req, res) {
    var infor = {
        name: 'huyen diu',
        age: '23',
        email: 'abc@gmail.com',
        hobbies: ['sach', 'playstation', 'programming'],
    }

    res.render('register', { id: req.params.userId, information: infor });
})
app.listen(8088);