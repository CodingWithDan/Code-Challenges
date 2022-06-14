//=============================
//Vowel remover
//=============================
// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// Examples

// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//     don't worry about uppercase vowels
//     y is not considered a vowel for this kata

function shortcut (string) {
    return string.split('').map(x => {
      if (x == "a" || x == "e" || x == "i" || x == "o" || x == "u"){
        string.slice(x, 1)
      }
      else{
        return x
      }
    }).join('')
  }
  
  
  //===========================
  //Palindrome Strings
  //=========================
  // Palindrome strings
  
  // A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.
  
  // Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.
  // Examples(Input ==> Output)
  
  // "anna"   ==> true
  // "walter" ==> false
  // 12321    ==> true
  // 123456   ==> false
  
  function isPalindrome(line) {
   let rev = line.toString().split('').reverse().join('')
   
   if (line == rev){
     return true
   }
    else{
      return false
    }
  }
  