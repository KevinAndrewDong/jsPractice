'use strict';
var a = 20;
function foo () {
    var a = 1;
    var obj = {
        a: 10,
        c: this.a + 20,
        fn: function () {
            return this.a;
        }
    }
    return obj.c;

}

console.log(window.foo()); //c里面的那个this,这时候因为是window调用，所以指向this,this.a = 20
console.log(foo());