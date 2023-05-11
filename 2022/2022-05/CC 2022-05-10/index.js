//===============
//Sort Numbers
//===============

// Finish the solution so that it sorts the passed in array of numbers. 
// If the function passes in an empty array or null/nil value then it should return an empty array.

function solution(nums){
    if (nums === null){
      return []
    }
    else{
      return nums.sort((a, b) => a - b)
    }
  
  }

  //====================
  //Find the vowels
  //====================
//   We want to know the index of the vowels in a given word, 
//   for example, there are two vowels in the word super (the second and fourth letters).

// So given a string "super", we should return a list of [2, 4].


function vowelIndices(word){
    let wordSplit = word.toLowerCase().split('')
    let vows = ['a', 'e', 'i', 'o', 'u', 'y']
    let result = []
  
    for (let i = 0; i <= wordSplit.length; i++){
      for (let j = 0; j <= vows.length; j++){
        if (wordSplit[i] === vows[j]){
         result.push(i + 1)
        }
      }
    }
    let bunk = result.pop()
       return result
  }

  OR

  function vowelIndices(word){
    const str = 'aeiouy';
    const arr = word.toLowerCase().split('');
    let answer = [];
    
    arr.forEach((name, i) => {
      if (str.indexOf(name) !== -1) {
        answer.push(i + 1);
      }
    });
    return answer;
  }
  
  
