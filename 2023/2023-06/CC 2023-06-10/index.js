//======================================================
//LC - 1704. Determine if String Halves Are Alike
//======================================================

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

// Return true if a and b are alike. Otherwise, return false.

 

// Example 1:

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// Example 2:

// Input: s = "textbook"
// Output: false
// Explanation: a = "text" and b = "book". a has 1 vowel whereas b has 2. Therefore, they are not alike.
// Notice that the vowel o is counted twice.

 

// Constraints:

//     2 <= s.length <= 1000
//     s.length is even.
//     s consists of uppercase and lowercase letters.

//divide a word in half, determine if each side has the same amount of vowels (doesn't matter the exact vowel)
//Return a true or false
//'Book' will return true; 'textbook' will return false


var halvesAreAlike = function(s) {
    let count1 = 0
    let count2 = 0

    let first = s.slice(0, s.length/2).toLowerCase()
    let sec = s.slice(s.length/2).toLowerCase()
    
    for(let i = 0; i < first.length; i++){
        if(first[i] == 'a' || first[i] == 'e' || first[i] == 'i' || first[i] == 'o' || first[i] == 'u'){
            count1++
        }
    }

     for(let i = 0; i < sec.length; i++){
        if(sec[i] == 'a' || sec[i] == 'e' || sec[i] == 'i' || sec[i] == 'o' || sec[i] == 'u'){
            count2++
        }
    }
    
    return count1 == count2 ? true : false
};

console.log(halvesAreAlike("textbook"))
console.log(halvesAreAlike("book"))