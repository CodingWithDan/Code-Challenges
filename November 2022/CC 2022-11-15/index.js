//=========================
//Sort the Odd
//=========================

// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.
// Examples

// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


function sortArray(array) {
  
    let odds = array.slice().filter(x => x % 2 !== 0).sort((a,b) => a - b)
    let newArr = []
    
    for (let i = 0; i < array.length; i++){
      if(array[i] % 2 !== 0){
        newArr.push(odds[0])
        odds.splice(0, 1)
      }
      else{
        newArr.push(array[i])
      }
    }
    
    return newArr
    
  }
  
  sortArray([5, 3, 2, 8, 1, 4])