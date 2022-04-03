var dem = function(arrMang) {
    return 'there are' + arrMang.length + ' element in array';
};

// module.exports.demtest = function(arrMang) { // cach 2
//     return 'there are' + arrMang.length + ' element in array';
// };
var tinh = function(a, b) {
    return `Sum is ${a+b}`;
}

var chao = function() {
        console.log("hello = chao");
    }
    //module.exports.name_export = name_function_express
    //module.exports.demtest = dem; // cach 1
    // module.exports.tinhTest = tinh;
    // module.exports.chaoTest = chao;

module.exports = {
    demtest: dem,
    tinhTest: tinh,
    chaoTest: chao,

}