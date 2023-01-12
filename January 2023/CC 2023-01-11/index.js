  //============================
  //Count Odd Numbers below n
  //============================
  //Given a number n, return the number of positive odd numbers below n, EASY!
// Examples (Input -> Output)

// * 7  -> 3 (because odd numbers below 7 are [1, 3, 5])
// * 15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])



function oddCount(n){
    let nums = []
    for (let i = 0; i <= n; i++){
      if(i % 2 != 0){
        nums.push(i)
      } 
    }
    
    let popped = nums.pop()
  
    let counter = 0;
    for (let j = 0; j < nums.length; j++){
      counter++
    }
   return counter 
  }
  
  //simpler answer
  
  const oddCount = (n) => Math.floor(n / 2);