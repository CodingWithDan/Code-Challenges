//===================================
//CW: Simple Fun #88: Sort By Height
//===================================

// Task

// Some people are standing in a row in a park. There are trees between them which cannot be moved.

// Your task is to rearrange the people by their heights in a non-descending order without moving the trees.
// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be

// [-1, 150, 160, 170, -1, -1, 180, 190].
// Input/Output

//     [input] integer array a

//     If a[i] = -1, then the ith position is occupied by a tree. Otherwise a[i] is the height of a person standing in the ith position.

//     Constraints:

//     5 ≤ a.length ≤ 30,

//     -1 ≤ a[i] ≤ 200.

//     [output] an integer array

//     Sorted array a with all the trees untouched.


function sortByHeight(a) {
    let arr = a.slice().filter(v=>v!==-1).sort((a,b)=>a-b);
    
    let newArr = []
    for (let i = 0; i < a.length; i++){
      if(a[i] == -1){
          newArr.push(a[i])
      }
      else{
        let take = arr.shift()
         newArr.push(take)
      }
    } 
    return newArr
  }
  
  sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])
  
  //ALT
  
  function sortByHeight(a) {
     var na=a.slice().sort((a,b)=>a-b).filter(a=>a!=-1), p=0;
     return a.map(a=>a==-1?-1:na[p++])
  }
  