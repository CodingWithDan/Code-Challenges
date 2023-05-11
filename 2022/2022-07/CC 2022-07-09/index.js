//========================
//Split Strings
//=======================
// Complete the solution so that it splits the string into pairs of two characters. 
//If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

// Examples:

// * 'abc' =>  ['ab', 'c_']
// * 'abcdef' => ['ab', 'cd', 'ef']

//P: Divide string into pairs of two characters
//P: If odd, last character has an underscore paired with it
//R: Return 
//E: abc --> 'ab' 'c_'
//E: abcd --> 'ab' 'cd'
//P:

function solution(str){
    let pairs = []
    
    if (str.length % 2 !== 0){
      str += '_'
    }
  
    for (let i = 0; i < str.length; i = i + 2){
      pairs.push(str[i] + str[i + 1])
    }
    return pairs
  }
  
  solution("abcde")