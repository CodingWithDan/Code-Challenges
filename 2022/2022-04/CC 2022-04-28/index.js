//==============================================================
//Use reduce() to calculate the sum of the values in an array
//=============================================================
//Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object.

function sum(array) {
    return array.reduce((agg, c) => agg + c, 0)
    
  }
 