//============================
//Frontend Handbook Q#1
//============================


//Make this work: duplicate([1,2,3,4,5]); // [1,2,3,4,5,1,2,3,4,5] 

function dupe (arr){
    return arr.concat(arr)
}

console.log(dupe([1,2,3,4,5]))

//============================
//Frontend Handbook Q#2
//============================

// Create a for loop that iterates up to 100 while outputting "fizz" at multiples of 3, "buzz" at multiples of 5 and "fizzbuzz" at multiples of 3 and 5

function fizzbuzz(n){
for(let i = 0; i < n; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz')
    }
        else if(i % 3 === 0){
        console.log('fizz')
    }
        else if(i % 5 === 0){
       console.log("buzz")
    }
        else{
        console.log(i)
        }
}
}

fizzbuzz(100)
  