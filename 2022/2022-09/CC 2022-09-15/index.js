//===================================
//Minimum Steps (Array Series #6)
//===================================
// Task

// Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
// Notes:

//     List size is at least 3.

//     All numbers will be positive.

//     Numbers could occur more than once , (Duplications may exist).

//     Threshold K will always be reachable.


function minimumSteps(numbers, value){
    let sorted = numbers.sort((a,b ) => a - b)
    let totes = 0
  
    for (let i = 0; i < sorted.length; i++){
      if (sorted[i] + totes >= value){
        return count - 1
      }
      else{
        totes = sorted[i] + totes
      }
    }
  }
  
  minimumSteps([8,9,10,4,2], 23)
  
  //OR
  
  function minimumSteps(numbers, value) {
    const nums = numbers.slice().sort((a, b) => a - b);
    for (let i = 0, sum = 0; i < nums.length; i++) {
      sum += nums[i];
      if (sum >= value) {
        return i;
      }
    }
  }
  