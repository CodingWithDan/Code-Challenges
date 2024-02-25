//========================================================
//LC:3. Longest Substring Without Repeating Characters
//========================================================

// Given a string s, find the length of the longest
// substring
// without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.

// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.

// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

 

// Constraints:

//     0 <= s.length <= 5 * 104
//     s consists of English letters, digits, symbols and spaces.


//This is my first solution. It sort of works. But has some issues, for instance like 'dvdf'
var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let current = []
    s = s.split('')

    for(let i = 0; i < s.length; i++){
        current.push(s[i])

        if(current.length !== [...new Set(current)].length){
            current.splice(0,current.length)
            i = i - 1
        }

        if(current.length > longest){
            longest = current.length
        }
    }

    return longest
};


//Here's the corrected version

var lengthOfLongestSubstring = function(s) {
    let longest = 0
    let current = []
    s = s.split('')

   for (let i = 0; i < s.length; i++) {
      //first check to see if current includes our current letter. If it does not, push it into the array. If it does, we go to the first index of where it appears and remove it from the string.
        if (current.includes(s[i])) {
        current = current.slice(current.indexOf(s[i]) + 1);
        }

        current.push(s[i]);
        //if current's length is greater than our longest tracked substring, then make this length the one to beat.
        if(current.length > longest){
            longest = current.length
        }
    }

    return longest
};