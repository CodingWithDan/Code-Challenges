//=========================
//Find the capitals
//=========================
  
// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example

// Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );

 //P: Receive one single string word as an argument, with random casing sizes
//R:Return an ordered list containing the indexes of all of the capital letters in the string
//E: 'CodEWaRs' --> [0,3,4,6]
//P: Split the word into individual letters in an array
//P: Create an empty array
//P: Iterate over the split word array
//P: check if the letter equals the same letter but in lower case form. If it doesn't, push to empty array

var capitals = function (word) {
    let wordz = word.split('')
      let arr = []
    
    for (let i = 0; i < wordz.length; i++){
      if(word[i] !== word[i].toLowerCase()){
        arr.push(i)
      }
    }
    return arr
  }; 