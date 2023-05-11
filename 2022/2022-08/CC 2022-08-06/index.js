//===================
//Your order, please
//===================
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
// Examples

// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

//P: Receive a string with random whole numbers between 1-9 inside random words.
//R: Return a string with the words in order
//E: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
//P: Create an empty array. Turn the string into an array. Iterate over each word. Iterate from 1 to 9. If the word includes 1
//P: ...push it into NewArray. Increase number by 1. Check across words again. Repeat until finished

function order(words){
    let wordz = words.split(' ')
    let newArr = []
    
    for(let i = 0; i <= wordz.length; i++){
      for(let j = 0; j < wordz.length; j++){
         if( wordz[j].includes(i) === true){
      newArr.push(wordz[j])
        
      }
    }
   
    }
    return newArr.join(' ')
  }
  
  order("is2 Thi1s T4est 3a")