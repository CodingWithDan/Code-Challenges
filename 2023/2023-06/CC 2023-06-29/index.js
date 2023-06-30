


//==============================================
//LC . 121. Best Time to Buy and Sell Stock
//==============================================
// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.

 

// Constraints:

//     1 <= prices.length <= 105
//     0 <= prices[i] <= 104



//Pick a day where the amount is low, and select a day afterwards where the price is higher. Whichever yields the highest difference, return that difference.
//If the second day is 1, and the next day is 5, the return is 4. On day 5 though, the price is 6, so the return is 5. We return this.

var maxProfit = function(prices) {
    let profit = 0;
  
    for (let i = 0; i < prices.length - 1; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] - prices[i] > profit) {
          profit = prices[j] - prices[i];
        }
      }
    }
  
    return profit;
  };
  
  //ALT
  
  //This is the more efficient way to write it.
  
  //The more efficient way to solve this problem is to use a single pass algorithm, rather than nested loops. Here's an updated version of the code that achieves the same result with better time complexity:
  
  // In this updated code, we keep track of the minimum price encountered so far (minPrice) and the maximum profit that can be obtained (maxProfit). We iterate through the prices array once, comparing each price with the current minPrice and updating maxProfit if a higher profit is found.
  
  // This approach has a time complexity of O(n) because we perform a single pass through the array, where n is the length of the prices array. On the other hand, the original nested loops approach had a time complexity of O(n^2), which is less efficient.
  
  // By using a single pass algorithm, we reduce the time complexity and achieve a more efficient solution for finding the maximum profit in the given array of prices.
  
  var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
  
    return maxProfit;
  };
  
  