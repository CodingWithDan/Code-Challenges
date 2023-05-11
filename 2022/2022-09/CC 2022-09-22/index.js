//========================================
//JavaScript.info -- Map to Names
//========================================
  //P: You have an array of user objects, each one has user.name. Write the code that converts it into an array of names.
  //R: Return an array of names, taken from the array of user objects with the the key/name of name
  //E: 
 //let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = /* ... your code */

// alert( names ); // John, Pete, Mary
  
  //P: We have three objects, all with two properties, and all with the key/name of "name". We want to extract the name from each object and place it in an array
  //P: With dot notation, we can pull properties from within objects. With that, we want to use the map method to iterate over users (which contains all the objects)
  //P: So we do users.map --> and then we iterate over each element within this array and find the name in each and return it.
  
  let john = { name: "John", age: 25 };
  let pete = { name: "Pete", age: 30 };
  let mary = { name: "Mary", age: 28 };
  
  let users = [ john, pete, mary ];
  
  let names = users.map(x => x.name)
  
  alert( names ); // John, Pete, Mary
  