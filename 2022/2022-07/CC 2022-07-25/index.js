//===================================================================================
//Exclamation marks series #2: Remove all exclamation marks from the end of sentence
// //===================================================================================
// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

function remove (string) {  
    let newString = string.split('')
    while(newString[newString.length - 1] === "!"){
      newString.pop()
      
    }
    return newString.join('');
  }
  