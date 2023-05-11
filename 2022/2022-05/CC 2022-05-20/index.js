//===============================
//Grasshopper - Basic Function Fixer
//======================================

// Fix the function

// I created this function to add five to any number that was passed in to it and return the new value. 
// It doesn't throw any errors but it returns the wrong number.

// Can you help me fix the function?

// function addFive(num) {
//   var total = num + 5
//   return num
// }

function addFive(num) {
    var total = num + 5
    return total
  }
  
  //=====================================
  //Grasshopper - Debug sayHello
  //=====================================
  
  // Debugging sayHello function
  
  // The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard.
  // It is your job to fix the code and get the program working again!
  
  // Example output:
  
  // Hello, Mr. Spock
  
  // function sayHello(name) {
  //   return 'Hello'
  // }
  
  function sayHello(name) {
    return 'Hello, ' + name
  }
  
  
  //=============================================
  //Grasshopper - Terminal game combat function
  //==============================================
  // Create a combat function that takes the player's current health and the amount of damage recieved,
  // and returns the player's new health. Health can't be less than 0.
  
  function combat(health, damage) {
    if (health - damage <= 0){
      return 0
    }
    else{
      return health - damage
    }
  }
  
  
  //================================
  //Super Duper Easy
  //===============================
  //Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
  
  function problem(x){
   if(typeof(x) === 'number'){
     return x * 50 + 6
   }
    else{
       return 'Error'
    }
    
  }
  
  
  //=================================================
  //Training JS #7: if..else and ternary operator
  //=================================================
  // Task:
  
  // Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, 
  //   different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.
  // number 	price (cents)
  // n < 5 	100
  // n >= 5 and n < 10 	95
  // n >= 10 	90
  // //
  
  
  
  function saleHotdogs(n){
    if (n < 5){
      return n * 100
    }
    if (n >= 5 && n < 10){
      return n * 95
    }
    else{
       return n * 90
    }
   
  }
  
  //OR
  
  function saleHotdogs(n){
    return (n < 5) ? n * 100 : n >= 5 && n < 10 ? n * 95 : n * 90
    }
   
  
  //=====================
  //No zeros for heros
  //=====================
  // Numbers ending with zeros are boring.
  
  // They might be fun in your world, but not here.
  
  // Get rid of them. Only the ending ones.
  
  // 1450 -> 145
  // 960000 -> 96
  // 1050 -> 105
  // -1050 -> -105
  
  // Zero alone is fine, don't worry about it. Poor guy anyway
  function noBoringZeros(n) {
  if (n === 0){
    return 0
  }
    else {
    
  let x = n.toString().split('')
   
   for (let i = x.length - 1; i >= 0; i--){
     if(x[i] === '0'){
       x = x.slice(0, -1)
     }
     else{
       return +x.join('')
     }
   }
  }
   }
  noBoringZeros(1450)
  
  //OR
  
  function noBoringZeros(n) {
    while (n % 10 === 0 && n !== 0) {
      n = n / 10
    }
    return n
  }