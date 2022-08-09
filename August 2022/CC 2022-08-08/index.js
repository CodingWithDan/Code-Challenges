//==============
//Detect Pangram
//==============
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


//P: Receive a string and determine if it uses every letter of the alphabet -- case insensitive. Ignore numbers and punctuations
//R: Return a boolean value of true or false
//E: "The quick brown fox jumps over the lazy dog." --> true
//E: "This is not a pangram." --> false
//P: create new Set with every letter of the alphabet(this does not allow repeats, and creates finite elements)
//P: Convert the string to lowercase and use for... of to iterate through it
//P: If a character in the string matches that of the new Set, delete it from the new Set.
//P: Once finished iterating, check the number of unqiue elements remaining in the Set by doing .size. If it's 0, it's true

function isPangram(string){
    let letters = new Set('abcdefghijklmnopqrstuvwxyz')
    for (let x of string.toLowerCase()){
      letters.delete(x)
    }
    if (letters.size == 0){
        return true
      }
      else {
        return false
      }
    
  }


  //OR


//Create a list of all of the letters
//iterate through every letter in the array. Return true if the string includes every letter
  function isPangram(string){
    const charz = [...'abcdefghijklmnopqrstuvwxyz']
    
    return charz.every(letter => string.toLowerCase().includes(letter))
  }
  
  