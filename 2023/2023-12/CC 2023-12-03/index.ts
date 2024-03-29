
//=======================
//CW: Reversed sequence
//=======================

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

export const reverseSeq = (n: number): number[] => {
    let arr: number[] = [];
  
    for (let i = n; i > 0; i--) {
      arr.push(i);
    }
  
    return arr; // Ensure the function returns the array
  };