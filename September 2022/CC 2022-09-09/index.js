//===================
//Sort the Odd
//===================
  
  
//P: Receive an array of numbers, a mix of even and odd numbers.
//P: Sort the odd numbers in ascending order, while leaving even numbers at their original positions
//R: Return an array with the odd numbers having switched places to reflect ascending order, while evens remain in their place
//E: [7, 1]  =>  [1, 7]
//E: [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
//E: [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
//P: first we create a new array! We filter out the even numbers from our og array and sort only the odd numbers into it
//P: We then run a map method on the og array. If it's even, leave it be. Else, extract the first item from odd array and place in here

function sortArray(array) {
    let odd = array.filter((x) => x % 2 !== 0).sort((a,b) => a - b)
    return array.map((y) => y % 2 === 0 ? y : odd.shift())
  }