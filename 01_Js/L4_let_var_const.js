 // let and const declarations are hoisted

// console.log(a);   // getting reference error because hoisted in separate space block in js
// => user gets referce error when he try to access variable in temporal dead zone.
// Temporal dead zone is the time blw let hosited and till assign or declear some vlaue. 
 let a =10;
 var b =100;
 a = 20;
 console.log(a);
//   let a = 1000;  -> gets syntax error ;
 // window.b   -> 100;
 // window.a   -> undefined;
 // we can't redeclare let and const once it has been declare.  
 const d =100;  

  // type error  const a; a=100;
