//========================================
//If you can't sleep, just count sheep!!
//========================================
// If you can't sleep, just count sheep!!
// Task:

// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.


var countSheep = function (num){
    let stri = ""
    for (let i = 1; i <= num; i++){
   stri += `${i} sheep...`;
    }
     return stri 
 }
  
  //=========================
  //Will You Make It?
  //=========================
  //You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! 
  //You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
  //Function should return true (1 in Prolog, NASM and COBOL) if it is possible and false (0 in Prolog, NASM and COBOL) if not. The input values are always positive.
  
  
 const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
   if (mpg*fuelLeft >= distanceToPump) {
     return true;
   } else {
     return false;
   }
 };