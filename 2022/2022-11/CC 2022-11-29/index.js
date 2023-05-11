//=============================
//Sum of Odd Cubed Numbers
//=============================

// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {

    if(arr.some(x=> !Number.isInteger(x))){
       return undefined
       }
    else{
      return arr.filter(x =>  x % 2 !== 0).reduce((agg, curr) => agg + curr **3, 0)
    }
    
    }
    
    cubeOdd([1, 2, 3, 4])