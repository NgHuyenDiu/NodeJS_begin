// import module event
var suKien = require('events');
var hamchinh = require('util');
// create EvenEmmiter
// var test = new suKien.EventEmitter();

// test.on('something', function(msg) {
//     console.log(msg);
// });

// test.emit('something', 'hello guy, how are you ');

var person = function(name) {
    this.name = name;
}
hamchinh.inherits(person, suKien.EventEmitter);

var janes = new person('toan');
var blackfox = new person('hai');
var people = [janes, blackfox];

// for each when create that person sây hello guy
people.forEach(function(person) {
    person.on('talk', function(msg) {
        console.log(person.name + ' said that: ' + msg);
    })
})

blackfox.emit('talk', 'hello');
janes.emit('talk', 'hi Diu');