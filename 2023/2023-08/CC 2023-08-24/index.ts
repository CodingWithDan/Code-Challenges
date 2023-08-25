//==========================
//CW: Find the capitals
//==========================

// Instructions

// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

export function capitals (word: string): number[] {
    let arr = word.split('')
    let ans: number[] = []
      for (let i = 0; i < arr.length; i++){
      if(arr[i] !== arr[i].toLowerCase()){
        ans.push(i)
      }
    }
    return ans
  }