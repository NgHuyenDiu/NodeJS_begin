//vai ham co ban trong nodejs
console.log("hello word");
setTimeout(function() {
    console.log("after 3 seconds ")
}, 3000);
var time = 0;
var timer = setInterval(function() {
    time += 2;
    console.log(time + "loop");
    if (time > 7) {
        clearInterval(timer);
    }
}, 2000);