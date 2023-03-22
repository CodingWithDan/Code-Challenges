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
  