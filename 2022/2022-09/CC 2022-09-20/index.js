//===========================================
//JavaScript.info - Sort in decreasing order
//===========================================
//P: Receive an array of numbers. Can receive negatives and floating numbers
//R: Return that array in descending order
//E: [2, 7, -9, 1, 4 ] --> 7, 4, 2, 1, -9
//P: Use the sort method. Sort modifies the actual array so no need to do anything else.

let arr = [2, 7, -9, 1, 4 ];

arr.sort((a, b) => b - a)

console.log( arr )


