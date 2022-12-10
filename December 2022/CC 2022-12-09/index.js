//==========================
  //Two to One
  //==========================
  //  Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
  // Examples:
  
  // a = "xyaabbbccccdefww"
  // b = "xxxxyyyyabklmopq"
  // longest(a, b) -> "abcdefklmopqwxy"
  
  // a = "abcdefghijklmnopqrstuvwxyz"
  // longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
  
  
    
  function longest(s1, s2) {
    let s3 = s1.concat(s2).split('').sort()
    let arr = []
    for (let i = 0; i < s3.length; i++){
      if(s3[i] !== s3[i + 1]){
        arr.push(s3[i])
      }
    }
    return arr.join('')
  }
