//==============================================================
//Use reduce() to calculate the sum of the values in an array
//=============================================================
//Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object.

function sum(array) {
    return array.reduce((agg, c) => agg + c, 0)
    
  }
  
  //=============================
  //Beginner Series #2 Clock
  //=============================
  
  // Clock shows h hours, m minutes and s seconds after midnight.
  
  // Your task is to write a function which returns the time since midnight in milliseconds.
  // Example:
  
  // h = 0
  // m = 1
  // s = 1
  
  // result = 61000
  
  function past(h, m, s){
    let nh = h * 3600000
    let nm = m * 60000
    let ns = s * 1000
    let total = nh + nm + ns
    return total
  }
  
  or 
  
  
  function past(h, m, s){
   return (h * 3600000) + (m * 60000) + (s * 1000)
  }
  
  //======================================
  //Beginner Series #1 School Paperwork
  //======================================
  //Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
  
  // Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
  // Example:
  
  // n= 5, m=5: 25
  // n=-5, m=5:  0
  
  function paperwork(n, m) {
    if (n < 0 || m < 0){
      return 0
    }
    else{
      return n * m
    }
  }
  
  or
  
  function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : n * m
  }
  