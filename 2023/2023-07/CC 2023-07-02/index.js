//========================
//LC. 1. Two Sum
//========================

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

 

// Constraints:

//     2 <= nums.length <= 104
//     -109 <= nums[i] <= 109
//     -109 <= target <= 109
//     Only one valid answer exists.

var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
       if(nums[i] + nums[i + 2] == target){
           return [i, i + 2]
       }
       if(nums[i] + nums[i + 1] == target){
           return [i, i + 1]
       }
       if(nums[i] + nums[i + 3] == target){
           return [i, i + 3]
       }
       if(nums[i] + nums[i + 4] == target){
           return [i, i + 4]
       }
       if(nums[i] + nums[i + 5] == target){
           return [i, i + 5]
       }
       if(nums[i] + nums[i + 6] == target){
           return [i, i + 6]
       }
       if(nums[i] + nums[i + 7] == target){
           return [i, i + 7]
       }
       if(nums[i] + nums[i + 8] == target){
           return [i, i + 8]
       }
       if(nums[i] + nums[i + 9] == target){
           return [i, i + 9]
       }
       if(nums[i] + nums[i + 10] == target){
           return [i, i + 10]
       }
    }
};

//ALT

var twoSum = function (nums, target) {

    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j]
            }
        }
    }

};