//=========================
//Sort by Last Char
//=========================

// Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.

// If two words have the same last letter, they returned array should show them in the order they appeared in the given string.

// All inputs will be valid.


//receive a string of words with spaces --> sort the words based on the last letters in each of those words in alphabetical order
//if letters are the same, sort, by which appears first
//so first we want to split into an array so it can be properly sorted.
//Then when we sort, we want to target the last letters in each word. How do we do that?
//We use charCodeAt() which grabs the ASCII value passed in of an element of a given index. 
// --> we input the index of the last letter (a.length - 1)

function last(x){
 
  return x.split(' ').sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))
}



//My initial solution was below

function last(x){
  return x.split(' ').sort((a, b) => a.slice(-1) - b.slice(-1))
}

//the reason this doesn't work is because we're comparing letters. It will only return a boolean value, and operates using a compare function and needs a number in orer to exeucte properly