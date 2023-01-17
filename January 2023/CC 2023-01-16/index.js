//===============
//Greet Me
//===============

// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

var greet = function(name) {
    let nam = name.toLowerCase()
     
     return `Hello ${nam[0].toUpperCase() + nam.slice(1)}!`
   };
   