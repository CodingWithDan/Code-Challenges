//===================
//Powers of 2
//===================
// Complete the function that takes a non-negative integer n as input,
// and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
    let list = []
    for (let i = 0; i <= n; i++){
  list.push(2 ** i)
    }
    return list
  }


//==============================
//Cat Years, Dog Years
//==============================

// I have a cat and a dog.

// I got them at the same time as kitten/puppy. That was humanYears years ago.

// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:

//     humanYears >= 1
//     humanYears are whole numbers only


  var humanYearsCatYearsDogYears = function(humanYears) {
    let x = humanYears;
    let y = 0;
    let z = 0;
    
    for (let i = 1; i <= x; i++){
      if (y >= 24 || z >= 24) {
        y += 4
        z += 5
      }
       if (y === 15 || z === 15){
        y += 9
        z += 9
      }
      if (y === 0 || z === 0){
        y += 15
        z += 15
      }
     
    
    }
    return [x,y,z];
  }
  

  //Simplified

  var humanYearsCatYearsDogYears = function(y) {
    if (y == 1) return [1, 15, 15]
    if (y == 2) return [2, 24, 24]
    return [y, (y-2) * 4 + 24, (y-2) * 5 + 24]
  }