//==================================
//LC - 2485. Find the Pivot Integer
//==================================
// Given a positive integer n, find the pivot integer x such that:

//     The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.

// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

 

// Example 1:

// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.

// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.

// Example 3:

// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.

 

// Constraints:

//     1 <= n <= 1000

//receive a positive number
//return a positive number, or if there's no pivot number, return -1
//Calculate the sum from 1 to n. For ex, n = 8 will have a sum of 36
//Another loop will be called that will go to n
//Decrease the sum each time with sum-= i
//Check if the second loop total is equal to sum. If equal return, i. If not reutrn -1


function pivotInteger(n) {

    let sum = 0
    let tots = 0
   
    for (let i = 1; i <= n; i++){
        sum += i
    }
   
    for (let i = 1; i <= n; i++){
        sum -= i
        if(sum == tots){
            return i
        }
        else{
       tots += i
        }
    }   
   return - 1
   }
   
   pivotInteger(8)