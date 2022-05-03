//===================
//Volume of a Cuboid
//===================

// Bob needs a fast way to calculate the volume of a cuboid with three values: 
// length, width and the height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
    static getVolumeOfCuboid(length, width, height) {
     return length * width * height
    }
  }


  //=======================
  //Plural
  //======================
//   We need a simple function that determines if a plural is needed or not. It should take a number, and return true if a plural should be used with that number or false if not. This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

//     You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.
function plural(n) {
 
    if (n === 1){
       return false
     }
     else{
       return true
     }
   }

   or

   function plural(n) {
 
    return n === 1 ? false : true;
      }

//======================
//Bin to Decimal
//======================
//Complete the function which converts a binary number (given as a string) to a decimal number.

function binToDec(bin){
    return parseInt(bin, 2)
  }



  //=================
  //Area of a Square
   //================
//   Complete the function that calculates the area of the red square, 
//   when the length of the circular arc A is given as the input. 
//   Return the result rounded to two decimals.

function squareArea(A){
    return Number(((2 * A / 3.1416)**2).toFixed(2))
  }


  //===================
  //Is the date today
  //===================
// Write a simple function that takes a Date as a parameter and returns a Boolean representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
    let curr = new Date().toDateString()
    let today = date.toDateString()
   
    if (today === curr){
      return true;    
    }
    else {
      return false;
    }
  }
  