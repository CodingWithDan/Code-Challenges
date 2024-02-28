//===========================
//LC: 20. Valid Parentheses
//===========================
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

//     Open brackets must be closed by the same type of brackets.
//     Open brackets must be closed in the correct order.
//     Every close bracket has a corresponding open bracket of the same type.

 

// Example 1:

// Input: s = "()"
// Output: true

// Example 2:

// Input: s = "()[]{}"
// Output: true

// Example 3:

// Input: s = "(]"
// Output: false

 

// Constraints:

//     1 <= s.length <= 104
//     s consists of parentheses only '()[]{}'.

//here's a NASTY brute force method that passes a lot of test case
//but the issue is it doesn't account for exmaples like ([)]
var isValid = function(s) {
    let a = 0
    let b = 0
    let c = 0

    for(let i = 0; i < s.length; i++){

        if(a < 0 || b < 0 || c < 0){
            return false
        }
        
        if(s[i] === '[' && (s[i + 1] === '}' || s[i + 1] === ')')){
            return false
        }
        if(s[i] === '{' && (s[i + 1] === ']' || s[i + 1] === ')')){
            return false
        }
        if(s[i] === '(' && (s[i + 1] === '}' || s[i + 1] === ']')){
            return false
        }


        if(s[i] === '['){
            a++
        }
        if(s[i] === ']'){
            a--
        }
        if(s[i] === '{'){
            b++
        }
        if(s[i] === '}'){
            b--
        }
        if(s[i] === '('){
            c++
        }
        if(s[i] === ')'){
            c--
        }
    }
    return a == 0 && b == 0 && c == 0 ? true : false
};

//Here's the more efficient solution below which utilizes a stack


var isValid = function(s) {
    let stack = []
     // Loop over each character in the string
    for(let i = 0; i < s.length; i++){
        //checking for left parantheses; if found, push to stack
        if(s[i] === '(' || s[i] === '{' || s[i] === '['){
            stack.push(s[i])
        }
        //checking for right parantheses; if found, check if stack is empty. If not, check if most recent element pushed matches
        else if(s[i] === ')' && stack.length > 0 && stack[stack.length-1] === '(' ){
            stack.pop()
        }
        else if(s[i] === ']' && stack.length > 0 && stack[stack.length-1] === '['){
            stack.pop()
        }
        else if(s[i] === '}' && stack.length > 0 && stack[stack.length-1] === '{'){
            stack.pop()
        }
        else{
            return false
        }
    }
    //if there's just one paranthesis, this nullifies that
    return stack.length === 0 ? true : false
};
