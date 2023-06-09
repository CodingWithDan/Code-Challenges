//====================================
//Maximum Length Difference
//====================================

// You are given two arrays a1 and a2 of strings. Each string is composed with letters from a to z. Let x be any string in the first array and y be any string in the second array.

// Find max(abs(length(x) − length(y)))

// If a1 and/or a2 are empty return -1 in each language except in Haskell (F#) where you will return Nothing (None).
// Example:

// a1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"]
// a2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"]
// mxdiflg(a1, a2) --> 13

// Bash note:

//     input : 2 strings with substrings separated by ,
//     output: number as a string


// //Given 2 arrays of strings of various lengths.
// //Find the longest string
// function mxdiflg(a1, a2) {
//   let len1 = a1[0].length
//   let len11 = a1[0].length
//   let len2 = a2[0].length
//   let len22 = a2[0].length
  
//   for (let i = 0; i < a1.length; i ++){
//     if (a1[i].length > len1.length){
//       len1.length = a1[i].length
//     }
//     if (a1[i].length < len11.length){
//       len11.length = a1[i].length
//     }
//   }
  
//   for (let i = 0; i < a2.length; i ++){
//      if (a2[i].length > len2.length){
//       len2.length = a2[i].length
//     }
//     if (a2[i].length < len22.length){
//       len22.length = a2[i].length
//     }
//   }
  
//   return len2 - len11
// }


function mxdiflg(a1, a2) {
    if(!a1.length||!a2.length)return -1;
    a1.sort((a,b)=>a.length-b.length);
    a2.sort((a,b)=>a.length-b.length)
    return Math.max(Math.abs(a1[0].length-a2[a2.length-1].length),Math.abs(a2[0].length-a1[a1.length-1].length));
}

