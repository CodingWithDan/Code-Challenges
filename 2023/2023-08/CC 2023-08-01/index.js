//==================================
//LC. 859. Buddy Strings
//==================================

// Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

// Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

//     For example, swapping at indices 0 and 2 in "abcd" results in "cbad".

 

// Example 1:

// Input: s = "ab", goal = "ba"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.

// Example 2:

// Input: s = "ab", goal = "ab"
// Output: false
// Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.

// Example 3:

// Input: s = "aa", goal = "aa"
// Output: true
// Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.

 

// Constraints:

//     1 <= s.length, goal.length <= 2 * 104
//     s and goal consist of lowercase letters.


//Initial failed attempt

var buddyStrings = function(s, goal) {
    if(s === goal.split('').reverse().join('')){
        return true
    }

    let ss = []
    let goals = []
    let count = 0
    for (let i = 0; i < s.length; i++){
        if(s[i] !== goal[i]){
            count++
            ss.push(s[i])
            goals.push(goal[i])
        }
    }
    goals = goals.sort().join('')
    ss = ss.sort().join('')
    
    return count > 2 || ss !== goals || s == goal ? false : true
    
}
buddyStrings("aaaaaaabc", "aaaaaaacb")


//Correct answer!


function buddyStrings(s, goal){
    // If the strings doesn't have same length
    // then there is no possibility for getting same string after swapping also 
    if (s.length !== goal.length) return false;

    // push the indexes of the different characters
    let diffCharsInd = [];

    // go through the `s` & `goal` string and get the different character's indexes;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) diffCharsInd.push(i);
    }


    if (diffCharsInd.length === 0) {
        const set = new Set(s)
        // if any duplicate characters present in 's';
        // example test-case: s => 'aa' & goal => 'aa'
        if (set.size < s.length) return true;
    } else if (diffCharsInd.length == 2) {
        // if number fo different charaters are 2 and the characters in 
        // different indexes will match after swapping then only return true
        const [x, y] = diffCharsInd;
        if (s[x] === goal[y] && s[y] === goal[x]) return true;
    }

    return false;
};


//alt

function buddyStrings(s, goal){
    if (
        s.length !== goal.length ||
        s.length === 1 ||
        goal.length === 1
    ) {
        return false;
    }

    if (s === goal) {
        const setData = new Set(s);
        return setData.size < s.length;
    }

    const diff = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            diff.push(i);
        }
    }

    return (
        diff.length === 2 &&
        s[diff[0]] === goal[diff[1]] &&
        s[diff[1]] === goal[diff[0]]
    )
};