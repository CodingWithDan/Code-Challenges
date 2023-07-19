
//========================================
//LC. 14. Longest Common Prefix
//========================================
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"

// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

 

// Constraints:

//     1 <= strs.length <= 200
//     0 <= strs[i].length <= 200
//     strs[i] consists of only lowercase English letters.



var longestCommonPrefix = function(strs) {
    let cur = strs[0]
    let temp = ""
    for(let i = 1; i < strs.length; i++){
        for(let j = 0; j < cur.length; j++){
            if(cur[j] == strs[i][j]){
                temp += cur[j]
            } else {
                break
            }
        }
        cur = temp
        temp = ""
    }
    return cur
};

longestCommonPrefix(["flower","flow","flight"])