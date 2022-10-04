//=================
//The Vowel Code
//=================
// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.
  
function encode(string) {
    let split = string.split('')
    let newStr = ''
    for(let i = 0; i < split.length; i++){
      if(split[i] === 'a'){
        newStr += 1
      }
      else if(split[i] === 'e'){
        newStr += 2
      }
       else if(split[i] === 'o'){
        newStr += 4
      }
       else if(split[i] === 'i'){
        newStr += 3
      }
       else if(split[i] === 'u'){
         newStr += 5
      }
      else{
        newStr += split[i]
      }
    }
    return newStr
    
  }
  encode('h2114')
  
  
  function decode(string) {
    let split = string.split('')
    let newStr = ''
    for(let i = 0; i < split.length; i++){
      if(split[i] === '1'){
        newStr += 'a'
      }
      else if(split[i] === '2'){
        newStr += 'e'
      }
       else if(split[i] === '4'){
        newStr += 'o'
      }
       else if(split[i] === '3'){
        newStr += 'i'
      }
       else if(split[i] === '5'){
         newStr += 'u'
      }
      else{
        newStr += split[i]
      }
    }
    return newStr
  }
  encode('h2114')
  
  //OR
  
  const table = ['a', 'e', 'i', 'o', 'u']
  const encode = string => string.split('').map(x => table.indexOf(x) + 1 || x).join('')
  const decode = string => string.split('').map(x => table[Number(x) - 1] || x).join('')