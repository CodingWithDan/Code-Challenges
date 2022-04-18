//========================
//Fundamentals: Return
//=========================

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

// Please use the following function names:

// addition = add

// multiply = multiply

// division = divide (both integer and float divisions are accepted)

// modulus = mod

// exponential = exponent

// subtraction = subt

// Note: All math operations will be: a (operation) b

function add(a,b){
    return a + b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return a ** b
}
    
function subt(a,b){
    return a-b
}

//======================================
//To square(root) or not to square(root)
//=======================================
//Write a method, that will get an integer array as parameter and will process every number from this array.

// Return a new array with processing every number of the input-array like this:

// If the number has an integer square root, take this, otherwise square the number.
// Example

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]

// Notes

// The input array will always contain only positive numbers, and will never be empty or null.


function squareOrSquareRoot(array) {
    let newArr = []
    for (let i = 0; i < array.length; i++){
     if (Math.sqrt(array[i]) % 1 == 0){
        newArr.push(Math.sqrt(array[i]))
      }
      else {
        newArr.push(array[i] * array[i])
      }
    
    }
    return newArr
  }
  