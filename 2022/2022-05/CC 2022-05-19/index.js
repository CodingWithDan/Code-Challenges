//===================================
//Grasshopper - Debug
//===================================
// Debug celsius converter

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)

// Remember that typically temperatures in the current weather conditions are given in whole numbers. 
// It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. 
// Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.


// function weatherInfo (temp) {
//   var c : convert(temp)
//   if (c > 0)
//     return (c + " is freezing temperature")
//   else
//     return (c + " is above freezing temperature")
// }

// function convertToCelsius (temperature) {
//   var celsius = (tempertur) - 32 + (5/9)
//   return temperature
// }


function weatherInfo (temp) {
  
    function convert(temperature){
      var celsius = (temperature - 32) * (5/9)
      return celsius
    }
      
      var c = convert(temp)
      if (c <= 0){
        return (c + " is freezing temperature")
        }
      else {
        return (c + " is above freezing temperature")
    }
    }
    
    
    
    //====================================
    //Grasshopper - Messi goals function
    //======================================
    // Messi goals function
    
    // Messi is a soccer player with goals in three leagues:
    
    //     LaLiga
    //     Copa del Rey
    //     Champions
    
    // Complete the function to return his total number of goals in all three leagues.
    
    // Note: the input will always be valid.
    
    // For example:
    
    // 5, 10, 2  -->  17
    
    //P: Whole number, positive, 
    //P: Add the three numbers, and return the sum
    //R: Return the sum
    //E: (4, 5, 6) = 15
    
    function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
      return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
    }
    
    //==================================
    //Generate range of integers
    //=================================
    // Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. 
    // The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)
    // Task
    
    // Implement a function named
    
    // generateRange(2, 10, 2) // should return array of [2,4,6,8,10]
    // generateRange(1, 10, 3) // should return array of [1,4,7,10]
    
    // Note
    
    //     min < max
    //     step > 0
    //     the range does not HAVE to include max (depending on the step)
    
    //P: Generate a range of values, within the parameters of mi nand max
    //P: step will always be a positive value, could be a decimal?
    //P: for the min and max, there can be ngative numbers as long as min is less than max
    //P: place the set of new numbers into an array
    //R: return the array
    //E: (2, 10, 2) // should return array of [2,4,6,8,10]
    
    function generateRange(min, max, step){
    let newArr = []
    for(let i = min; i <= max; i += step){
      newArr.push(i)
    }
      return newArr
    }
    