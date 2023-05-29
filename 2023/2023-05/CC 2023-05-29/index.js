//=====================================
//Get number from string
//=====================================
// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:

// getNumberFromString(s)

function getNumberFromString(s) {
    let arr = ''
    for (let i = 0; i < s.length; i++){
      if(s[i] == '1' || s[i] == '2' || s[i] == '3' || s[i] == '4' || s[i] == '5' || s[i] == '6' || s[i] == '7' || s[i] == '8' || s[i] == '9' || s[i] == '0' ){
        arr += s[i]
      }
    }
    return Number(arr)
  }
  
  //ALT
  
  function getNumberFromString(s) {
    return Number(s.split('').filter(a => a <= '9' && a >= '0').join(''))
    
    
  }