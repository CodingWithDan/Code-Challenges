

//=======================
//CW: Halving Sum
//=======================

// Task

// Given a positive integer n, calculate the following sum:

// n + n/2 + n/4 + n/8 + ...

// All elements of the sum are the results of integer division.
// Example

// 25  =>  25 + 12 + 6 + 3 + 1 = 47

function halvingSum(n) {
    return n + Math.floor(n/2) + Math.floor(n/4) + Math.floor(n/8) + Math.floor(n/16) + Math.floor(n/32) + Math.floor(n/64) + Math.floor(n/128) + Math.floor(n/256)
   + Math.floor(n/512)  + Math.floor(n/1024)  + Math.floor(n/2048) + Math.floor(n/4096) + Math.floor(n/ (4096 * 2))
 }
 
 halvingSum(25)
 
 //ALT
 
 function halvingSum(n) {
   var sum = 0;
   while(n > 0) {
     sum += n;
     n = Math.floor(n / 2);
   }
   return sum;
 }
 
 