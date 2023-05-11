
  // Get the mean of an array
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)
  
  
  
  //Great, thank you for the lovely question. So if I'm understanding this correctly, I will be receiving an array
//with an undetermined amount of numbers. it is my task to add those numbers, and divide it by the length.
//Will there be just numbers, no strings that say "one" for example? Will I receive decimals, or floated numbers? Negative numbers?
//Great! So just to clarify and show yo uwhat I'm working toawrds. 
//I will have a function getAverage. When i call getAverage and place an argument inside with say an array of 
//[2,,2,2,2] --> it will return 2. 
//Cool, so how I'd want to start this off is first add up all the numbers in the array. I believe I can achieve this with a reduce method.
//After the function is complete, I can divide it by the length of the passed in array by doing marks.length.
//And because we want to round this down to its nearest integer, we can wrap this in a Math.floor

function getAverage(marks){
    return Math.floor(marks.reduce((sum, curr) => sum + curr, 0) / marks.length)
  }