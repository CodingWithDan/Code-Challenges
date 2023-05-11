// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
  


function majorityElement(arr){
    let elem = {}
    let count = 0
    let majElem = arr[0]
    
    for (const num of arr){
      elem[num] = elem[num] + 1 || 1
    }
    
    for (const n in elem){
      if (elem[n] > count){
        count = elem[n]
        majElem = n
     
        //grab each property and it's gonna be n (first one is 3)
      }
    }
    
  }