//==================================
//Simple Fun #176: Reverse Letter
//==================================

// Task

// Given a string str, reverse it and omit all non-alphabetic characters.
// Example

// For str = "krishan", the output should be "nahsirk".

// For str = "ultr53o?n", the output should be "nortlu".
// Input/Output

//     [input] string str

// A string consists of lowercase latin letters, digits and symbols.

//     [output] a string

function reverseLetter(str) {
    let newStr = str.split('').reverse().join('')
    return newStr.split('').map(x=>x.charCodeAt(0) < 97 || x.charCodeAt(0) > 122 ? "" : x).join('')
    
    
  }
  
  //ALT
  
  function reverseLetter(str) {
    return str.split('')
              .reverse()
              .filter(val => /[a-zA-Z]/.test(val))
              .join('');  
  }