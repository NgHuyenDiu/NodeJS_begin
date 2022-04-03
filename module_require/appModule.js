var dem1 = require('./module_requires');
console.log("This is app");
console.log(dem1(['abc', 'abc']));


var test = require('./pattern');
console.log(test.demtest(['abc', 'abc']));
console.log(test.tinhTest(2, 3));
console.log(test.chaoTest());