
//=======================
//CW: Digits explosion
//=======================

// Given a string made of digits [0-9], return a string where each digit is repeated a number of times equals to its value.

// Examples
// "312" should return "333122"
// "102269" should return "12222666666999999999"

function explode(s) {
    let arr = ''
    
    for (let i = 0; i < s.length; i++){
      arr += s[i].repeat(s[i])
    }
    
    return arr
  }
  
  //ALT
  
  function explode(s) {
    return s.split("").map((e) => e.repeat(+e)).join("");
  }
  
  