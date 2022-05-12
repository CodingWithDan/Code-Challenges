//====================
//Exes and Ohs
//==================

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false


function XO(str) {
    let st = str.toLowerCase().split('')
    let ex = 0
    let oh = 0
  
    for (let i = 0; i <= st.length; i++){
      if(st[i] === 'x'){
        ex++
      }
      if (st[i] === 'o'){
        oh++
      }  
    }

  if (ex == oh){
    return true
  }

  else {
    return false
  }
}


OR

function XO(str) {
  var sum = 0;
  for(var i=0; i<str.length; i++){
    if(str[i].toLowerCase() == 'x') sum++;
    if(str[i].toLowerCase() == 'o') sum--;
  }
  return sum == 0;
}

//=================
//Mumbling
//==================
// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

function accum(s) {
	s = s.toLowerCase().split('');
  
  for (let i = 0; i < s.length; i++){
   
    s[i] = s[i][0].repeat(i + 1).toLowerCase()
    s[i] = s[i][0].toUpperCase() + s[i].slice(1)
  }
  
 return s.join('-')

}

OR

function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}


//=================
//Shortest Word
//=================
//Simple, given a string of words, return the length of the shortest word(s).
//String will never be empty and you do not need to account for different data types.


  

  function findShort(s){
  s = s.split(' ');
  let small = s[0];
  for (let i = 0; i < s.length; i++){
    if(s[i].length < small.length){
      small = s[i]
    }
  }
    return small.length
}

//==========================
//Get the Middle Character
//==========================
//You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"

// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

function getMiddle(s)
{
  if (s.length % 2 === 0){ //if even
  let half = Math.floor((s.length)/2)
  return s[half - 1] + s[half]
    }
  
  if (s.length % 2 !== 0){ //if odd
    let half = Math.floor((s.length)/2)
  return s[half]
    }
 
}
