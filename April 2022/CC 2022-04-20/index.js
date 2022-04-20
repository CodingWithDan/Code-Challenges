//=======================
//Rock Paper Scissors!
//=======================
//Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


const rps = (p1, p2) => {
    if(p1 === 'scissors' && p2 === 'paper' ||
      p1 === 'rock' && p2 === 'scissors' ||
      p1 === 'paper' && p2 === 'rock'){
      return "Player 1 won!"
    }
    if(p1 === 'scissors' && p2 === 'rock' ||
      p1 === 'paper' && p2 === 'scissors' ||
      p1 === 'rock' && p2 === 'paper'){
      return "Player 2 won!"
       }
    else{
      return "Draw!"
    }
  };
  
  //=================
  //Short Long Short
  //=================
  // Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
  
  // Hint for R users:
  
  //     The length of string is not always the same as the number of characters
  
  // For example: (Input1, Input2) --> output
  
  function solution(a, b){
    
  
  if (a.length < b.length){
    return (a + b + a)
  }
    else{ 
    return (b + a + b)
  }
    }
  
  //Simplified Code
  
  function solution(a, b) {
    return a.length < b.length ? a + b + a : b + a + b
  }
  
  //=====================================
  //Function 3 - multiplying two numbers
  //=====================================
  // Implement a function which multiplies two numbers.
  
  function multiply(a, b){
    return a * b
  }
  
  //Simplified
  
  let multiply = (a, b) => a * b