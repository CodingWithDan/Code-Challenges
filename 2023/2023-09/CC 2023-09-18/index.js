//===========================
//CW: Name Array Capping
//===========================

// Create a method that accepts an array of names, and returns an array of each name with its first letter capitalized.

// example

// capMe(['jo', 'nelson', 'jurie'])     // returns ['Jo', 'Nelson', 'Jurie']
// capMe(['KARLY', 'DANIEL', 'KELSEY']) // returns ['Karly', 'Daniel', 'Kelsey']

function capMe(names) {
    let arr = []
    
    for (let i = 0; i < names.length; i++){
      let name = names[i][0].toUpperCase() + names[i].toLowerCase().slice(1)
      
      arr.push(name)
    }
    
    return arr
  }
  
  capMe(['jo', 'nelson', 'jurie']) 
  
  //ALT
  
  function capMe(names) {
      return names.map(function(name) {return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();});
  }