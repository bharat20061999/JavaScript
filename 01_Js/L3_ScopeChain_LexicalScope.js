// lexical scope is series
var b =22;
var d = 21;
function a() {
    console.log(b);    // b=22;
    function c() {
        console.log(d);   // d =21;
    }
}
 a();

 // block ->  {}
  {
    // compound statement 
    // wrapping multiple statement in single statement 
  }

// block scope  -> where we can access all variable and fns inside block.

{
    var a =10;
    let v = 1;
    const c = 40;
}