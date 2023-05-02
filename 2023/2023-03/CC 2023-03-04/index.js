//=========================

//Array Array Array
//=========================

// You are given an initial 2-value array (x). You will use this to calculate a score.

// If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.

// Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.

// For example:

// if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].

function explode(x){
  
    let newArr = []
    if (typeof x[0] === 'number' && typeof x[1] === 'number'){
      let newVal = x[0] + x[1]
      for (let i = 0; i < newVal; i++){
        newArr.push(x)
      }
      return newArr
  }
  
    else if(typeof x[0] === 'string' && typeof x[1] === 'number'){
      let newVal = x[1]
      for (let i = 0; i < newVal; i++){
        newArr.push(x)
      }
      return newArr
  
    }
    else if(typeof x[0] === 'number' && typeof x[1] === 'string'){
       let newVal = x[0]
       for (let i = 0; i < newVal; i++){
        newArr.push(x)
      }
      return newArr
  
    }
    else if(typeof x[0] === 'string' && typeof x[1] === 'string'){
      return 'Void!'
    }
    else{
      return []
    }
  }
  
//ALT


function explode(x){
    let [a,b] = x;
    
    if(typeof a == "number" && typeof b == "number") return new Array(a+b).fill(x);
    else if(typeof a == "number") return new Array(a).fill(x);
    else if(typeof b == "number") return new Array(b).fill(x);
    
    return 'Void!';
  }