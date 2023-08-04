

//========================================
//LC - 1122. Relative Sort Array
//========================================
// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

 

// Example 1:

// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

// Example 2:

// Input: arr1 = [28,6,22,8,44,17], arr2 = [22,28,8,6]
// Output: [22,28,8,6,17,44]

 

// Constraints:

//     1 <= arr1.length, arr2.length <= 1000
//     0 <= arr1[i], arr2[i] <= 1000
//     All the elements of arr2 are distinct.
//     Each arr2[i] is in arr1.

//Given 2 arrays. arr2 are all distinct numbers and will be found in arr1
//Return an array with all of the numbers in arr1 appearing in the order that's in arr2
//Any numbers not in arr2 place at the end of array in ascending order

//map through arr1. Compare it to arr2. If it equals arr2, place in newArr. 


var relativeSortArray = function(arr1, arr2) {
    let arr3 = []
    let notArr = []
 
    for(let i = 0; i < arr1.length; i++){
        if(!arr2.includes(arr1[i])){
            notArr.push(arr1[i])
        }
        else{
            arr3.push(arr1[i])
        }
    }

    notArr.sort((a, b) => a - b)
    arr3.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b))  //sorts based on the order of arr2!
    return arr3.concat(notArr)
};

relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6])