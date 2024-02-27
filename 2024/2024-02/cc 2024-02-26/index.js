//=======================
UPLOADED//LC: 704. Binary Search
//=======================

// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

 

// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1

 

// Constraints:

//     1 <= nums.length <= 104
//     -104 < nums[i], target < 104
//     All the integers in nums are unique.
//     nums is sorted in ascending order.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

//the following works just fine, but it's not proper binary search methood
var search = function(nums, target) {
    if(nums.includes(target)){
        return nums.indexOf(target)
    }
    else{
        return -1
    }
};

//the below is how to properly binary search

var search = function(nums, target) {
    let left = 0
    let right = nums.length - 1
    
    //we want to always track the middle number. 
    while (left < right) {
    const middle = left + Math.floor((right - left + 1) / 2);
  
      //if our target number is less than the number in the middle, our new end point becomes the middle.
    if (target < nums[middle]) {
      right = middle - 1
    }
       //if our target number is greater than the number in the middle, our new start point becomes the middle.
    else{
        left = middle
    }
}

  return nums[left] === target ? left : -1
};
