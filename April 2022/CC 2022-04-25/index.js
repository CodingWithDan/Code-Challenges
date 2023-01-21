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



  //===========================
  //Is n divisible by x and y?
  //===========================
  //Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

  function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false
  }
  


