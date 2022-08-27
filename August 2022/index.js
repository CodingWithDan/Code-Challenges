//=========================
//Anagram Detection
//=========================
  
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
// Examples

//     "foefet" is an anagram of "toffee"

//     "Buckethead" is an anagram of "DeathCubeK"
  
 //P: Receive two arguments, each containing one word string, with varying casings
//R: If the words are anagrams of one another, return true. Return false otherwise
//E: "foefet" is an anagram of "toffee"
//E: "Buckethead" is an anagram of "DeathCubeK"
//P: create a new variable for both words. Make them both lowercase, split the letters, sort them in order, and join them.
//P: If the words are the same, return true. Else false

var isAnagram = function(test, original) {
    let word1 = test.toLowerCase().split('').sort().join('')
    let word2 = original.toLowerCase().split('').sort().join('')
    
    return word1 == word2
  };
  