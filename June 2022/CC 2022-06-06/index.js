//=======================
//Array.diff
//=======================
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]

// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(x => !b.includes(x))
   }
   
   //===============================
   //Find The Parity Outlier
   //===============================
   // You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
   // The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
   // Write a method that takes the array as an argument and returns this "outlier" N.
   // Examples
   
   // [2, 4, 0, 100, 4, 11, 2602, 36]
   // Should return: 11 (the only odd number)
   
   // [160, 3, 1719, 19, 11, 13, -21]
   // Should return: 160 (the only even number)
   
   function findOutlier(integers){
     let odd = 0
     let even = 0
     let evenArr = []
     let oddArr = []
     
     for (let i = 0; i < integers.length; i++){
       if (integers[i] % 2 === 0){
         even++
         evenArr.push(integers[i])
       }
       else{
         odd++
         oddArr.push(integers[i])
         
       }
     }
     if (odd > even){
       return +evenArr.join('')
     }
     else{
       return +oddArr.join('')
     }
     
   }
   
   //OR
   
   function findOutlier(int){
     var even = int.filter(a=>a%2==0);
     var odd = int.filter(a=>a%2!==0);
     return even.length==1? even[0] : odd[0];
   }