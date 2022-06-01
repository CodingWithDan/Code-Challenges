//=======================
//Gravity Flip
//=======================
// Bob is bored during his physics lessons so he's built himself a toy box to help pass the time. The box is special because it has the ability to change gravity.

// There are some columns of toy cubes in the box arranged in a line. The i-th column contains a_i cubes. At first, the gravity in the box is pulling the cubes downwards. When Bob switches the gravity, it begins to pull all the cubes to a certain side of the box, d, which can be either 'L' or 'R' (left or right). Below is an example of what a box of cubes might look like before and after switching gravity.

// Examples (input -> output:

//     * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
//     * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip = (d, a)=>{
    if (d === 'L'){
      return a.sort((b, c) => b - c).reverse()
    }
     else{
       return a.sort((b, c) => b - c)
     }
   }

//===============================
//A wolf in sheep's clothing
//===============================
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1

// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.
// Examples

// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"

function warnTheSheep(queue) {
    for (let i = queue.length; i >= 0; i--){
    
    if (queue[i] === "wolf"){
      return `Oi! Sheep number ${queue.length - i - 1}! You are about to be eaten by a wolf!`
    }
    if(queue[queue.length - 1] === "wolf"){
      return 'Pls go away and stop eating my sheep'
    }
  }
}
