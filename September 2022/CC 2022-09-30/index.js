//==============================
//Is there a vowel in there?
//==============================
  
//   Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 97 || arr[i] === 101 || arr[i] === 105 || arr[i] === 111 || arr[i] === 117) {
            let number = arr[i];
           newArr.push(String.fromCharCode(number));
        
        }
      else{
        newArr.push(arr[i])
      }
    }
    return newArr;
}

