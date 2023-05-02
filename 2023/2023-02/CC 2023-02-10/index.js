 
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
  