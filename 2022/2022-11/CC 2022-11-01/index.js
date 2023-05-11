//=========================
//String transformer
//=========================

// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

  
function stringTransformer(str) {
    let reverse = str.split(' ').reverse().join(' ').split('')
    let newArr = []
   for(const x of reverse){
     x === x.toUpperCase() ? newArr.push(x.toLowerCase()) : newArr.push(x.toUpperCase())
  
   }
      
    return newArr.join('')
  }
  
  stringTransformer('Example string')
  
  //OR
  
  
  function stringTransformer(str) {
   return str.split(' ').reverse().join(' ').split('').map(x => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join('')
    
  
  }
  
  stringTransformer('Example string')
  