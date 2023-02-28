//==================
//Reversed sequence 
//==================
// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = n => {
    let rev = [];
    for (let i = n; i > 0; i--){
      rev.push(i)
    } 
    return rev;
  };
  
  //=====================
  //Remove String Spaces
  //=====================
  // Simple, remove the spaces from the string, then return the resultant string.
  
  function noSpace(x){
  return x.split(' ').join('')
  }
  
  //=========================
  //Get the mean of an array
  //=========================
  // It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
  
  // Return the average of the given array rounded down to its nearest integer.
  
  // The array will never be empty.
  
  function getAverage(marks){
   return Math.floor((marks.reduce((agg, c) => agg + c, 0))/marks.length)
  }
  
  
  //=============================
  //Convert a Boolean to a String
  //=============================
  // Implement a function which convert the given boolean value into its string representation.
  
  // Note: Only valid inputs will be given.
  
  function booleanToString(b){
    if (b === true){
      return 'true'
    }
   else {
      return 'false'
    }
  }
  
  //===============
  //Calculate BMI
  //===============
  //Write function bmi that calculates body mass index (bmi = weight / height2).
  
  // if bmi <= 18.5 return "Underweight"
  
  // if bmi <= 25.0 return "Normal"
  
  // if bmi <= 30.0 return "Overweight"
  
  // if bmi > 30 return "Obese"
  
  function bmi(weight, height) {
    let bmi = weight/(height**2)
    if ( bmi <= 18.5){
       return "Underweight"
    }
    if (bmi <= 25.0 ){
      return "Normal"
    }
    if (bmi <= 30.0 ){
      return "Overweight"
    }
    else {
      return "Obese"
    }
  }
  
  //===================
  //Array Plus Array
  //==================
  // I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.
  
  // P.S. Each array includes only integer numbers. Output is a number too.
  
  function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((sum, current) => sum + current, 0) + arr2.reduce((agg, c) => agg + c, 0); //something went wrong
  }
  
  //=====================
  //Do I get a bonus?
  //====================
  // It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
  
  // Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
  
  // If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
  
  // Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).
  
  function bonusTime(salary, bonus) {
  if(bonus === true){
    return `£${salary * 10}`
  }
    else {
      return `£${salary}`
    }
  }
  
  //========================
  //Count the Monkeys!
  //========================
  
  // You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.
  
  // As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
  
  function monkeyCount(n) {
  let arr = []
  for (let i = 1; i <= n; i++){
    arr.push(i)
  }
    return arr
  }
  
  //======================
  //Simple multiplication
  //======================
  // This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
  
  function simpleMultiplication(number) {
      if(number % 2 === 0){
        return number * 8
      }
    else{
      return number * 9
    }
  }
  
  OR
  
  function simpleMultiplication(number) {
      return number % 2 === 0 ? number * 8 : number * 9
    }
  
  
  //==================
  //Can We Divide It?
  //==================
  //Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.
  
  function isDivideBy(number, a, b) {
   return (number % a === 0 && number % b === 0) ? true : false 
   }
  
  //===============================
  //You Can't Code Under Pressure #1
  //===============================
  //Code as fast as you can! You need to double the integer and return it.
  
  function doubleInteger(i) {
    return i * 2;
  }
  
  
  
  
  //======================
  //Convert to Binary
  //======================
  //Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
  
  function toBinary(n){
    return +n.toString(2)
  }
  
  