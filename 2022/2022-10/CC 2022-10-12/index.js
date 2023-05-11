//Two Sum
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//You may assume that each input would have exactly one solution, and you may not use the same element twice.

//You can return the answer in any order.


//receive arr of nums, and target num
//there will only be one solution. You may not use the same element twice


//arr of numbers -- not empty, always nums, whole, positive, will always have at least 2, number plus self will never equal target, will always have a solution.

//return indices of nums that add up to target

//example: [1, 2, 3, 4, 5], 9  => [3,4]  (indexes 3 and 4s numbers are 4 and 5 and they equal 9)
//[5, 6, 9], 11 => [0, 1]
//[22, 7, 100, 5], 12 => [1, 3]

function findIndices(arr, target){
    //grab a num
    for (let i = 0; i < arr.length; i++){
        //comarping outside num to internal numbs
        for (let j = 0; j < arr.length; j++){
            if (arr[i] + arr[j] === target && i !== j){
                return [i, j]
            }
        }
    }
}

console.log(findIndices([1, 2, 3, 4, 5], 9))  //[3,4]
console.log(findIndices([5, 6, 9], 11)) //[0, 1]
console.log(findIndices([22, 7, 100, 5], 12)) //[1, 3]