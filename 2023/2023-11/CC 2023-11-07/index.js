//==========================
//CW: Exclamation marks series #4: Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string
//==========================

// Description:

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"


function remove (string) {
    let arr = ''
    
    for (let i = 0; i < string.length; i++){
      if(string[i] !== '!'){
        arr += string[i]
      }
    }
    
    return arr + '!'
  }

  //alt

  const remove = s => s.split("!").join("") + "!";