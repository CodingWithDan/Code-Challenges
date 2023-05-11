
//===============================
//Sort array by string length
//===============================
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// For example, if this array were passed as an argument:

// ["Telescopes", "Glasses", "Eyes", "Monocles"]

// Your function would return the following array:

// ["Eyes", "Glasses", "Monocles", "Telescopes"]

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//P: Receive an array of strings as an argument. All of the string lengths will be of different lengths.
//R: Return a sorted array containing the same strings organized from shortest to longest
//E: ["Telescopes", "Glasses", "Eyes", "Monocles"] --> ["Eyes", "Glasses", "Monocles", "Telescopes"]
//P: Run a sort method array.sort((a, b) => a.length - b.length )
//P: This is how we organize numbers in an array, but since have strings and want to compare their lengths, we change them
//lengths

function sortByLength (array) {
    return array.sort((a,b) => a.length - b.length) 
  };