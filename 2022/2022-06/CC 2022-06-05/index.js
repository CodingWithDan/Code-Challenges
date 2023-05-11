//============================
//Sum of Digits / Digital Root
//=============================

// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    let x = n.toString().split('').reduce((acc, curr) => acc + +curr, 0)
    
    if (x >= 10){
        let y = x.toString().split('').reduce((acc, curr) => acc + +curr, 0)
        if (y >= 10){
          return y.toString().split('').reduce((acc, curr) => acc + +curr, 0)
        }
        else{
          return y
        }
        }
    else{
      return x
    }
    }

    //OR

    function digital_root(n) {
        if (n < 10) return n;
        
        return digital_root(
          n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
      }


      //=======================
      //Ones and Zeros
      //======================
//       Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

// Examples:

// Testing: [0, 0, 0, 1] ==> 1
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 0, 1] ==> 5
// Testing: [1, 0, 0, 1] ==> 9
// Testing: [0, 0, 1, 0] ==> 2
// Testing: [0, 1, 1, 0] ==> 6
// Testing: [1, 1, 1, 1] ==> 15
// Testing: [1, 0, 1, 1] ==> 11

const binaryArrayToNumber = arr => {
  
    return parseInt(arr.join(''), 2);
  };


//=======================================
//Sum without highest and lowest number
//=======================================
// Task

// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.
// Example

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation

// If an empty value ( null, None, Nothing etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array) {
  
    if (array && array.length > 2){
      let x = array.sort((a, b) => a - b)
      x.pop()
      x.shift()
      return x.reduce((acc, cur) => acc + cur, 0)
      }
    else{
      return 0
    }

    //OR
    
      }
      function sumArray(array) {
        if (array == null || array > 1){
          return 0
        }
        else{
        
        let x = array.sort((a, b) => a - b)
        x.pop()
        x.shift()
        return x.reduce((acc, cur) => acc + cur, 0)
        }
      }    