//=====================
//Duplicate Encoder
//=====================

// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//only once --> '('    more than once --> ')'
//not just characters. It can also be symbols, numbers, but there could be an arrangement of lower and uppercase. We want it to be case insensitive. (aka make it all lowercase)

//toLowecase() --> split('') --> map() --> ele, indx, arr --> indexOf === lsatIndexOf    --> .join('') 

function duplicateEncode(word){
    return word.toLowerCase().split('').map((ele, indx, arr) => arr.indexOf(ele) === arr.lastIndexOf(ele) ? '(' : ')').join('')
 }
 
 
 duplicateEncode("din")