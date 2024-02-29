
//=======================
//CS: All Longest Strings
//=======================


// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// solution(inputArray) = ["aba", "vcd", "aba"].

// Input/Output

//     [execution time limit] 4 seconds (js)

//     [memory limit] 1 GB

//     [input] array.string inputArray

//     A non-empty array.

//     Guaranteed constraints:
//     1 ≤ inputArray.length ≤ 10,
//     1 ≤ inputArray[i].length ≤ 10.

//     [output] array.string

//     Array of the longest strings, stored in the same order as in the inputArray.


const { max } = require("lodash");

function solution(inputArray) {

    let arr = []
    let len = Math.max(...(inputArray.map(el => el.length)))
    
    for(let i = 0; i < inputArray.length; i++){
        if(inputArray[i].length == len){
             arr.push(inputArray[i])
        }
       
    }
    return arr
}
