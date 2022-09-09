//======================
//Maximum Multiple
//======================

//P: Receive 2 numbers, 
//P: N is divisible by the first number (divisor). There will always be divisor
//P: N is less than or equal to the second number (bound)
//P: N is greater than 0 and will always be positive
//R: return find the largest number that the first number goes into, while also making sure this number doesn't exceed the second number
//E: (2, 7) --> 6
//E: (10,50) --> 50
//E: (37,200) --> 185
//P: run a while loop. If divisor has yet to exceed or equal the bound, add the divisor with itself. Else, return the divisor 

function maxMultiple(divisor, bound){
    let i = divisor
    
    while(i <= bound){
    i = divisor + i
  }
    return i - divisor
    }
    
  
  //ALT
  
  function maxMultiple(divisor, bound){
    return bound-bound%divisor
  }