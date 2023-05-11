
//=========================
//The Hashtag Generator
//=========================
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.


function generateHashtag(str) {
  if (str === ""){
    return false
  } 
  else{
  let result = '#' + str.toLowerCase().split(' ').map((word) => word.charAt(0).toUpperCase() + word.substr(1)).join('')
   if (result === "" ||  result === "#" ||  result.length > 140) {
    return false;
  }
    return result
    }
}


//===============================
//A Strange Trip to the Market
//===============================
// There are only 2 guaranteed ways to tell if you are speaking to The Loch Ness Monster: 
// A) it is a 400 foot tall beast from the paleolithic era; 
// B) it will ask you for tree fiddy.

// Since Nessie is a master of disguise, 
//   the only way accurately tell is to look for the phrase "tree fiddy". 
// Since you are tired of being grifted by this monster, 
//   the time has come to code a solution for finding The Loch Ness Monster. 
// Note that the phrase can also be written as "3.50" or "three fifty".

function isLockNessMonster(x) {
  if (x.includes('tree fiddy') || x.includes('3.50')){
    return true;
  }
   else{
     return false;
   }
 }
 
 
 //========================
 //Student's Final Grade
 //========================
 // Create a function finalGrade, 
 //   which calculates the final grade of a student depending on two parameters:
 // a grade for the exam and a number of completed projects.
 
 // This function should take two arguments: exam - grade for exam (from 0 to 100); 
 // projects - number of completed projects (from 0 and above);
 
 // This function should return a number (final grade). There are four types of final grades:
 
 //     100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
 //     90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
 //     75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
 //     0, in other cases
 
 function finalGrade (exam, projects) {
   if (exam > 90 || projects > 10){
     return 100
   }
   if (exam > 75 && projects >= 5){
     return 90
   }
   if (exam > 50 && projects >= 2){
     return 75
   }
   else {
     return 0
   }
 }
 
 //=====================================
 //For Twins: 2. Math operations
 //====================================
 // A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. 
 // The brick's length and width are equal, forming a square; its height may be different. 
 // Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. 
 // Write a function iceBrickVolume that will accept these parameters:
 
 //     radius - bottle's radius (always > 0);
 //     bottleLength - total bottle length (always > 0);
 //     rimLength - length from bottle top to brick (always < bottleLength);
 
 // And return volume of ice brick that magician managed to put into a bottle.
 
 function iceBrickVolume(radius, bottleLength, rimLength) {
    return (bottleLength - rimLength) * radius * 2 * radius;
 }