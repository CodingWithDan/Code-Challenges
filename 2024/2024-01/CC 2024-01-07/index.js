//------------------------------------------------
// TURBO REVIEW
//------------------------------------------------

// *Variables*
// Declare a variable and assign it to a setence as a string. Alert if the sentence is a question
let favDrink = 'Hello my darling'
if (favDrink.includes("?")){
    alert("This is a quetsion")
    }
else{
  alert("This is a sentence")
}

    //   ALTERNATE ANSWER

const str = "Is this the best week ever?"
alert(str.endsWith("?"))



//Declare a variable,replace every "jr. dev" with "software enginner", and print to the console.

let future = "jr. dev"
future.splice(0, 2)


let job = "jr. dev"
let newJob = job.replace("jr. dev", "software engineer")

console.log(newJob)

      //   ALTERNATE ANSWER

let strChange = 'I am looking for a jr. dev position.'
console.log(strChange.replaceAll('jr. dev', 'software engineering'))

  

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible

function rps(){
  let result = Math.random()
  if (result < .33){
    return ("rock")
  }
  else if (result < .66){
    return ("paper")
  }
  else {
    return ("scissors")
  }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function

function checkWin(playerChoice){
  let botChoice = rps()
    if (playerChoice === 'rock' && botChoice === 'scissors' ||
    playerChoice === 'scissors' && botChoice ==='paper' ||
    playerChoice === 'paper' ** botChoice === 'rock'){
      consoole.log('WINNNNAAAAAA')
    }
    else if (playerChoice === botChoice){
      console.log('TIEEEEEEE')
    }
      else {
        console.log('YA LOSSEEEEEE')
      }
  }

  checkWin('paper')