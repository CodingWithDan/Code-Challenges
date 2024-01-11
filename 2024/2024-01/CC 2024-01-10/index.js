//*************************
//Creates New Calculator
//************************
// Create a constructor function Calculator that creates objects with 3 methods:

//     read() asks for two values using prompt and remembers them in object properties.
//     sum() returns the sum of these properties.
//     mul() returns the multiplication product of these properties.

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );sdf

function Calculator(){
  this.read = function(){
    let val1 = +prompt("Give me a number", 0);
    let val2 = +prompt("Give me a number", 0);
        }

  this.sum =function(){
    return this.val1 + this.val2
  }

  this.mul = function(){
    return this.val1 * this.val2

  }
  
}
