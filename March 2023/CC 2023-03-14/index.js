//================
//Keypad horror
//================

// Having two standards for a keypad layout is inconvenient!
// Solve the horror of unstandardized keypads by providing a function that converts computer input to a number as if it was typed on a phone.

// Example:
// "789" -> "123"

// Notes:
// You get a string with numbers only

function computerToPhone(numbers){
    return numbers.split('').map(function(x){
      if(x == 7){
        return 1
      }
      else if(x == 8){
        return 2
      }
      else if(x == 9){
        return 3
      }
      else if(x == 1){
        return 7
      }
      else if(x == 2){
        return 8
      }
      else if(x == 3){
        return 9
      }
      else{
        return x
      }
    }).join('')
  }
  
  //ALT
  
  function computerToPhone(numbers) {
    return numbers.split('').map(function(d) {return "0789456123"[d]; }).join('');
  }