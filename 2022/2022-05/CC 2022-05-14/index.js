//======================
//Get Planet Name By ID
//======================
// The function is not returning the correct values. Can you figure out why?

// Example (Input --> Output ):

// 3 --> "Earth"

// function getPlanetName(id){
//     var name;
//     switch(id){
//       case 1:
//         name = 'Mercury'
//       case 2:
//         name = 'Venus'
//       case 3:
//         name = 'Earth'
//       case 4:
//         name = 'Mars'
//       case 5:
//         name = 'Jupiter'
//       case 6:
//         name = 'Saturn'
//       case 7:
//         name = 'Uranus'
//       case 8:
//         name = 'Neptune'
//     }
    
//     return name;
//   }



function getPlanetName(id){
    var name;
    switch(id){
      case 1:
        name = 'Mercury'
        break;
      case 2:
        name = 'Venus'
        break;
      case 3:
        name = 'Earth'
        break;
      case 4:
        name = 'Mars'
        break;
        
      case 5:
        name = 'Jupiter'
        break;
        
      case 6:
        name = 'Saturn'
        break;
      case 7:
        name = 'Uranus'
        break;
      case 8:
        name = 'Neptune'
        break;
    }
    
    return name;
  }
  
  getPlanetName(2)


  //====================
  //Keep up the hoop
  //====================
//   Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount (n) {
    if (n >= 10){
      return "Great, now move on to tricks"
    }
    else {
      return "Keep at it until you get it"
    }
  }



  //=================================================
  //Find numbers which are divisible by given number
  //===================================================
//   Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.
// Example

// divisibleBy([1, 2, 3, 4, 5, 6], 2) == [2, 4, 6]


function divisibleBy(numbers, divisor){
    let x = []
    for (let i = 0; i < numbers.length; i++){
      if(numbers[i] % divisor === 0){
        x.push(numbers[i])
      }
    }
    return x
  }
  
  divisibleBy([1,2,3,4,5,6], 2)


  //ALT

  function divisibleBy(numbers, divisor){
    return numbers.filter(num => num % divisor === 0)
   }