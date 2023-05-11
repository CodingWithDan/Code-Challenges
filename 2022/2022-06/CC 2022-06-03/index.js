//===============================
//Find the odd int
//================================
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.
// Examples

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

//P: Find the number that appears an odd number of times
//P: There will always be ONE integer that appears an odd number of times
//P: The number will not be a decimal but can be negative
//: R: We will return the number
//E: In an array of 3 numbers, if '2' appears twice, and 5 appears once, return 5 since it's odd

function findOdd(arr) {
    for(let i = 0; i < arr.length; i++){
      let count = arr.filter(x => x === arr[i]).length;
      if(count % 2 == 1){
        return arr[i];
      }
    }
  }