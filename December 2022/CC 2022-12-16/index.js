// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]
// Output: true
// Example 2:

// Input: nums = [1,2,3,4]
// Output: false
// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true



// Hint:  HASH MAP PATTERN!  As you loop, check to see if element is already in hash map

for (let i = 0; i < nums.length; i++){
    if(nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])){
        return true
    }
    return false
}


containsDuplicate(([1,2,3,1]), true)
containsDuplicate(([1,2,3,4]), false)
containsDuplicate(([1,1,1,3,3,4,3,2,4,2]), true)

//ALT

function containsDupes(arr){
let numsNap = {}
for (let i = 0; i < arr.length; i++){
    let num = arr[i]
if(numsMap[num]){
    //if the number already exists in the object, end the loop and return true
    return true
}
else{
    numsMap[num] = true
    //if it wasn't in the object, add the number to it
}

}

return false
}
