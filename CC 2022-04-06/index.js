//Title: Hello Object
//Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object.

let user = {
    
}
user.name = "John",
user.surname ="Smith"
user.name = "Pete";
delete(user.name);

console.log(user.surname)
console.log(user.name)


// Title: Check for Emptiness
// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "get up";

alert( isEmpty(schedule) ); // false



//Title: Sum object properties


// We have an object storing salaries of our team:

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example below.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

// If salaries is empty, then the result must be 0.

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }