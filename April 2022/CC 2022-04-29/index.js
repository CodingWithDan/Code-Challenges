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
  
  
  //================
  //Twice as old
  //===============
  
  // Your function takes two arguments:
  
  //     current father's age (years)
  //     current age of his son (years)
  
  // Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
  
  function twiceAsOld(dad, son) {
   let twice = Math.abs(dad - (son * 2))
       return twice
  }
  
  //======================
  //Convert to Binary
  //======================
  //Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
  
  function toBinary(n){
    return +n.toString(2)
  }
  
  
  //=============================
  //NBA full 48 minutes average
  //=============================
  // An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.
  
  // Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.
  
  // Examples:
  
  // pointsPer48(12, 20) // 28.8
  // pointsPer48(10, 10) // 48 
  // pointsPer48(5, 17) // 14.1 
  // pointsPer48(0, 0) // 0
  
  function pointsPer48(ppg, mpg) {
    if (ppg === 0 || mpg === 0){
      return 0
    }
    else{
   return +(ppg * (48/mpg)).toFixed(1)
  }
  }
  
  OR
  
  function pointsPer48(ppg, mpg) {
   return mpg ? Number((ppg * (48 / mpg)).toFixed(1)) : 0
  }
  
  
  //==========================
  //Holiday VI - Shark Pontoon
  //==========================
  // Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out.
  
  // As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap!
  
  // You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
  
  // You are given 5 variables;
  
  //     sharkDistance = distance from the shark to the pontoon. The shark will eat you if it reaches you before you escape to the pontoon.
  
  //     sharkSpeed = how fast it can move in metres/second.
  
  //     pontoonDistance = how far you need to swim to safety in metres.
  
  //     youSpeed = how fast you can swim in metres/second.
  
  //     dolphin = a boolean, if true, you can half the swimming speed of the shark as the dolphin will attack it.
  
  //     The pontoon, you, and the shark are all aligned in one dimension.
  
  // If you make it, return "Alive!", if not, return "Shark Bait!".
  
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    let speed = sharkSpeed
    if (dolphin === true){
      speed = sharkSpeed/2
    }
    
    if ((pontoonDistance/youSpeed) < (sharkDistance/speed)){
      return "Alive!"
    }
    else{
      return "Shark Bait!"
    }
  }
  
  OR
  
  function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin){
    if(dolphin){
      sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? "Alive!" : "Shark Bait!";
  }
  
  
  //=========================
  //Multiple of index
  //=========================
  //Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
  
  function multipleOfIndex(array) {
    let newArr = [];
    
    for (let i = 0; i <= array.length; i++){
      if (array[i] % i === 0){
        newArr.push(array[i])
      }
       
    }
    return newArr
   
  }
  
  
  OR
  
  function multipleOfIndex(array) {
    return array.filter((num, i) => num % i === 0);
  }
  
  //=========================
  //Improving Math.round(x)
  //=========================
  //Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.
  
  // You may find the following Math methods useful:
  
  //     Math.round(x) (of course)
  //     Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
  
  Math.roundTo = function (number, precision) {
   return +number.toFixed(precision)
  }
  
  //===============
  //isReallyNaN
  //===============
  //I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.
  
  // Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
  
  // Any solution is acceptable!
  
  const isReallyNaN = (val) => 
  Number.isNaN(val)