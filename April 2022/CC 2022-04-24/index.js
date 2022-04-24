//====================
// USD => CNY
//====================
// Create a function that converts US dollars (USD) to Chinese Yuan (CNY). 
// The input is the amount of USD as an integer, 
// and the output should be a string that states the amount of 
// Yuan followed by 'Chinese Yuan'.charAtThe conversion rate you should use is 6.75 CNY for every 1 USD. 
// All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21") 

function usdcny(usd) {
  
    let yuan = (usd * 6.75).toFixed(2)
    return `${yuan} Chinese Yuan`
  }

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