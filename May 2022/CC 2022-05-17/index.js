//=============================
//Beginner Series #4 Cockroach
//==============================

// The cockroach is one of the fastest insects. 
// Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// For example:

// 1.08 --> 30

// Note! The input is a Real number (actual type is language dependent) and is >= 0. 
// The result should be an Integer.

function cockroachSpeed(s) {
    return Math.floor(s * 27.7778)
  }

//=========================================
//Thinkful - Logic Drills: Traffic light
//=========================================

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
    if(current === "red"){
      return "green"
    }
    if(current === "yellow"){
      return "red"
    }
    if(current === "green"){
      return "yellow"
    }
  
  }

  //=============================================================
  //Correct the mistakes of the character recognition software
  //=============================================================
//   Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

//     S is misinterpreted as 5
//     O is misinterpreted as 0
//     I is misinterpreted as 1

// The test cases contain numbers only by mistake.

function correct(string){
return string.split('').map((x)=> {
    if(x === '0'){
      return 'O' 
    }
   
    if (x === '5'){
      return 'S' 
    }
    
    if (x === '1'){
      return 'I' 
    }
    else {
      return x
    }
    
  }).join('')
}