//==============================
//Alternate capitalization
//==============================

// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

function capitalize(s){
    let newArr = []
    let newAr = []
    
  
    
     for (let i = 0; i < s.length; i++){
      if(i % 2 !== 0){
        newArr += s[i].toLowerCase()
      }
      else{
        newArr += s[i].toUpperCase()
      }
    }
    
      for (let i = 0; i < s.length; i++){
      if(i % 2 === 0){
        newAr += s[i].toLowerCase()
      }
      else{
        newAr += s[i].toUpperCase()
      }
    }
    return [newArr, newAr]
  };

  //ALT

  function capitalize(s){
    const odd = s.split("").map((l, i) => i % 2 !== 0 ? l.toUpperCase() : l).join("");
    const even = s.split("").map((l, i) => i % 2 === 0 ? l.toUpperCase() : l).join("");
    return [even, odd];
  };