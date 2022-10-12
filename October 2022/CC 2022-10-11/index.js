//==========================================
//Huntober: Array Week Challenge - Day 1
//==========================================
  
//   Today's task is to write a function that will check equality between 2 arrays with a particular structure.

// The arrays will:

//     Be of equal size
//     Will each contain some number (X) arrays
//     Each inner array will contain that same number (X) primitive elements

// All the nested primitives within each array must strictly match to return a true result. Any mismatches will return false.

// For example:

// // each of these arrays have 3 nested arrays of 3 strings each 
// const arr1 = [['a','b','c'],['d','e','f'],['g','h','i']]

// const arr2 = [['a','b','c'],['d','e','f'],['g','h','i']]
// const arr3 = [['a','B','c'],['d','E','f'],['g','H','i']]
// const arr4 = [['a','b','c'],['g','h','i'],['d','e','f']]

// // if we were to use our function to compare all the possible pairs
// // ONLY arr1 vs arr2 would return true

// checkEquality(arr1, arr2) => true
// checkEquality(arr1, arr3) => false
// checkEquality(arr1, arr4) => false
// checkEquality(arr2, arr3) => false
// checkEquality(arr2, arr4) => false
// checkEquality(arr3, arr4) => false

// Good luck! Check back tomorrow for the next challenge of the week!
  
function checkEquality(one, two){
    let count = 0
     for (let i = 0; i < one.length; i++){
       if(one[i] !== two[i]){
         count++
       }
     }
    if (count === 0){
      return true
    }
    else{
      return false
    }
  }
  
  let arrOne = [['a','b','c'],['d','e','f'],['g','h','i']]
  let arrTwo = [['a','b','c'],['d','e','f'],['g','h','i']]
  let arrThree = [['a','B','c'],['d','E','f'],['g','H','i']]
  let arrFour = [['a','b','c'],['g','h','i'],['d','e','f']]
  
  const arr1 = arrOne.join(',').split(',')
  const arr2 = arrTwo.join(',').split(',')
  const arr3 = arrThree.join(',').split(',')
  const arr4 = arrFour.join(',').split(',')
    
  checkEquality(arr1, arr3)