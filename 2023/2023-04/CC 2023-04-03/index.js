////=================================
//OOP: Object Oriented Piracy
//=================================

// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

//     draft - an estimate of the ship's weight based on how low it is in the water
//     crew - the count of crew on board

// var titanic = new Ship(15, 10);

// Task

// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

// Add the method

// isWorthIt

// to decide if the ship is worthy to loot. For example:

// titanic.isWorthIt() // return false

function Ship(draft,crew) {
    this.draft = draft;
    this.crew = crew;
     
     this.isWorthIt = function(){
       return this.draft - (1.5 * this.crew) > 20 ? true : false
     }
   }
   
   