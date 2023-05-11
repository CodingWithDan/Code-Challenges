//==========================
//Third Angle of a Triangle
//==========================
//You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

// https://en.wikipedia.org/wiki/Triangle


//P: only positive integers
//P: Given 2 interior angles, find the 3rd of a triangle
//P: Triangles add up to 180
//R: Value should be returned

function otherAngle(a, b) {
    return 180 - (a + b);
  }


//=====================
//Squash the bugs
//=====================
// Simple challenge - eliminate all bugs from the supplied code so that the code runs and outputs the expected value. 
//Output should be the length of the longest word, as a number.
// There will only be one 'longest' word.

function findLongest(str) {
  
    var spl = str.split(" ");
    var longest = 0
    
    for (var i = 0; i < spl.length; i++) {
      if (spl[i].length > longest) {
        longest = spl[i].length
      }
      }
      return longest
  }


  //=================
  //Welcome!
  //================


  //p: a database of lanaguages and greetings
//p: store the languages as an object
//p: write a function that takes a parameter 'language' and returns a greeting.

// Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.
// The Task:

//     Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
//     Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. 
//     It should default to English if the language is not in the database, or in the event of an invalid input.

const ello ={
  english: 'Welcome',
  czech: 'Vitejte',
  danish: 'Velkomst',
  dutch: 'Welkom',
  estonian: 'Tere tulemast',
  finnish: 'Tervetuloa',
  flemish: 'Welgekomen',
  french: 'Bienvenue',
  german: 'Willkommen',
  irish: 'Failte',
  italian: 'Benvenuto',
  latvian: 'Gaidits',
  lithuanian: 'Laukiamas',
  polish: 'Witamy',
  spanish: 'Bienvenido',
  swedish: 'Valkommen',
  welsh: 'Croeso'
  
  }
  
  function greet(language) {
      return ello[language] || "Welcome"
  }
  //we return the greeting if it's true, otherwise we return the default: "Welcome"