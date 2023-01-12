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

