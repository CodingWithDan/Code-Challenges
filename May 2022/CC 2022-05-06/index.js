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