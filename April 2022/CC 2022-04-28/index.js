//==============================================================
//Use reduce() to calculate the sum of the values in an array
//=============================================================
//Make the sum() function return the sum of the values in the passed in array. Your solution must use the reduce() function of the built-in javascript Array object.

function sum(array) {
    return array.reduce((agg, c) => agg + c, 0)
    
  }
  
  //=============================
  //Beginner Series #2 Clock
  //=============================
  
  // Clock shows h hours, m minutes and s seconds after midnight.
  
  // Your task is to write a function which returns the time since midnight in milliseconds.
  // Example:
  
  // h = 0
  // m = 1
  // s = 1
  
  // result = 61000
  
  function past(h, m, s){
    let nh = h * 3600000
    let nm = m * 60000
    let ns = s * 1000
    let total = nh + nm + ns
    return total
  }
  
  or 
  
  
  function past(h, m, s){
   return (h * 3600000) + (m * 60000) + (s * 1000)
  }
  
  //======================================
  //Beginner Series #1 School Paperwork
  //======================================
  //Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.
  
  // Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
  // Example:
  
  // n= 5, m=5: 25
  // n=-5, m=5:  0
  
  function paperwork(n, m) {
    if (n < 0 || m < 0){
      return 0
    }
    else{
      return n * m
    }
  }
  
  or
  
  function paperwork(n, m) {
    return (n < 0 || m < 0) ? 0 : n * m
  }
  
  //=======================
  //Jenny's secret message
  //=======================
  //Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake. Can you help her?
  
  function greet(name){
    if(name === "Johnny")
      return "Hello, my love!";
    else {
      return "Hello, " + name + "!";
    }
  }
  
  
  //========================
  //Calculate average 
  //========================
  //Write a function which calculates the average of the numbers in a given list.
  //Note: Empty arrays should return 0.
  
  function find_average(array) {
   if (array == ""){
     return 0;
   }
    else{
   return (array.reduce((agg, c) => agg + c))/array.length
   }
  }
  
  find_average([1, 2, 3])
  
  
  //============================
  //You only need one - Beginner
  //============================
  //You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
  
  // Array can contain numbers or strings. X can be either.
  
  // Return true if the array contains the value, false if not.
  
  function check(a, x) {
    for (let i = 0; i < a.length; i++){
      if (a[i] === x){
        return true;
      }   
    }
   return false;
  }
  
  or
  
  function check(a,x){
    return a.includes(x);
  };
  
  
  //======================
  // Fake Binary
  //======================
  //Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
  
  //Note: input will never be an empty string
  
  function fakeBin(x){
  let newString = "";
    for (let i = 0; i < x.length; i++){
      if (x[i] >= 5){
        newString = newString + 1
      }
      else{
        newString = newString + 0
      }
    }
      return newString
  }
  
  
  //===============
  //Invert values
  //===============
  // Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
  
  // invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
  // invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
  // invert([]) == []
  
  // You can assume that all values are integers. Do not mutate the input array/list.
  
  function invert(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++){
      newArr.push(array[i] * -1)
    }
     return newArr;
  }
  
  
  OR
  
  function invert(array) {
     return array.map(i => 0 - i);
  }
  
  

  
  
  //==============
  //Reversed Words
  //=============
  
  //Complete the solution so that it reverses all of the words within the string passed in. 
  
  function reverseWords(str){
   return str.split(" ").reverse().join(" ")
    }
  