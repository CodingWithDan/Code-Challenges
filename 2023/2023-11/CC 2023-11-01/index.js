//==================================
//CW: Regex count lowercase letters
//==================================

// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    let count = 0
    
    for (let i = 0; i < str.length; i++){
      if(str[i] == str[i].toLowerCase() && str[i].charCodeAt() > 96 && str[i].charCodeAt() < 123 ){
        count++
    }
        }
      return count
}

//ALT

function lowercaseCount(str){
    let count=0
    let lowercase="abcdefghijklmnopqrstuvwxyz";
     for(let i=0;i<str.length;i++){
       for(let j=0;j<lowercase.length;j++){
         if(str[i]===lowercase[j]){count++}
       }
     }
    return count
  }