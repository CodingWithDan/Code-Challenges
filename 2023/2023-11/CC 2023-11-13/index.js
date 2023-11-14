
//==============================
//CW: Divide and Conquer
//==============================

// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let total = 0
    for (let i = 0; i < x.length; i++){
      if(typeof x[i] === "string"){
        total -= Number(x[i])
      }
      else{
        total += x[i]
      }
    }
    return total
  }
  
  console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14)
  
  //ALT
  
  function divCon(x){
    return x.reduce((acc, cur) => typeof cur === 'number'? acc + cur : acc - Number(cur),0)
  }
  
  