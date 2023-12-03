
//=======================
//CW: Noonerize Me
//=======================

// Spoonerize... with numbers... numberize?... numboonerize?... noonerize? ...anyway! If you don't yet know what a spoonerism is and haven't yet tried my spoonerism kata, please do check it out first.

// You will create a function which takes an array of two positive integers, spoonerizes them, and returns the positive difference between them as a single number or 0 if the numbers are equal:

// [123, 456] = 423 - 156 = 267

// Your code must test that all array items are numbers and return "invalid array" if it finds that either item is not a number. The provided array will always contain 2 elements.

// When the inputs are valid, they will always be integers, no floats will be passed. However, you must take into account that the numbers will be of varying magnitude, between and within test cases.

function noonerize(numbers) {
  
    if(typeof numbers[0] != "number" || typeof numbers[1] != "number") {
      return 'invalid array'
      }
    
    let un = String(numbers[0])[0] + String(numbers[1]).slice(1)
    let dos = String(numbers[1])[0] + String(numbers[0]).slice(1)
    
    return  Math.abs(Number(dos) - Number(un))
  }
  
  noonerize([12, 34])
  
  //ALT
  
  const noonerize = (numbers) => {
    let x, y;
    
    [x, y] = numbers.map(String);
    [x, y] = [y[0] + x.slice(1), x[0] + y.slice(1)].map(Number);
    
    return x && y ? Math.abs(x - y) : 'invalid array';
  }
  
  