//==========================================
//JavaScript.info - Filter range "in place"
//==========================================
//P: Write a function Write a function filterRangeInPlace(arr, a, b) that gets an array arr and removes from it all values except those that are between a and b. The test is: a ≤ arr[i] ≤ b.
//R: The function should only modify the array. It should not return anything.
//E: let arr = [5, 3, 8, 1];
//  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
//  alert( arr ); // [3, 1]
//P: Create a for... of loop. Each element will be referenced as the variable ele. 
//P: to track the index, we'll create a variable called inx = arr.indexOf(ele)
//P: we create an else statement, and excise that element at that index with splice if it violates it.

function filterRangeInPlace(arr, a, b){

    for(const ele of arr){
        let inx = arr.indexOf(ele)

        if(ele < a || ele > b){
            arr.splice(inx, 1)
        }
    }
}

let arr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
console.log(arr)


//We can also do this with a for...in loop, which instead interates over the index instead of the element

function filterRangeInPlace(carr, a, b){

    for(const i in carr){
           if(carr[i] < a || carr[i] > b){
            carr.splice(i, 1)
        }
    }
}

let carr = [5, 3, 8, 1]
filterRangeInPlace(arr, 1, 4)
console.log(arr)