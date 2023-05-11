//=================================================
//JavaScript.info: Created keyed object from Array
//=================================================

//P: In this task we assume that id is unique. There may be no two array items with the same id
//P: receive an array of users in the form {id:..., name:..., age:... }
//P: Use the reduce method
//R: Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.
//E: 

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// // after the call we should have:

// usersById = {
//   john: {id: 'john', name: "John Smith", age: 20},
//   ann: {id: 'ann', name: "Ann Smith", age: 24},
//   pete: {id: 'pete', name: "Pete Peterson", age: 31},
// }


let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  function groupById(array){
    array.forEach((item) => users[item.id] = {id: item.id, name: item.name, age: item.age} )
    return users
  }

  groupById(users)