//=======================
//Don't give me five!
//=======================

//Don't give me five!

// In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!

// Examples:

// 1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
// 4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12

// The result may contain fives. ;-)
// The start number will always be smaller than the end number. Both numbers can be also negative!

// I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.

// Have fun coding it and please don't forget to vote and rank this kata! :-)

// I have also created other katas. Take a look if you enjoyed this kata!


function dontGiveMeFive(start, end)
{
  let count = 0
  for (let i = start; i <= end; i++){
    if(!i.toString().includes('5')){
      count++
    }
  }
  return count;
}


//=======================
//Nth Root of a Number
//=======================
//Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x

function root(x, n) {
    return Math.pow(x, 1/n)
   }


//================================
//Circle area inside square
//===============================
// Turn an area of a square in to an area of a circle that fits perfectly inside the square.


// You get the blue+red area and need to calculate the red area.

// Your function gets a number which represents the area of the square and should return the area of the circle. 
// The tests are rounded by 8 decimals to make sure multiple types of solutions work.

// You don't have to worry about error handling or negative number input: area >= 0.

// This kata might be simpler than you expect, but good luck!

function squareAreaToCircle(size){
    return (Math.PI * size)/ 4;
  }

  //============
  //ATM
  //============

//   An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!

function solve(n) {
    let bills = 0
     if (n <= -1 || n % 10 !== 0){
       return -1
     }
        if (n >= 1000){
       n -= 500
       bills++
     }
        if (n >= 900){
       n -= 500
       bills++
     }
          if (n >= 600){
       n -= 500
       bills++
     }
      if (n >= 500){
       n -= 500
       bills++
     }
        if (n >= 400){
       n -= 200
         bills++
     }
       if (n >= 200){
       n -= 200
         bills++
     }
       if (n >= 100){
       n -= 100
         bills++
     }
       if (n >= 50){
       n -= 50
         bills++
     }
        if (n >= 40){
       n -= 20
         bills++
     }
       if (n >= 20){
       n -= 20
         bills++
     }
      if (n >= 10){
       n -= 10
        bills++
     }
       if (n === 0){
        return bills
      }
     
    }

    OR
    function solve(n) {
        if (n%10!=0)
          return -1;
        var count=0;
        while (n>=500){n-=500;count++;}
        while (n>=200){n-=200;count++;}
        while (n>=100){n-=100;count++;}
        while (n>=50){n-=50;count++;}
        while (n>=20){n-=20;count++;}
        while (n>=10){n-=10;count++;}
        return count;
      }