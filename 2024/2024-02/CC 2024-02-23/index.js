//============================
UPLOADED//LC: 125. Valid Palindrome
//============================

// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.

// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.

// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

 

// Constraints:

//     1 <= s.length <= 2 * 105
//     s consists only of printable ASCII characters.


var isPalindrome = function(s) {
    //make the string lowercase
    s = s.toLowerCase()
    //split the string into an array, and filter out characters; we do this by turning code into their unicode numbers
    let filteredChars = s.split('').filter((char)=> {
        let charCode = char.charCodeAt(0)
        return (charCode >= 97 && charCode <= 122) || (charCode >= 48 && charCode <= 57)
    })
    //Finally, we compare the characters with one another. 
    return filteredChars.join('') === filteredChars.reverse().join('') ? true : false
};
