//======================================
//JavaScript.info - Shuffle an array
//======================================

//P: Receive an array of elements and/or numbers
// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
//R: Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.
//E: Multiple runs of shuffle may lead to different orders of elements. For instance:
// let arr = [1, 2, 3];

// shuffle(arr);
// // arr = [3, 2, 1]

// shuffle(arr);
// // arr = [2, 1, 3]

// shuffle(arr);
// arr = [3, 1, 2]
//P: The following can be solved by doing the Fisher-Yates shuffle, which is the idea to walk the array in the reverse order and swap each element with a random one before it.


let barr = [1, 2, 3]
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array
  }
  shuffle(arr)