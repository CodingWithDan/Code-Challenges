//******************************************
//Create new Accumulator
//******************************************
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

//     Store the “current value” in the property value. The starting value is set to the argument of the constructor startingValue.
//     The read() method should use prompt to read a new number and add it to value.

// In other words, the value property is the sum of all user-entered values with the initial value startingValue.

function Accum(startingValue){
  this.valx = startingValue
  
  this.read = function(){
    this.valx += +prompt("Gimme a new number:", 0)
  }
  
}

let accumulator = new Accum(3);

accumulator.read();
console.log(accumulator.value);
accumulator.read();
console.log(accumulator.valx);