//===================================
//JavaScript.info: Get average age
//===================================

//P: Receive an array of objects with names and ages (numbers). 
//R:Return the average age of the users
//E: 
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 29 };
// let arr = [ john, pete, mary ];
// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
//P: Use reduce and go over the array of objects, adding the numbrs and ultimately dividing by the array length


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };
let arr = [ john, pete, mary ];

function getAverageAge(users){
    return arr.reduce((sum, curr) => sum + curr.age, 0 )/arr.length
}

getAverageAge(arr)