//========================================
//Grasshopper - If/else syntax debug
//========================================
// If/else syntax debug

// While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. 
//Unfortunately, Greg made some errors while creating the function.

// checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

// The function receives one parameter health which will always be a whole number between -10 and 10.

function checkAlive (health) {
    if (health <= 0) {
      return false
    } 
    else {
      return true
    }
  }
  
  //OR
  
  function checkAlive (health) {
  return health <= 0 ? false : true
    }
  
  
  
  
  //====================================
  //How many lightsabers do you own?
  //====================================
  // Inspired by the development team at Vooza, write the function that
  
  //     accepts the name of a programmer, and
  //     returns the number of lightsabers owned by that person.
  
  // The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.
  
  // Note: your function should have a default parameter.
  
  // For example(Input --> Output):
  
  // "anyone else" --> 0
  // "Zach" --> 18
  
  
  //P: Zach owns 18
  //P: Everyone else owns: 0
  //P: when given a name, return number of lightsabers owned
  //P: it will be a number, positve, whole
  //R: Return
  //E: zach = 18; everyone else not named Zach = 0
  //P:
  
  function howManyLightsabersDoYouOwn(name) {
    return name === "Zach" ? 18 : 0
  }
  
  
  
  
  //================
  //Drink about
  //================
  
  //     Kids drink toddy.
  //     Teens drink coke.
  //     Young adults drink beer.
  //     Adults drink whisky.
  
  // Make a function that receive age, and return what they drink.
  
  // Rules:
  
  //     Children under 14 old.
  //     Teens under 18 old.
  //     Young under 21 old.
  //     Adults have 21 or more.
  
  // Examples: (Input --> Output)
  
  // 13 --> "drink toddy"
  // 17 --> "drink coke"
  // 18 --> "drink beer"
  // 20 --> "drink beer"
  // 30 --> "drink whisky"
  
  
  //P: Make a function that receive a number as an argument, an age.
  //P: Based on the number in the argument, return a statement with what that age drinks
  //P: Always receive a positive whole number
  //R: return the statement
  
  
  function peopleWithAgeDrink(old) {
    if(old < 14){
      return "drink toddy"
    }
    if(old < 18){
      return "drink coke"
    }
    if(old < 21){
      return "drink beer"
    }
    if(old >= 21){
      return "drink whisky"
    }
  };
  
  
  //=========================
  //The Wide-Mouthed frog! 
  //========================
  // The wide-mouth frog is particularly interested in the eating habits of other creatures.
  
  // He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!
  
  // When he meets the alligator, it then makes a tiny mouth.
  
  // Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. 
  // If this one is an alligator (case-insensitive) return small otherwise return wide
  
  function mouthSize(animal) {
   return animal === "alligator" || animal === "ALLIGATOR"? "small" : "wide"
  }
  
  
  //=============================
  //What's the real floor?
  //=============================
  // Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
  
  // Write a function that given a floor in the american system returns the floor in the european system.
  
  // With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. 
  // In case of above 13, they move down by two because there are two omitted numbers below them.
  
  // Basements (negatives) stay the same as the universal level.
  
  // More information here
  // Examples
  
  // 1  =>  0 
  // 0  =>  0
  // 5  =>  4
  // 15  =>  13
  // -3  =>  -3
  
  function getRealFloor(n) {
    if (n < 0){
      return n
    }
    if (n < 2){
      return 0
    }
    if (n < 13){
      return n - 1
    }
    else {
      return n - 2
    }
  }