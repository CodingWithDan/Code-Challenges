

//=======================
//CW: Tip Calculator
//=======================

// Complete the function, which calculates how much you need to tip based on the total amount of the bill and the service.

// You need to consider the following ratings:

//     Terrible: tip 0%
//     Poor: tip 5%
//     Good: tip 10%
//     Great: tip 15%
//     Excellent: tip 20%

// The rating is case insensitive (so "great" = "GREAT"). If an unrecognised rating is received, then you need to return:

//     "Rating not recognised" in Javascript, Python and Ruby...
//     ...or null in Java
//     ...or -1 in C#

// Because you're a nice person, you always round up the tip, regardless of the service.


function calculateTip(amount, rating) {
  
    let lowerCaseRating = rating.toLowerCase()
    if(lowerCaseRating == 'terrible'){
      return 0
    }
    if(lowerCaseRating == 'poor'){
      return Math.ceil(amount *.05)
    }
    if(lowerCaseRating == 'good'){
      return Math.ceil(amount * .1)
    }
    if(lowerCaseRating == 'great'){
      return Math.ceil(amount *.15)
    }
    if(lowerCaseRating == 'excellent'){
      return Math.ceil(amount *.2)
    }
    else{
      return "Rating not recognised"
    }
}