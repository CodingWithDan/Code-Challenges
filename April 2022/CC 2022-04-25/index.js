//=======================
//Are You Playing Banjo?
//=======================

// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"

// Names given are always valid strings.

function areYouPlayingBanjo(name) {
    //if the first char of name === r or R, return plays banjo
    if(name[0] === 'r' || name[0] === 'R'){
      return `${name} plays banjo`
    }
    else{
      return `${name} does not play banjo`
    }
   
  }

  //===================
  // Counting sheep...
  //===================

//   Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]

// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

function countSheeps(arrayOfSheep) {
    let counter = 0;
    for (let i = 0; i <= arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        counter += 1;
      }
     
    }
     return counter;
  }

  //===========================
  //Is n divisible by x and y?
  //===========================
  //Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

  function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false
  }
  

  //=================
  //Keep Hydrated!
  //=================
//   Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

function litres(time) {
    let water =  Math.floor(time * 0.5)
    
    return water;
  }

  //================================
  //Basic Mathematical Operations
  //===============================
//   Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.
// Examples(Operator, value1, value2) --> output

// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

function basicOp(operation, value1, value2)
{
  if (operation == '+'){
    return value1 + value2
  }
  if (operation == '-'){
        return value1 - value2
  }
  if (operation == '*'){
        return value1 * value2
  }
  else{
    return value1/value2
  }
}

//ALTERATE SOLUTION

function basicOp(operation, value1, value2){
  switch (operation){
      case '+':
      return value1 + value2;
      break;
      
     case '-':
      return value1 - value2;
      break;
      
      case '*':
      return value1 * value2;
      break;
      
      case '/':
      return value1 / value2;
      break;
  }
}
