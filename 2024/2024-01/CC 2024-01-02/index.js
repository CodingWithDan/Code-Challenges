
//------------------------------------------------
// OBJECTS Tony HAWK
//------------------------------------------------
//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function TonyHawkCharacter (chSpecial, chBoard, chSpeed, chBalance){
  this.special = special
  this.board = board
  this.speed = speed
  this.balance = balance
  
 this.taunt = function(){
   console.log("Let's sk8, bro!")
 }

  this.wipeout = function(){
    console.log("MY HIP!!")
  }
  
  this.grindSound = function(){
    console.log("I'm on my grind!")
  }
}

let oldManJenkins = new TonyHawkCharacter('Senior discount', 'Wheelchair', 'Slow', 'Very Good')

console.log(oldManJenkins)
