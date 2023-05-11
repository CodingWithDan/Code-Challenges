//**Lost Without A Map**

// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//Parameter: Is it always integers? What about special characters? An empty array ever?
//Return: Return a new arr with each value doubled
//Examples: If we are given [2, 3, 4], should return [4, 6, 8]
//If we are given [5, 6, 7], should return [8, 10, 12]
//If we are given [9, 22], should return [18, 44]

//P:
//Make a function that takes in an array



function maps(x){
    return x.map(n => n*2)
   }

// without arrow function

function maps(x){
    return Array.map(function (e){
        return e*2
    })
}
   