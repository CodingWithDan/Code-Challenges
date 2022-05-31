//=======================
//Credit Card Mask
//======================
//Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

//Your task is to write a function maskify, which changes all but the last four characters into '#'

function maskify(cc) {
    return cc.split('').map(x => '#').splice(0, cc.length - 4).join('') + cc.slice(-4)
    }
    

//===================================
//Ghostbusters (whitespace removal)
//===================================
// Oh no! Ghosts have reportedly swarmed the city. It's your job to get rid of them and save the day!

// In this kata, strings represent buildings while whitespaces within those strings represent ghosts.

// So what are you waiting for? Return the building(string) without any ghosts(whitespaces)!

// Example:

// ghostBusters("Sky scra per");

// Should return:

// "Skyscraper"

// If the building contains no ghosts, return the string:

// "You just wanted my autograph didn't you?"

function ghostBusters(building) {
    let x = building.split('')
    let ghosts = 0
    let arr = []
   
    for (let i = 0; i < x.length; i++){
       if(x[i] === ' '){
         ghosts++ 
      }
      else{
        arr.push(x[i])
      }
    }  
    if(ghosts > 0){
      return arr.join('')
    }
   
    else{
      return "You just wanted my autograph didn't you?"
    }
  }
  