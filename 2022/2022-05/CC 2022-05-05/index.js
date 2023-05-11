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
  
  
  
  
  
