
//======================================
//Sum a list but ignore any duplicates
//======================================

// Please write a function that sums a list, but ignores any duplicate items in the list.

// For instance, for the list [3, 4, 3, 6] , the function should return 10.

function sumNoDuplicates(numList) {
    let newArr = []
    numList.map((e, i, a) => a.indexOf(e) ==  a.lastIndexOf(e) ? newArr.push(e) : 0)
    return newArr.reduce((sum, curr) => sum + curr, 0)
  }
  
  //ALT
  
  function sumNoDuplicates(numList) {
    return numList.filter((i)=> numList.indexOf(i) == numList.lastIndexOf(i)).reduce((a,b)=> a + b, 0)
  }
  
  