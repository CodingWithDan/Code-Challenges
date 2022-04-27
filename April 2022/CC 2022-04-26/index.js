//=========================
//A Needle in the Haystack
//==========================
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])

// should return "found the needle at position 5" (in COBOL "found the needle at position 6")

function findNeedle(haystack) {
    let need = haystack.indexOf("needle")
    return `found the needle at position ${need}`
  }
  
  
  //======================================
  //Count of positives / sum of negatives
  //======================================
  // Given an array of integers.
  
  // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
  
  // If the input is an empty array or is null, return an empty array.
  // Example
  
  // For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
  
  
  function countPositivesSumNegatives(input) {
    
    if (input == null || input.length < 1){
      return []
      }
      
    let positive = 0;
    let negative = 0;
    
    for(let i = 0; i <= input.length; i++){
      if (input[i] > 0){
        positive++
      }
      else if (input[i] < 0){
        negative+= input[i]
      }
     
    }
      return [positive, negative];
  }
  
  
  
  