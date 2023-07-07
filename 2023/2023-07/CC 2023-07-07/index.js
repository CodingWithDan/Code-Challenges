//==================================================================
//LC. 1493. Longest Subarray of 1's After Deleting One Element
//==================================================================

// Given a binary array nums, you should delete one element from it.

// Return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.

 

// Example 1:

// Input: nums = [1,1,0,1]
// Output: 3
// Explanation: After deleting the number in position 2, [1,1,1] contains 3 numbers with value of 1's.

// Example 2:

// Input: nums = [0,1,1,1,0,1,1,0,1]
// Output: 5
// Explanation: After deleting the number in position 4, [0,1,1,1,1,1,0,1] longest subarray with value of 1's is [1,1,1,1,1].

// Example 3:

// Input: nums = [1,1,1]
// Output: 2
// Explanation: You must delete one element.

 

// Constraints:

//     1 <= nums.length <= 105
//     nums[i] is either 0 or 1.

var longestSubarray = function(nums) {
    if(!nums.includes(0)){
        return nums.length - 1
    }
    let highest = 0
    let ones = nums.join('').split('0')

    for(let i = 0; i < ones.length - 1; i++){
        if((ones[i].split('').reduce((sum, curr) => sum + +curr, 0)) + (ones[i + 1].split('').reduce((sum, curr) => sum + +curr, 0)) > highest){
            highest = (ones[i].split('').reduce((sum, curr) => sum + +curr, 0)) + (ones[i + 1].split('').reduce((sum, curr) => sum + +curr, 0))
        }
    }

    return highest
  
};

longestSubarray([0,1,1,1,0,1,1,0,1])