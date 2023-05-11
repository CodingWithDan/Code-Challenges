//=====================
//Human Readable Time
//=====================
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.


//Parameters:
//Receive an integer that is non-negative, indicating a count of seconds, which are the basic unit of our clock (not ms)

//Return:
//return a clock value containing hours:minutes:seconds. 
//values 9 and below have a leading value of 0

//Examples:
//59 --> '00:00:59'
//90 -->'00:01:30'
//86400 --> '24:00:00'

//Pseudocode: 
//create 3 variables, hours, minutes, and seconds --> every 60, ++1 to minutes, reset seconds to 0. --> if minutes === 60, reset to 0 and 
//++1 to hours --> if seconds is below 60 or if seconds === 0, then end the while loop. 
//turn hours, seconds, and minutes to a string, and add padstart so it will return a 0 in front until the integer has a longer length than 1

function humanReadable (seconds) {
    let hours = 0
    let mins = 0
    let secs = 0
    
    while(seconds !== 0){
      if(seconds >= 60){
        seconds = seconds - 60
        mins++
        
         if(mins === 60){
          mins = 0
          hours++
        }
      }
      
      if(seconds < 60){
      secs = seconds
        seconds = seconds - seconds
      }
    }
   
    return `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }
  
  humanReadable(60)
  