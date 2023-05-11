//=========================
//Anagram Detection
//=========================
  
// What is an anagram? Well, two words are anagrams of each other if they both contain the same letters. For example:

// 'abba' & 'baab' == true

// 'abba' & 'bbaa' == true

// 'abba' & 'abbba' == false

// 'abba' & 'abca' == false

// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']

// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']

// anagrams('laser', ['lazing', 'lazy',  'lacer']) => []

// Note for Go
// For Go: Empty string slice is expected when there are no anagrams foun
  
 //P: Receive two arguments. A string containing a word (no specifications on casing), and an array of multiple one word strings
//R: If any of the words in the array are anagrams of the first argument, place it in a new array and return it. Else, return the empty array
//E: anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']
//E: anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']) => ['carer', 'racer']
//E: anagrams('laser', ['lazing', 'lazy',  'lacer']) => []
//P: Create an empty array to place the anagrams in
//P: Take the first word, and create a new variable, ana, and lowercase it, split, sort and join it back together.
//P: Iterate through the array of words, and compare ana to each word after having lowercased, split, sort, and joined them.
//P: If there are matches, push to new array.

function anagrams(word, words) {
 
    let ana = word.toLowerCase().split('').sort().join('')
    let arr =[]
     
    for (let element of words) {
      if(element.toLowerCase().split('').sort().join('') === ana){
        arr.push(element)
      }
  }
  
        return arr
  }