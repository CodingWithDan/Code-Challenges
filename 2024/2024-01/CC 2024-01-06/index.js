//------------------------------------------------
//SPACE REVIEW
//------------------------------------------------
//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
  
  let arr = [5, 10, 15, 20, 25, 30]
alert( arr.reduce((cum, x) => cum + x, 0) )


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
  
let hello = [5, 10, 15, 20, 25, 30] 
 function numbs(x){
   let newNumbs = x.map(y => y * y)
    return newNumbs
  }


console.log(numbs(hello))

//Create a function that takes string
//Print the reverse of that string to the console
  
  function str(input){
    let reverse = input => input.split('').reverse().join('')
    return reverse
  }

  console.log(str("Hello world"))
  
  
//Create a function that takes in a string
//Alert if the string is a palindrome or not
  
 const palin = str => alert(str === str.split('').reverse().join(''))
    
  