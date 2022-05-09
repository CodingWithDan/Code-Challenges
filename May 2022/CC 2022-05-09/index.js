//=======================
//The Hashtag Generator
//=======================
//The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

function generateHashtag(str) {
    if (str === ""){
      return false
    } 
    else{
    let result = '#' + str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.substr(1)).join('')
     if (result === "" ||  result === "#" ||  result.length > 140) {
      return false;
    }
      return result
      }
  }
  