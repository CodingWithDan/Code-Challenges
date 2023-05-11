//================================
//Moving Zeros To The End + PREP
//================================
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.


//P: Receive One array that accepts all types: boolean, numbers, characters
//P:

//R: return the same array, but having all the 0s within it moved to the end

//E:  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]


//P: Create two arrays --> create one array through filter that has no 0s, create a second array through filter that has all the zeros --> concat the two arrays together

function moveZeros(arr) {
  
    let result = arr.filter(element => element !== 0)
    let resultTwo = arr.filter(element => element === 0)
  
    return result.concat(resultTwo)
  }
  
  moveZeros([1,2,0,1,0,1,0,3,0,1])