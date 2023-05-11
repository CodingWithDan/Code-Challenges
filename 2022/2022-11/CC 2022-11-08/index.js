//===============================
//Sum of Minimums!
//===============================

//Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.

// For Example:

// [ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
// , [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
// , [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
// ]

// So the function should return 26 because the sum of the minimums is 1 + 5 + 20 = 26.

// Note: You will always be given a non-empty list containing positive values.

// ENJOY CODING :)



//arrays are not limited to a certain number
//arrays will always contain whole numbers, no negatives, floats, or characters or anything weird.
//We can do either Math.min for each array, or do a sort and take the first index
//afterwards, we add them all up

//map the array --> go through each element(or array)
//sort each element of arrays, and take the minimum of each nested array
//reduce


function sumOfMinimums(arr) {
    return arr.map(e => e.sort((a, b) => a -b)[0]).reduce((agg, curr) => agg + curr, 0)
  }
  
  sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]])
  
  
  
  //ALT
  
  function sumOfMinimums(arr) {
    return arr.reduce((agg, curr) => agg + Math.min(...curr), 0)
  }
  