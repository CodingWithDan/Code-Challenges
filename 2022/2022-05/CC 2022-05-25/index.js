//=========================================================================
//Training JS #1: create your first JS function and print "Hello World!"
//=========================================================================
// Task

// Please refer to two example above and write your first JS function.

// mission 1:

// use keyword function to define your function, function name should be helloWorld(don't forget the () and {})

// mission 2:

// use keyword var (or let or const) to define a variable str, value of str should be a string: "Hello World!"(don't forget the =).

// mission 3:

// type the console.log() in the next line(don't forget to put the str in the brackets).

// When you have finished the work, click "Run Tests" to see if your code is working properly.

// In the end, click "Submit" to submit your code pass this kata.

function helloWorld(){
    let str = 'Hello World!'
    console.log(str)
  }
  
  
  //===================================
  //My head is at the wrong end!
  //===================================
  // You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!
  
  // Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).
  
  // Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics
  
  // Simples!
  
  function fixTheMeerkat(arr) {
   return arr.reverse(' ')
  }
  
  
  //==============================
  //Ensure question
  //==============================
  // Given a string, write a function that returns the string with a question mark ("?") appends to the end, 
  //   unless the original string ends with a question mark, in which case, returns the original string.
  
  // For example (Input --> Output)
  
  // "Yes" --> "Yes?" 
  // "No?" --> "No?"
  
  function ensureQuestion(s) {
    let x = s.split('')
    if(x[x.length - 1] === "?"){
      return s
    }
    else{
       return `${s}?`
    }
  
  }
  
  
  //============================================================
  //I love you, a little , a lot, passionately ... not at all
  //============================================================
  // Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:
  
  //     I love you
  //     a little
  //     a lot
  //     passionately
  //     madly
  //     not at all
  
  // When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.
  
  // Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.
  
  
  
  function howMuchILoveYou(nbPetals) {
    const arr = [
       "I love you",
       "a little",
       "a lot",
       "passionately",
       "madly",
       "not at all",
     ];
    
    for (let i = 0; i <= nbPetals-1; i++) {
      
      if (i === nbPetals-1) {
        return arr[i%6];
      }
    }
  }
  
  
  //======================================
  //The Feast of Many Beasts
  //======================================
  // All of the animals are having a feast! Each animal is bringing one dish. 
  // There is just one rule: the dish must start and end with the same letters as the animal's name. 
  // For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
  
  // Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
  
  // Assume that beast and dish are always lowercase strings, and that each has at least two letters. 
  // beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string. 
  // They will not contain numerals.
  
  function feast(beast, dish) {
  if(beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]){
     return true
     }
  else{
    return false
  }
  }