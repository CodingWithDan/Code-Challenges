//=======================
//Reduce My Fraction
//=======================
// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]

// All numerators and denominators will be positive integers.

// Note: This is an introductory Kata for a series... coming soon!

function reduce(fraction) {
    let numerator = fraction[0]
    let denominator = fraction[1]
  
    while(numerator % 5 === 0 && denominator % 5 === 0){
      numerator = numerator / 5
      denominator = denominator / 5
    }
    
    while(numerator % 2 === 0 && denominator % 2 === 0){
      numerator = numerator / 2
      denominator = denominator / 2
    }

    while(numerator % 3 === 0 && denominator % 3 === 0){
    numerator = numerator / 3
    denominator = denominator /3    
    }
    
      
    return [numerator, denominator]
  }
  
  reduce([60, 20])