//===================
//Which are in?
//===================
  
//P: Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
//P: There mustn't be any duplicates in your return.
//R: In other words, if the words from a1 are detected in a2, return the words in a1, and organize them in alphabetical order
//E: Example 1:
// a1 = ["arp", "live", "strong"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]

// returns ["arp", "live", "strong"]
// Example 2:

// a1 = ["tarp", "mice", "bull"]

// a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
  
//P: Run a for loop through both arrays. If a string from arr1 is detected in ar2, push this word into a new array.
//P: Remove duplicates from this new array and then alphabetize it.
  
function inArray(arr1,arr2){
    let arr3 = []
    for (let i = 0; i < arr1.length; i++){
      for (let j = 0; j < arr2.length; j++){
        if(arr2[j].includes(arr1[i])){
          arr3.push(arr1[i])
        }
      }
    }
    return [...new Set(arr3)].sort();
  
  }
  
  
  //ALT
  
  function inArray(array1,array2){
    return array1.filter(x => array2.find(y => y.match(x))).sort()
  }
  