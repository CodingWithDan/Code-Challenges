//======================
//Closest elevator
//======================
// Given 2 elevators (named "left" and "right") in a building with 3 floors (numbered 0 to 2), write a function elevator accepting 3 arguments (in order):

//     left - The current floor of the left elevator
//     right - The current floor of the right elevator
//     call - The floor that called an elevator

// It should return the name of the elevator closest to the called floor ("left"/"right").

// In the case where both elevators are equally distant from the called floor, choose the elevator to the right.

// You can assume that the inputs will always be valid integers between 0-2.

// Examples:

// elevator(0, 1, 0); // => "left"
// elevator(0, 1, 1); // => "right"
// elevator(0, 1, 2); // => "right"
// elevator(0, 0, 0); // => "right"
// elevator(0, 2, 1); // => "right"

function elevator(left, right, call){
    if(call === left && call !== right){
      return 'left'
    }
    else if(call === right && call !== left){
      return 'right'
    }
    else if(call === left && call === right){
      return 'right'
    }
    else if (left == 1 && call == 0 && right == 2){
      return 'left'
    }
    else if (left == 1 && call == 2 && right == 0){
      return 'left'
    }
    else {
      return 'right'
    }
  }
  
  //ALT
  
  function elevator(left, right, call) {
    return Math.abs(call - left) < Math.abs(call - right) ? 'left' : 'right';
  }