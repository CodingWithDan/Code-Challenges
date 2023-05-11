//====================================
//Unfinished Loop - Bug Fixing #1
//====================================
// Unfinished Loop - Bug Fixing #1

// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

// function createArray(number){
//   var newArray = [];
  
//   for(var counter = 1; counter <= number;){
//     newArray.push(counter);
//   }
  
//   return newArray;
// }


function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }
  
  
  //=========================
  //Switch it Up!
  //========================
  
  // When provided with a number between 0-9, return it in words.
  
  // Input :: 1
  
  // Output :: "One".
  
  // If your language supports it, try using a switch statement.
  
  function switchItUp(number){
  if(number === 0){
    return "Zero"
  }
    if(number === 1){
    return "One"
  }
    if(number === 2){
    return "Two"
  }
    if(number === 3){
    return "Three"
  }
    if(number === 4){
    return "Four"
  }
    if(number === 5){
    return "Five"
  }
    if(number === 6){
    return "Six"
  }
    if(number === 7){
    return "Seven"
  }
    if(number === 8){
    return "Eight"
  }
    if(number === 9){
    return "Nine"
  }
  }
  
  //OR
  
  function switchItUp(number){
  switch(number){
      case 0: return 'Zero';
      case 1: return 'One';
      case 2: return 'Two';
      case 3: return 'Three';
      case 4: return 'Four';
      case 5: return 'Five';
      case 6: return 'Six';
      case 7: return 'Seven';
      case 8: return 'Eight';
      case 9: return 'Nine';
  }
  }
  
  //===============================
  //All Star Code Challenge #18
  //===============================
  // This Kata is intended as a small challenge for my students
  
  // All Star Code Challenge #18
  
  // Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.
  
  // If no occurrences can be found, a count of 0 should be returned.
  
  // ("Hello", "o")  ==>  1
  // ("Hello", "l")  ==>  2
  // ("", "z")       ==>  0
  
  // Notes:
  
  //     The first argument can be an empty string
  //     The second string argument will always be of length 1
  
  
  function strCount(str, letter){  
    let counter = 0
    for (let i = 0; i <= str.length; i++){
      if(str[i] === letter){
        counter++
      }
    }
    return counter
  }
  
  //OR
  
  function strCount(str, letter){  
    return str.split('').filter(x => x === letter).length
  }
  
  
  //============================================
  //Grasshopper - Terminal game move function
  //=============================================
  // Terminal game move function
  
  // In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.
  
  // Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
  // Example:
  
  // move(3, 6) should equal 15
  
  function move (position, roll) {
    return (roll * 2) + position
  }
  
  