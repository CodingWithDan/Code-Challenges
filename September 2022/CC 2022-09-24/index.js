  //======================================
  //JavaScript.info: Sort users by age
  //======================================
 // Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.
  //P: 
  
  let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [ pete, john, mary ];

sortByAge(arr);

// now: [john, mary, pete]
alert(arr[0].name); // John
alert(arr[1].name); // Mary
alert(arr[2].name); 


function sortByAge(tryme){
  return arr.sort((a, b) => a.age - b.age)
}