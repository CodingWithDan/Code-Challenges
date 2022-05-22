//=====================
//Multiples of 3 or 5
//=====================
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//P:Find multiples of 3 and 5 BELOW a designated number, then sum those numbers
//P: If the number is a multiple of 3 and 5, count it once
//P: if number is negative, return 0
//P: Number can't be a decimal
//R: Return
//E: If number is 10, multiples are 3, 5, 6 ,9 --> then the sum is 23

function solution(number){
    if(number < 0){
     return 0
   }
 
   let z =[]
   for (let i = 3; i < number; i += 3){
      if(i < number){
     z.push(i)
   }
   }
  for (let y = 5; y < number; y += 5){
     if(y < number){
     z.push(y)
   }
  }
   
 z = z.sort()
 let q = []
 for (let j = 0; j < z.length; j++) {
     if (z[j] === z[j + 1]) {
       q.push(z[j + 1]);
       j++
     }
     else{
       q.push(z[j])
     }
     }
     
   console.log(z)
   return q.reduce((acc, c) => acc + c, 0)
 }

 //OR

 function solution(number){
    let x = 0
    for (let i = 0; i < number; i++){
      if(i % 3 === 0 || i % 5 === 0){
        x += i
      }
    }
    return x
  }