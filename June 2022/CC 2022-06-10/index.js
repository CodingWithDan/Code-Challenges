//==============================
//Complementary DNA
// //================================
// Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more: http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". You function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).

// More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)

// Example: (input --> output)

// "ATTGC" --> "TAACG"
// "GTAT" --> "CATA"

function DNAStrand(dna){
    let nad = dna.split('')
    let mask = []
    
    for (let i = 0; i < nad.length; i++){
      if(nad[i] === 'A'){
        mask.push('T')
      }
      if(nad[i] === 'T'){
        mask.push('A')
      }
      if(nad[i] === 'G'){
        mask.push('C')
      }
      if(nad[i] === 'C'){
        mask.push('G')
      }
    }
    return mask.join('')
  }
  
  
  //=========================
  //Isograms
  //===========================
  //An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
  
  // Example: (Input --> Output)
  
  // "Dermatoglyphics" --> true
  // "aba" --> false
  // "moOse" --> false (ignore letter case)
  
  
  function isIsogram(str){
   
  let stri = str.toLowerCase()
  
  for (let i = 0; i < stri.length; i++){
    for (let j = i + 1; j < stri.length; j++){
      if (stri[j] === stri[i]){
        return false
      }
    }
  }
      return true
    
    
    
    
    
  //==========================
  //Two to One
  //==========================
  //  Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
  // Examples:
  
  // a = "xyaabbbccccdefww"
  // b = "xxxxyyyyabklmopq"
  // longest(a, b) -> "abcdefklmopqwxy"
  
  // a = "abcdefghijklmnopqrstuvwxyz"
  // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
  
  
    
    function longest(s1, s2) {
    let s3 = s1.concat(s2).split('').sort()
    let arr = []
    for (let i = 0; i < s3.length; i++){
      if(s3[i] !== s3[i + 1]){
        arr.push(s3[i])
      }
    }
    return arr.join('')
  }
} 