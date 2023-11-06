//=========================================
//CW: Return Two Highest Values in List
//=========================================

// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
    let nums = [...new Set(arr)].sort((a,b) => b- a)
    
    return nums.length < 2 ? nums : [nums[0], nums[1]]
  }
  
  twoHighest([15, 20, 20, 17])

  //ALT

  function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
  }