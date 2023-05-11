//=================================
//Grasshopper - Order of operations
//=================================
// Grasshopper Order of Operations

//You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. 
//Fix the function to make it return 32 without changing the number or the operators.

//function orderOperations () {
//   return 2 + 2 * 2 + 2 * 2
// }

function orderOperations () {
    return (2 + 2) * (2 + 2) * 2
  }
  
  //===================================
  //Grasshopper - Object syntax debug
  //===================================
  // Object debugging
  
  // While making a zork-type game, you create an object of rooms. 
  // Unfortunately, the game is not working. Find all of the errors in the rooms object to get your game working again.
  // var rooms = {
  //   first: {
  //     description: 'This is the first room'
  //     items: {
  //       chair: 'The old chair looks comfortable',
  //       lamp: 'This lamp looks ancient'
      
  //   },
  //   second: {
  //     description: 'This is the second room'
  //     items: {
  //       couch: 'This couch looks like it would hurt your back,
  //       table: 'On the table there is an unopened bottle of water'
  //     }
  //   }
  // }
  
  var rooms = {
    first: {
      description: 'This is the first room',
      items: {
        chair: 'The old chair looks comfortable',
        lamp: 'This lamp looks ancient'
      }
    },
    second: {
      description: 'This is the second room',
      items: {
        couch: 'This couch looks like it would hurt your back',
        table: 'On the table there is an unopened bottle of water'
      }
    }
  }
  
  
  //==================================
  //Grasshopper - Terminal Game #1
  //=================================
  
  // Terminal Game - Create Hero Prototype
  
  // In this first kata in the series, you need to define a Hero prototype to be used in a terminal game. The hero should have the following attributes:
  // attribute 	value
  // name 	user argument or 'Hero'
  // position 	'00'
  // health 	100
  // damage 	5
  // experience 	0
  
  function Hero (name = 'Hero') {
   this.name = name
   this.position = '00'
    this.health = 100,
    this.damage = 5,
    this.experience = 0
  }
  
  //OR
  
  function Hero (name) {
    this.name = name || 'Hero';
    this.position = '00';
    this.health = 100;
    this.damage = 5;
    this.experience = 0;
  }