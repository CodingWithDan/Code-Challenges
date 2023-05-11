//=============================
//Well of Ideas - Easy Version
//=============================

// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.


function well(x){
    let y = 0
    for (let i = 0; i <= x.length; i++){
  if (x[i] === 'good'){
    y++
  }
      }
      if (y === 1 || y === 2) {
    return 'Publish!'
  }
    else if (y > 2){
      return 'I smell a series!'
    }
    else{
      return "Fail!"
    }
      
    }
  
  OR
  
  const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }
  
  
  
  
  
  //========================
  //Find the Remainder
  //========================\
  // Task:
  
  // Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.
  
  // Division by zero should return NaN.
  
  
  function remainder(n, m){
  if (n === 0 && n > m){
    return 0
  }
    if (m === 0 && m > n){
    return 0
  }
  if (n === 0 || m === 0){
    return NaN
  }
   if (n > m){
     return n % m
   }
  if (m > n){
    return m % n 
  }
  if (m === n){
    return 0
  } 
  }
  
  
  OR
  
  function remainder(a, b){
    if (a > b){
      return a % b 
      }
    else{
      return b % a;
      }
  }