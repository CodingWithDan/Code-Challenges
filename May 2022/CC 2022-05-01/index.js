//=========================
//Descending Order
//=========================
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
// Examples:

// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n){
    let m = String(n)
    return Number(m.split('').sort((a, b) => b - a).join(''))
  }

  OR
  function descendingOrder(n){
  return Number((String(n).split('').sort((a, b) => b - a).join('')))
  }

  Or 
  function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
  }
 

//====================
  //You're a square!
//====================

// You like building blocks. You especially like building blocks that are squares. 
// And what you even like more, is to arrange them into a square of square building blocks!

// However, sometimes, you can't arrange them into a square. Instead, you end up with an ordinary rectangle! 
// Those blasted things! If you just had a way to know, whether you're currently working in vain… Wait! 
// That's it! You just have to check if your number of building blocks is a perfect square.

var isSquare = function(n){
    let s = Math.sqrt(n)
    if (n === 0){
      return true;
    }
    else if(n % s === 0){
      return true
    }
    else{
      return false; 
    }
  }