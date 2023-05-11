
//===================
//Simple Pig Latin
//===================
//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.


//P: Receive a string with a varying amount of words.
//P: Can include punctuation marks, but they are not effected
//P: No specifications on numbers

//R: return the original string of multiple words, separated by spaces, but with the first letter of each word at the end, followed by an "ay"

//E: 'Pig latin is cool' --> igPay atinlay siay oolcay
//E: 'Hello world !' --> elloHay orldway !

//P: --Split the sentence into an array of words --> iterate over each word, shift the front of each letter and add it to the end. Check if there's a punctuation mark.

function pigIt(str){
    let marks = ['.', '!', '?', '"', ',']
    let result = str.split(' ')
    return result.map(word => word.slice(1) + word[0] + (marks.includes(word) ? '' : 'ay')).join(' ')
  }
  
  pigIt('Pig latin is cool')