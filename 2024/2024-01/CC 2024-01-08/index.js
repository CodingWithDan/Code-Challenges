//******************************
//Two Functions - one object
//*******************************
// Is it possible to create functions A and B so that new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A;
// let b = new B;

// alert( a == b ); // true

// If it is, then provide an example of their code.
let obj = {}

function A() {
  this.item1 = 'pizza'
  return obj;
}
function B() { 
  this.item2 = 'pizza'
  return obj;
}

let a = new A;
let b = new B;

console.log( a == b ); // true