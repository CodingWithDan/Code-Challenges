//===========================
//Sorted? yes? no? how?
//===========================

// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.


function isSortedAndHow(array) {

  
    let asc = array.slice().sort((a,b) => a - b)
    let des = array.slice().sort((x,y) => y -x)
    
    if(array.join('') === asc.join('')){
      return 'yes, ascending'
    }
    
    else if (array.join('') === des.join('')){
      return 'yes, descending'
    }
    
    else{
      return 'no'
    }
  }
  
  
  isSortedAndHow([15, 7, 3, -8])