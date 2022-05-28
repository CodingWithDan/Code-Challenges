//=======================
//Jaden Casing Strings
//=======================
// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

String.prototype.toJadenCase = function () {
    //...
  let str = this.split(' ')
  let newStr = []
  for (let i = 0; i < str.length; i++){
    newStr.push(str[i][0].toUpperCase() + str[i].slice(1))
  }
  return newStr.join(' ')
  };


  //===========================
  //Narcissistic Numbers
  //===========================
// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

function isNarcissistic(n) {
    let l = String(n).length
    let arr = (String(n).split('')).map(x => +x)
    
    if(arr.reduce((agg, c) => agg = agg + c**l, 0) === n){
      return true
    }
    else {
      return false
    }
  }
  
  isNarcissistic(153)
