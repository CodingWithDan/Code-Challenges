//====================
//Pillars
//====================
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

//     number of pillars (≥ 1);
//     distance between pillars (10 - 30 meters);
//     width of the pillar (10 - 50 centimeters).

// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar).

function pillars(num_pill, dist, width) {
    if (num_pill <= 1){
      return 0
    }
     else{
       return num_pill * ((dist * 100) + width) - (width * 2) - (dist * 100);
     }
  }
  
  
  //=======================
  //Is it a palindrome?
  //========================
  //Write a function that checks if a given string (case insensitive) is a palindrome.
  
  function isPalindrome(x) {
   if (x.toLowerCase().split('').reverse().join('') == x.toLowerCase()){
     return true
   }
    else {
      return false
    }
  }
  
  
  //=================================
  //Difference of Volumes of Cuboids
  //=================================
  //In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.
  
  // For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.
  
  // Your function will be tested with pre-made examples as well as random ones.
  
  // If you can, try writing it in one line of code.
  
  function findDifference(a, b) {
    let c = a.reduce((agg, cur) => agg * cur)
    let d = b.reduce((agg, cur) => agg * cur)
    
    if (c > d){
      return c - d
    }
    else if (d > c){
      return d - c
    }
    else {
      return 0
    }
  }
  
  OR
  
  function find_difference(a, b) {
    return Math.abs(a.reduce((previous, current) => previous * current) - b.reduce((previous, current) => previous * current));
  }
  
  
  
  //==========================
  //Sentence Smash
  //========================
  
  // Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
  // You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. 
  // Be careful, there shouldn't be a space at the beginning or the end of the sentence!
  
  function smash (words) {
    return words.join(" ")
  };
  
  
  
  //===========================
  //Hello, Name or World!
  // //==========================
  // Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).
  
  // Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).
  
  
  
    function hello(name) {
    
  if (name === "" || name === undefined){
    return `Hello, World!`
  }
  
      else{
        return (`Hello, ${name[0].toUpperCase()}${name.slice(1).toLowerCase()}!`)
      }
    }