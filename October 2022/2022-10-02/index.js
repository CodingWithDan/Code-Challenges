//==========================
//Find the middle element
//==========================
//P: Receive an array with 3 numbers in a random order.
//P: THe numbers can be negative, a float, positive, or a mix.
//R: return the index of the number in the middle
//E: gimme([2, 3, 1]) => 0
//E: gimme([5, 10, 14]) => 1
//P: We can sort the original array and find that middle value! But we want the index of the original unsorted array
//P: to find this, we place the sorted array in its own variable. Then we slap a spread operator on that and find the index of that while doing an index search of the original array.
//P: If we didn't do the spread operator, it would return the index of just the sorted array
//P: But with the spread, it applies the sorted value over the original array and finds the index there.


function gimme (triplets) {
    let sorted = [...triplets].sort((a, b) => a -b)
    console.log(sorted)
    return triplets.indexOf(sorted[1])
  }
  
  
  
  gimme([2, 3, 1])