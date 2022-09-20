//=================================
//JavaScript.info -- FilterRange
//=================================
// Write a function filterRange(arr, a, b) that gets an array arr, looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.

// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b){
    let order = arr.sort()
    return order.filter(x => x >= a && x <= b )
            
        }
  

let arrd = [5, 3, 8, 1];
let filterd = filterRange(arrd, 1, 4)

console.log(filterd)
console.log(arrd)