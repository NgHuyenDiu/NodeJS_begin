var file = require('fs');
// xoa file
// file.unlink('testwrite.txt', function(err, data) {
//     if (true) console.log('ok');
//     else console.log('error');
// });

// tao folder
// file.mkdirSync('foldertest');
// file.unlinkSync('results.txt');
file.mkdir('public', function() {
    file.readFile('text.txt', 'utf8', function(err, data) {
        file.writeFileSync('./public/results.txt', data);
    });
});