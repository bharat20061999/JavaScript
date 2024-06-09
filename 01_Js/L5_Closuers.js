// it is a function , function and lexical scope binding together.
// funtion along with lexical scope form a closure.

function x () {
    var a = 20;
    function y() {
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);

z(); 