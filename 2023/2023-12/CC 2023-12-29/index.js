//=================
//CW: Loop Array
//=================

// Write a function loopArr that loops array in a specified direction by some number of steps.

// By "looping array" it means removing elements from start and adding them to end of array one-by-one (if direction is "left") or removing from end and adding them to start one by-one (if direction is "right").

// Function should accept three arguments:

//     array - non-empty array of elements of any type;
//     direction - 'left' or 'right' - tells how to loop array;
//     steps - number of steps to loop array (less or equal to array size);

// Examples:

//     loopArr([1, 5, 87, 45, 8, 8], 'left', 2);

// should produce result: [87, 45, 8, 8, 1, 5]

//     loopArr([1, 5, 87, 45, 8, 8], 'right', 2);

// should produce result: [8, 8, 1, 5, 87, 45]


function loopArr(arr, direction, steps) {
    const i = direction == 'left' ? steps : -steps;
    return arr.slice(i).concat(arr.slice(0, i));
  }

//ALT
function loopArr(array, direction, steps) {
    // Ensure valid inputs
    if (!Array.isArray(array) || array.length === 0 || (direction !== 'left' && direction !== 'right') || steps <= 0) {
      return array;
    }
  
    // Perform array looping based on the specified direction and number of steps
    for (let i = 0; i < steps; i++) {
      if (direction === 'left') {
        // Move the first element to the end of the array
        const firstElement = array.shift();
        array.push(firstElement);
      } else if (direction === 'right') {
        // Move the last element to the beginning of the array
        const lastElement = array.pop();
        array.unshift(lastElement);
      }
    }
  
    return array;
  }