getName();
console.log(getName); // copy whole code
console.log(x);   // undefined
// getName2();  // gives error due to arrow fn , it's treat as variable
// console.log(getName2); // we cann't use arrow fn before declaration

var x = 5;

function getName() {
    console.log("hello javascript");
}

const getName2 = () =>{
    console.log("hello js ");
}