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
  }