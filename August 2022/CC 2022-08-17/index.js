
//==================
//String ends with?
//==================

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false


//P: Receive two strings.
//R:  If str ends with the second argument, ending, then return true. If not return false
//E:  solution('abc', 'bc') // returns true
//E:  solution('abc', 'd') // returns false
//P: get the length of ending. place in variable (len)
//P: slice the end of str with the length of len. Check if this matches with ending. Return true if so


function solution(str, ending){
    let len = ending.length
    if (ending === str.slice(-len)){
        return true
        }
    else if(ending === ''){
      return true
    }
    else{
      return false
    }
  }
  
  solution('abcde', 'cde')
  
  
  //EASIER SOLUTION
  
  function solution(str, ending){
    return str.endsWith(ending);
  }