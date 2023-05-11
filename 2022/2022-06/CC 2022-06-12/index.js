//=======================
//Filling an array (part 1)
//==========================
// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

// Note: The parameter is optional. So you have to give it a default value.


const arr = N => {
    let newArr = []
    for (let i = 0; i < N; i++){
      newArr.push(i)
    }
      return newArr
      }


//====================================================================================
//Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
//====================================================================================
// Description:

// Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
// Examples

// replace("Hi!") === "H!!"
// replace("!Hi! Hi!") === "!H!! H!!"
// replace("aeiou") === "!!!!!"
// replace("ABCDE") === "!BCD!"

function replace(s){
    let r = s.split('')
    let arr = []
    
    for (let i = 0; i < r.length; i++){
      if(r[i] ==='a' || r[i] ==='e' || r[i] ==='i' || r[i] ==='o' || r[i] ==='u'
        || r[i] ==='A' || r[i] ==='E' || r[i] ==='I' || r[i] ==='O' || r[i] ==='U'){
        arr.push('!')
      }
      else{
        arr.push(r[i])
      }
    }
    return arr.join('')
    
  }