   //=======================
  //Duplicate Encoder
  //=======================
  
//   The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!


function duplicateEncode(word){
    let zord = word.toLowerCase()
    let arr = []
    let trate = zord.split('')
    
    for (let i = 0; i < trate.length; i++){
      
       if (trate[i] == trate[i + 1] || trate[i] == trate[i + 2] || trate[i] == trate[i + 4] || trate[i] == trate[i + 3] || trate[i] == trate[i + 5] || trate[i] == trate[i - 1] || trate[i] == trate[i - 2] ||
         trate[i] == trate[i - 3] || trate[i] == trate[i - 4] || trate[i] == trate[i - 5] || trate[i] == trate[i - 7] || trate[i] == trate[i + 7] || trate[i] == trate[i - 8] || trate[i] == trate[i + 8]){
       arr.push(')')
      }
      else{
        arr.push('(')
      }
    }
    return arr.join('')
 }
 
 //ALT
 
 function duplicateEncode(word){
    
     let unique='';
     word = word.toLowerCase();
     for(var i=0; i<word.length; i++){
         if(word.lastIndexOf(word[i]) == word.indexOf(word[i])){
             unique += '(';
         }
         else{
             unique += ')';
         }
     }
     return unique;
 
 }
 
 //ALT 2
 //P:
 //R:
 //E:
 //P: Turn into lowercase, split the words so they can be iterated, and then map over it. 
 //P: If the index of the specific character equals the last index of that specific character in the array, that mean that character is not unique, and thus can be printed with a non-unique parantehses ('('). For all that return false, return ')'
 
 function duplicateEncode(word){
   return word.toLowerCase().split('').map( (x, z, a) =>
      a.indexOf(x) == a.lastIndexOf(x) ? '('  : ')'  ).join('');
 }