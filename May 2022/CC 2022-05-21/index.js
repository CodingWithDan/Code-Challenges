//============================
//Moving Zeros To The End
//============================
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

//P: arr can equal any numbers, strings, booleans
//P: however, if arr equals a zero, remove them and place them at the end of the array
//P: everything else leave in place
//R: Return
//E: if arr = ['a', 0, 3, true], it should equal ['a', 3, true, 0]

function moveZeros(arr) {
    let newArr = []
    let zero = []
    for (let i = 0; i < arr.length; i++){
      if (arr[i] === 0){
        
        zero.push(arr[i])
      }
    
      else {
        newArr.push(arr[i])
      }
   
      }
   
  return (newArr.concat(zero))
   
  }
  
  moveZeros([1,2,0,1,0,1,0,3,0,1])

  //=============================
  //Function 2 - squaring an argument
  //=============================
  //Now you have to write a function that takes an argument and returns the square of it.

  function square(x){
    return x **2
  }

  //================================
  //Reversing Words in a String
  //================================
//   You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have traling spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

// Happy coding!

function reverse(string){
    return string.split(' ').reverse().join(' ')
   }


//====================================
//String Templates - Bug Fixing #5
//===================================
//Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!
//function buildString(...template){
//     return `I like #{template.join(',')}`;
// }

function buildString(...template){
    return `I like ${template.join(', ')}!`;
  }