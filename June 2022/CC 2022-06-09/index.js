//==========================
//FIXME: Replace all dots
//==========================
// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.
// Task

// Fix the bug so we can all go home early.
// Notes

// String str will never be null.
// var replaceDots = function(str) {
//     return str.replace(/./, '-');
//   }

var replaceDots = function(str) {
    return str.split('.').join('-')
    }

//=================================
//Sum of differences in array
//===============================
// Your task is to sum the differences between consecutive pairs in the array in descending order.
// Example

// [2, 1, 10]  -->  9

// In descending order: [10, 2, 1]

// Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

// If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).

function sumOfDifferences(arr) {
    let newArr = arr.sort((a, b) => b - a)
     let sum = 0
     
     for (let i = 0; i < newArr.length - 1; i++){
       sum += newArr[i] - newArr[i + 1]
     }
     return sum
   }
   