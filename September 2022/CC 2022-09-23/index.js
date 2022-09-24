//========================================
//JavaScript.info -- Map to objects
//========================================
  
//P: You have an array of user objects, each one has name, surname and id.
//R: Write the code to create another array from it, of objects with id and fullName, where fullName is generated from name and surname.
//E:
// let john = { name: "John", surname: "Smith", id: 1 };
// let users = [ john, pete, mary ];
// let usersMapped = /* ... your code ... */
// usersMapped = [{ fullName: "John Smith", id: 1 }...
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith
//P:  We need to iterate over each element and create a new object for each one, placing a FULLNAME and ID in each.
//P: The big thing to note here is that we want to produce a new object, but we can't simply do:
   //  x => {...}    Here JavaScript would treat { as the start of function body, not the start of the object. 
  //We have to do  x => ({...})    he workaround is to wrap them in the “normal” brackets first. 
  //If we were doing just a regular map function, we wouldn't need the brackets or paratnethses at all. T
  
  let john = { name: "John", surname: "Smith", id: 1 };
  let pete = { name: "Pete", surname: "Hunt", id: 2 };
  let mary = { name: "Mary", surname: "Key", id: 3 };
  
  let users = [ john, pete, mary ];
  
  let usersMapped = users.map(x => ({fullName: `${x.name} ${x.surname}`, id: x.id }))
  
  
  
  console.log( usersMapped[0].id ) 
  console.log (usersMapped[0].fullName ) // John Smith