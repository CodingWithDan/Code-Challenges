//==================
//No oddities here
//==================

// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

function noOdds( values ){
    let arr = []
    values.forEach(x => x % 2 == 0 ? arr.push(x) : x)
    return arr
  }

  //ALT

  function noOdds( values ){
    return values.filter(x => x % 2 === 0)
   }