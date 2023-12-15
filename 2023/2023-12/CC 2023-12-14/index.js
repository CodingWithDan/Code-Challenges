
//=======================
//CW: Closing in Sum
//=======================

// Create a function that returns the sum of the digits formed from the first and last digits, all the way to the center of the number.
// Worked Example

// 2520 ➞ 72

// # The first and last digits are 2 and 0.
// # 2 and 0 form 20.
// # The second digit is 5 and the second to last digit is 2.
// # 5 and 2 form 52.

// # 20 + 52 = 72

// Examples

// 121 ➞ 13
// # 11 + 2

// 1039 ➞ 22
// # 19 + 3

// 22225555 ➞ 100
// # 25 + 25 + 25 + 25



function closingInSum(num) {
    const numStr = num.toString();
    const length = numStr.length;
    let sum = 0;
  
    for (let i = 0; i < Math.floor(length / 2); i++) {
      const firstDigit = parseInt(numStr[i]);
      const lastDigit = parseInt(numStr[length - 1 - i]);
  
      sum += parseInt(`${firstDigit}${lastDigit}`);
    }
  
    // If the length is odd, add the middle digit
    if (length % 2 !== 0) {
      sum += parseInt(numStr[Math.floor(length / 2)]);
    }
  
    return sum;
  }
  
  //ALT
  
  function closingInSum(n) {
    const splitNumb = String(n).split('');
    const arrOfNumb = [];
  
    while (splitNumb.length > 0) {
      const firstNumb = splitNumb.shift();
      const lastNumb = splitNumb.pop();
      if (lastNumb) {
        arrOfNumb.push(firstNumb + lastNumb);
      } else {
        arrOfNumb.push(firstNumb);
      }
    }
  
    return arrOfNumb.reduce((acc, item) => acc + Number(item), 0);
  }
  