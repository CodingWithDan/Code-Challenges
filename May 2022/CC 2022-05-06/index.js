//======================
//Quarter of the year
//======================
// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.


const quarterOf = (month) => {
    if (month >= 10){
      return 4;
    }
    if (month >= 7){
      return 3;
    }
    if (month >= 4){
      return 2;
    }
    else{
      return 1;
    }
  }
  
  //=========================
  //MakeUpperCase
  //========================
  //Write a function which converts the input string to uppercase.
  
  function makeUpperCase(str) {
    return str.toUpperCase()
  }
  
  //====================================
  //Will there be enough space?
  //=====================================
  // The Story:
  
  // Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. 
  // With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! 
  // He wants you to write a simple program telling him if he will be able to fit all the passengers.
  // Task Overview:
  
  // You have to write a function that accepts three parameters:
  
  //     cap is the amount of people the bus can hold excluding the driver.
  //     on is the number of people on the bus excluding the driver.
  //     wait is the number of people waiting to get on to the bus excluding the driver.
  
  // If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.
  
  function enough(cap, on, wait) {
    if( cap >= on + wait){
      return 0
    }
    if (cap < on + wait){
      return (on + wait) - cap
    }
  }
  
  //==================================
  //Subtract the Sum
  //==================================
  
  // Complete the function which get an input number n such that n >= 10 and n < 10000, then:
  
  //     Sum all the digits of n.
  //     Subtract the sum from n, and it is your new n.
  //     If the new n is in the list below return the associated fruit, otherwise return back to task 1.
  
  // Example
  
  // n = 325
  // sum = 3+2+5 = 10
  // n = 325-10 = 315 (not in the list)
  // sum = 3+1+5 = 9
  // n = 315-9 = 306 (not in the list)
  // sum = 3+0+6 = 9
  // n =306-9 = 297 (not in the list)
  // .
  // .
  // .
  // ...until you find the first n in the list below.
  
  function SubtractSum(n){
  let list = [
  "kiwi",
  "pear",
  "kiwi",
  "banana",
  "melon",
  "banana",
  "melon",
  "pineapple",
  "apple",
  "pineapple",
  "cucumber",
  "pineapple",
  "cucumber",
  "orange",
  "grape",
  "orange",
  "grape",
  "apple",
  "grape",
  "cherry",
  "pear",
  "cherry",
  "pear",
  "kiwi",
  "banana",
  "kiwi",
  "apple",
  "melon",
  "banana",
  "melon",
  "pineapple",
  "melon",
  "pineapple",
  "cucumber",
  "orange",
  "apple",
  "orange",
  "grape",
  "orange",
  "grape",
  "cherry",
  "pear",
  "cherry",
  "pear",
  "apple",
  "pear",
  "kiwi",
  "banana",
  "kiwi",
  "banana",
  "melon",
  "pineapple",
  "melon",
  "apple",
  "cucumber",
  "pineapple",
  "cucumber",
  "orange",
  "cucumber",
  "orange",
  "grape",
  "cherry",
  "apple",
  "cherry",
  "pear",
  "cherry",
  "pear",
  "kiwi",
  "pear",
  "kiwi",
  "banana",
  "apple",
  "banana",
  "melon",
  "pineapple",
  "melon",
  "pineapple",
  "cucumber",
  "pineapple",
  "cucumber",
  "apple",
  "grape",
  "orange",
  "grape",
  "cherry",
  "grape",
  "cherry",
  "pear",
  "cherry",
  "apple",
  "kiwi",
  "banana",
  "kiwi",
  "banana",
  "melon",
  "banana",
  "melon",
  "pineapple",
  "apple",
  "pineapple"]
    
  
    let a = n.toString().split('').reduce((agg, c) => agg + +c, 0)
    let b = n - a
    if (list[b - 1] === undefined){
      return 'apple';
    }
    else{
    return list[b - 1]
      }
  }
  
  SubtractSum(100)
  
  OR
  
  const SubtractSum = n => {
    let number = n - String(n).split('').reduce((sum, item) => sum += +item, 0);
    if(number > 100) return SubtractSum(number);
    else return fruits[number];
  }