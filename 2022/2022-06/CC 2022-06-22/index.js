//=========================
//Reverse words
//=========================
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    let space = str.split(' ')
    let arr = []
    for (let i = 0; i < space.length; i++){
      arr.push(space[i].toString().split('').reverse().join(''))
    }
     return arr.join(' ')
   }