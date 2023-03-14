//==================
//Reversed sequence 
//==================
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let rev = [];
    for (let i = n; i > 0; i--){
      rev.push(i)
    } 
    return rev;
  };
  
  //=====================
  //Remove String Spaces
  //=====================
  // Simple, remove the spaces from the string, then return the resultant string.
  
  function noSpace(x){
  return x.split(' ').join('')
  }
  
  //=========================
  //Get the mean of an array
  //=========================
  // It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
  
  // Return the average of the given array rounded down to its nearest integer.
  
  // The array will never be empty.
  
  function getAverage(marks){
   return Math.floor((marks.reduce((agg, c) => agg + c, 0))/marks.length)
  }
  
  
  //=============================
  //Convert a Boolean to a String
  //=============================
  // Implement a function which convert the given boolean value into its string representation.
  
  // Note: Only valid inputs will be given.
  
  function booleanToString(b){
    if (b === true){
      return 'true'
    }
   else {
      return 'false'
    }
  }
  
  //===============
  //Calculate BMI
  //===============
  //Write function bmi that calculates body mass index (bmi = weight / height2).
  
  // if bmi <= 18.5 return "Underweight"
  
  // if bmi <= 25.0 return "Normal"
  
  // if bmi <= 30.0 return "Overweight"
  
  // if bmi > 30 return "Obese"
  
  function bmi(weight, height) {
    let bmi = weight/(height**2)
    if ( bmi <= 18.5){
       return "Underweight"
    }
    if (bmi <= 25.0 ){
      return "Normal"
    }
    if (bmi <= 30.0 ){
      return "Overweight"
    }
    else {
      return "Obese"
    }
  }
  
  //===================
  //Array Plus Array
  //==================
  // I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
  
  // P.S. Each array includes only integer numbers. Output is a number too.
  
  function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum, current) => sum + current, 0) + arr2.reduce((agg, c) => agg + c, 0); //something went wrong
  }
  