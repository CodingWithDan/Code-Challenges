
//=========================
//CW: Sum of all arguments
//=========================

// Write a function that finds the sum of all its arguments.

// eg:

// sum(1, 2, 3) // => 6
// sum(8, 2) // => 10
// sum(1, 2, 3, 4, 5) // => 15

function sum() {
    var total = 0;
    for(var i in arguments){
      total += arguments[i];
    }
    return total;
  }
  //ALT
  
  function sum(...arr) {
    return arr.reduce((sum, cum) => sum + cum)
  }
  