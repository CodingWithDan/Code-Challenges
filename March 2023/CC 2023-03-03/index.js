//=========================================
//Reverse every other word in the string
//=========================================

// Reverse every other word in a given string, then return the string. Throw away any leading or trailing whitespace, while ensuring there is exactly one space between each word. Punctuation marks should be treated as if they are a part of the word in this kata.

//P: Reverse every other word in a string. Only one space between each word. No leading or trailing whitespace
//R: return the string with every other word in it reversed
//E:
//Hello my good friend! --> Hello ym good !dneirf
//P:I'm gonna want to use trim() which will remove that excess whtiespace
//We're gonna want to turn this into an array to make it iterable, and then afterwards turn it back into a string.

function reverse(str){
    return str.trim().split(' ').map((e, i)=> i % 2 === 0 ? e : e.split('').reverse().join('')).join(' ')
  }
  
  reverse('Hello my good friend!')