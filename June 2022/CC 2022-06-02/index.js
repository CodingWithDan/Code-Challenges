//======================
//5 without alphanums!!!
//======================
// Write a function/proc/lambda called _ that always returns 5.

// Sounds easy right? Just bear in mind that you can only use the following characters:

// ~!@#$%^&*()-_+=[]\{}|:;"'<,>.?/`

// Kata inspired by 5 without numbers !!.

// Good luck :)

_=()=>!+[]+!![]+!![]+!![]+!![];


//====================================
//Stop gninnipS My sdroW!
//===================================
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata).
// Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"


function spinWords(string){
 let arr = string.split(' ') 
 let grew = []
  
for (let i = 0; i <= arr.length - 1; i++){
  if (arr[i].length >= 5 ){
    grew.push(arr[i].toString().split('').reverse().join(''))
  }
  else{
    grew.push(arr[i]);
  }
 
}
   return grew.join(' ');
  }

// OR
function spinWords(words){
  return words.split(' ').map(function (word) {
    return (word.length > 4) ? word.split('').reverse().join('') : word;
  }).join(' ');
}