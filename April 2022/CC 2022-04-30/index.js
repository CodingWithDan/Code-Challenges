
//=========================================
  //Find the first non-consecutive number
 //========================================
//   Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
  
  function firstNonConsecutive (arr) {

  for (let i = 0; i < arr.length - 1; i++){
    if(arr[i + 1]  !== arr[i] + 1){
     return arr[i + 1]
    }
  
  }
    return null
  }
 
  OR

function firstNonConsecutive (arr) {

  for (let i = 1; i < arr.length; i++){
    if(arr[i - 1] + 1 !== arr[i]){
     return arr[i]
    }
 
  }
     return null
}


//=================
//Sum Mixed Array
//=================
//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x){
   return x.reduce((a, c) => a + +c, 0)
}

OR

function sumMix(x){
  return x.map(a => +a).reduce((a, b) => a + b);
}

//===============================
//Grasshopper - Check for factor
//===============================
// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.
// About factors

// Factors are numbers you can multiply together to get another number.

// 2 and 3 are factors of 6 because: 2 * 3 = 6

//     You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
//     You can use the mod operator (%) in most languages to check for a remainder

// For example 2 is not a factor of 7 because: 7 % 2 = 1

// Note: base is a non-negative number, factor is a positive number.


function checkForFactor (base, factor) {
 if ( base % factor === 0){
   return true;
 }
  else{
    return false
  }
}