//======================
//Sum of Multiples
//=====================
//Your Job

// Find the sum of all multiples of n below m
// Keep in Mind

//     n and m are natural numbers (positive integers)
//     m is excluded from the multiples

function sumMul(n,m){
   
    if (n >= m){
      return "INVALID"
    }
   let z = 0
    for (let i = n; i < m; i += n){
     z += i
  }
    return z
    }
  
  
  
  
  
  //=====================
  //Filter Out the Geese
  //======================
  // Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
  
  // The geese are any strings in the following array, which is pre-populated in your solution:
  
  function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
    
   return birds.filter(b => !geese.includes(b));
  };
  