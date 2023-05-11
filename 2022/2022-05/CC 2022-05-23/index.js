//===========================
//Grasshopper - Messi Goals
//===========================
// Messi's Goal Total

// Use variables to find the sum of the goals Messi scored in 3 competitions
// Information

// Messi goal scoring statistics:
// Competition 	Goals
// La Liga 	43
// Champions League 	10
// Copa del Rey 	5

var laLigaGoals
var championsLeagueGoals
var copaDelReyGoals
var totalGoals

let laLigaGoals = 43
let championsLeagueGoals = 10
let copaDelReyGoals = 5
let totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals


//==============================
//Grasshopper - Array Mean
//==============================
//Find Mean

//Find the mean (average) of a list of numbers in an array.

var findAverage = function (nums) {
    return (nums.reduce((acc, c) => acc + c))/nums.length
  }



//=========================================
//Grasshopper - Function syntax debugging
//==========================================
//A student was working on a function and made some syntax mistakes while coding. 
//Help them find their mistakes and fix them.

// function main [verb, noun]
//   return verb + noun
// }

function main(verb, noun){
    return verb + noun
  }


//==============================
//Grasshopper - Grade book
//==============================
// Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

// Numerical Score 	Letter Grade
// 90 <= score <= 100 	'A'
// 80 <= score < 90 	'B'
// 70 <= score < 80 	'C'
// 60 <= score < 70 	'D'
// 0 <= score < 60 	'F'

// Tested values are all between 0 and 100. 
// Theres is no need to check for negative values or values greater than 100.

function getGrade (s1, s2, s3) {
    let x = (s1 + s2 + s3) / 3
    
    if (x >= 90){
      return 'A'
    }
     if (x >= 80){
      return 'B'
    }
     if (x >= 70){
      return 'C'
    }
     if (x >= 60){
      return 'D'
    }
     else{
      return 'F'
    }
  }



  //=========================================
  //Grasshopper - Variable Assignment Debug
  //=========================================
  //Variable assignment

//Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

// var a == "dev"
// var b == "Lab"

// var name == a + b

var a = "dev"
var b = "Lab"

var name = a + b



//=====================
//Return the day 
//=====================
// Complete the function which returns the weekday according to the input number:

//     1 returns "Sunday"
//     2 returns "Monday"
//     3 returns "Tuesday"
//     4 returns "Wednesday"
//     5 returns "Thursday"
//     6 returns "Friday"
//     7 returns "Saturday"

function whatday(num) { 
    if(num === 1){
      return "Sunday"
    }
    else if(num === 2){
      return "Monday"
    }
    else if(num === 3){
      return "Tuesday"
    }
    else if(num === 4){
      return "Wednesday"
    }
    else if(num === 5){
      return "Thursday"
    }
    else if(num === 6){
      return "Friday"
    }
    else if(num === 7){
      return "Saturday"
    }
    else{
      return 'Wrong, please enter a number between 1 and 7'
    }
  }


  //==================================
  //Grasshopper - Combine strings
  //==================================
//   Combine strings function

// Create a function named combineNames that accepts two parameters (first and last name). 
// The function should return the full name.

// Example:

// combineNames('James', 'Stevens')

// returns:

// 'James Stevens'

function combineNames(x, y){
    return `${x} ${y}`
  }


//==========================
//Welcome to the City
//==========================
// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

// Example:

// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')

// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

function sayHello( name, city, state ) {
    let fool = name.join(' ')
    return `Hello, ${fool}! Welcome to ${city}, ${state}!`
  }
