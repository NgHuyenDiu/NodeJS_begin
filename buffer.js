var file = require('fs');

var docLuong = file.createReadStream(__dirname + '/text.txt', { encoding: 'utf8' });
// ghi luong
var ghiluong = file.createWriteStream(__dirname + '/writeme.txt');

docLuong.on('data', function(chuck) {
    console.log('Doc luong nao: ');
    console.log(chuck);

    console.log('Ghi luong nao: ');
    ghiluong.write(chuck);

})