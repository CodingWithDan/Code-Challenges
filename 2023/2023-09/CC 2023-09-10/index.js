//===============================
//CW: Make the Deadfish Swim
//===============================

// Write a simple parser that will parse and run Deadfish.

// Deadfish has 4 commands, each 1 character long:

//     i increments the value (initially 0)
//     d decrements the value
//     s squares the value
//     o outputs the value into the return array

// Invalid characters should be ignored.

// parse("iiisdoso") => [ 8, 64 ]


// Return the output array, and ignore all non-op characters
function parse( data )
{
  
  let arr = []
  let value = 0
  
  for (let i = 0; i < data.length; i++){
    if(data[i] == 'i'){
      value++
      console.log(value)
    }
    if(data[i] == 'd'){
      value--
      console.log(value)
    }
    if(data[i] == 's'){
      value = value**2
      console.log(value)
    }
    if(data[i] == 'o'){
      arr.push(value)
    }
  }
  
  return arr
  
}

parse("iiisdoso")
