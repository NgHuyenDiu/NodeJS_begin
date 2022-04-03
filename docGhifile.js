var File = require('fs');
// chay file dong bo
console.log('Bat dau');
var readFile = File.readFileSync('text.txt', 'utf8');
console.log('Thuc hien ' + readFile);
//var writeFile = File.writeFileSync('testwrite.txt', readFile);
console.log('Ket thuc');

// khong dong bo
console.log('khong dong bo **************');
console.log('Bat dau');
// chay file k dong bo: function thuc hien cuoi cung 
var readFileNot = File.readFile('text.txt', 'utf8', function(err, data) {
    if (true) console.log('ok' + data);
    else console.log('error');
});
console.log('Thuc hien :' + readFile);

//var writeFile = File.writeFileSync('testwrite.txt', readFile);
console.log('Ket thuc');