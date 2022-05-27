//===================
//Count by X
//===================
// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

// Examples:

// countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
// countBy(2,5) === [2,4,6,8,10]

function countBy(x, n) {
    let z = [];
    for (let i = x; i <= x * n; i = i + x){
      z.push(i)
    }
    return z;
  }
  
  
  //=========================
  //Remove exclamation marks
  //=========================
  // Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
  
  function removeExclamationMarks(s) {
    let j = []
    s.split('').map((x) => x !== "!" ? j.push(x) : 0)
    return j.join('');
  }
  
  
  //=========================
  //Is the string uppercase?
  //=========================
  // Is the string uppercase?
  // Task
  
  // Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:
  
  // "c".isUpperCase() == false
  // "C".isUpperCase() == true
  // "hello I AM DONALD".isUpperCase() == false
  // "HELLO I AM DONALD".isUpperCase() == true
  // "ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
  // "ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
  
  // In this Kata, a string is said to be in ALL CAPS whenever it does not contain any lowercase letter so any string containing no letters at all is trivially considered to be in ALL CAPS.
  
  
  String.prototype.isUpperCase = function(x) {
    let y = x.toUpperCase()
   if(x === y){
     return true
   }
    else{
      return false
    }
  }
  //ABOVE IS INCORRECT, I TRANSLATED IT TO A STRING PROTOTYPE BELOW, WHICH IS CORRECT
  
  String.prototype.isUpperCase = function(){
    if(this.toString() == this.toUpperCase()){
      return true;
    } else{
      return false;
    }
  }
  