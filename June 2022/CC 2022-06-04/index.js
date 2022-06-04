//========================
//Who likes it?
//=======================
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like

function likes(names) {
    if (names.length > 3){
        return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
    }
    else if (names.length > 2){
        return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else if (names.length > 1){
        return `${names[0]} and ${names[1]} like this`
    }
    else if (names.length > 0){
        return `${names[0]} likes this`
    }
    else{
        return `no one likes this`
    }  
}


//===================================
//Create Phone Number
//==================================
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
// Example

// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"

// The returned format must be correct in order to complete this challenge.
// Don't forget the space after the closing parentheses!

function createPhoneNumber(numbers){
    return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`
   }

   //OR

   function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
  }


  //===========================
  //Bit Counting
  //===========================
//   Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {
    let bin = (n.toString(2)).split('')
    let total = 0
    bin.forEach(x => x === '1' ? total++ : 0 )
    return total
  };

  //OR

  countBits = n => n.toString(2).split('0').join('').length;
  
