//=======================
//CW: String Scramble
//=======================

// Given a string and an array of index numbers, return the characters of the string rearranged to be in the order specified by the accompanying array.

// Ex:

// scramble('abcd', [0,3,1,2]) -> 'acdb'

// The string that you will be returning back will have: 'a' at index 0, 'b' at index 3, 'c' at index 1, 'd' at index 2, because the order of those characters maps to their corresponding numbers in the index array.

// In other words, put the first character in the string at the index described by the first element of the array

// You can assume that you will be given a string and array of equal length and both containing valid characters (A-Z, a-z, or 0-9).
//Iterate through str array.
//remove item, replace it with the 

function scramble(str, arr) {
    let newStr = str.split('')
    let newArr = []
    
    for (let i = 0; i < newStr.length; i++){
      for (let j = 0; j < arr.length; j++){
        if(arr[j] === i){
          newArr.push(newStr[j])
        }
      }
    }
    
    return newArr.join('')
  };
  
  //ALT
  
  function scramble(str, arr) {
    let r = []
    for(i = 0; i < arr.length; i++) r[arr[i]]=str[i]
    return r.join("")
  };