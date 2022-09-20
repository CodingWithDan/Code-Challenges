//==========================================
//JavaScript.info - Filter range "in place"
//==========================================
//P: Write a function Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//R: The function should only modify the array. It should not return anything.
//E: let arr = [5, 3, 8, 1];
//  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
//  alert( arr ); // [3, 1]

function filterRangeInPlace(arr, a, b){
    arr.forEach(x => {
        if(x >= a && x <= b){
            return x
        }
        else{
            arr.splice(arr[x], 1)
        }
    })
}

let arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
console.log(arr)