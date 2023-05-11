//================================
//Find the next perfect square!
//================================
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

function rowSumOddNumbers(n) {
    return n ** 3
   }
   
   //===============================
   //Find the next perfect square!
   //==============================
   // You might know some pretty large perfect squares. But what about the NEXT one?
   
   // Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.
   
   // If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.
   
   // Examples:(Input --> Output)
   
   // 121 --> 144
   // 625 --> 676
   // 114 --> -1 since 114 is not a perfect square
   
   function findNextSquare(sq) {
    if(Math.sqrt(sq) % 1 == 0){
       return (Math.sqrt(sq) + 1)**2
       }
     else{
         return -1;
     }
   
   }
   
   //======================
   //Is this a triangle?
   //=======================
   // Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.
   
   // (In this case, all triangles must have surface greater than 0 to be accepted).
   
   function isTriangle(a,b,c){
     if(a < b + c && c < a + b && b < a + c){
       return true
     } 
     else{
        return false;
     }
    
   }