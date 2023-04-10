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
  