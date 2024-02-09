//==================================================================================================
//LC: 1343. Number of Sub-arrays of Size K and Average Greater than or Equal to Threshold
//==================================================================================================

// Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

 

// Example 1:

// Input: arr = [2,2,2,2,5,5,5,8], k = 3, threshold = 4
// Output: 3
// Explanation: Sub-arrays [2,5,5],[5,5,5] and [5,5,8] have averages 4, 5 and 6 respectively. All other sub-arrays of size 3 have averages less than 4 (the threshold).

// Example 2:

// Input: arr = [11,13,17,23,29,31,7,5,2,3], k = 3, threshold = 5
// Output: 6
// Explanation: The first 6 sub-arrays of size 3 have averages greater than 5. Note that averages are not integers.

 

// Constraints:

//     1 <= arr.length <= 105
//     1 <= arr[i] <= 104
//     1 <= k <= arr.length
//     0 <= threshold <= 104



var numOfSubarrays = function(arr, k, threshold) {
    //find the sum of the first k units 
    let sum = 0;
    for (let i = 0; i < k; i++) {
        sum += arr[i]; //(2+2+2)
    }

    let average = sum / k;
    let counter = 0;
    //update counter
    if (average >= threshold) {
        counter++;
    }
    //for the rest of the array
    for (let j = k; j < arr.length; j++) { 
        //slide the window up by one element
        sum -= arr[j - k];  //gets rid of the last element that was part of our last subset
        sum += arr[j];
        //calculate the average of tehse k elements
        let currAverage = sum / k;
        //update counter
        if (currAverage >= threshold) {
            counter++;
        }
    }
    return counter;
};


console.log(numOfSubarrays([2,2,2,2,5,5,5,8], 3, 4))