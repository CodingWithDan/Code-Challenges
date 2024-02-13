//==========================
//LC: 242. Valid Anagram
//==========================

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:

// Input: s = "rat", t = "car"
// Output: false

 

// Constraints:

//     1 <= s.length, t.length <= 5 * 104
//     s and t consist of lowercase English letters.

 

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?



/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 //if t contains the same letters of s, return true, otherwise false

 var isAnagram = function(s, t) {
    let sortedS = s.split('').sort().join('')
    let sortedT = t.split('').sort().join('')

    return sortedS === sortedT ? true : false
};