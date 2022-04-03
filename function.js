// function trong node js
// goi function duoc goi
function callFunc(func) {
    func();
}
sayGoodbye();

// normal function : goi bat ky noi nao
function sayGoodbye() {
    console.log("goood bye:");
}

//function expression : goi sau khi duoc khai bao
var sayHello = function() {
    console.log("hello");
}
sayHello();
var sayHi = function() {
    console.log("hi");
}
callFunc(sayHello);
callFunc(sayHi);