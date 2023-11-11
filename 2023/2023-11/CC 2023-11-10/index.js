

//=============================
//CW: String incrementer
//=============================

// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(str) {
    const body = str.slice(0, -1);
    const lastDigit = str.slice(-1).match(/[0-9]/);
    return lastDigit === null
      ? str + "1"
      : lastDigit != 9
      ? body + (+lastDigit + 1)
      : incrementString(body) + "0";
  }
  
  console.log(incrementString("foobar00999"), "foobar01000")
  console.log(incrementString("1"), '2')
  console.log(incrementString("fo99obar99"), 'fo99obar100')
  
  // ALT
  function incrementString(str){
      var c = str[str.length-1];
          switch(c){
              case '0':
              case '1':
              case '2':
              case '3':
              case '4':
              case '5':
              case '6':
              case '7':
              case '8': return str.substring(0, str.length-1) + (parseInt(c)+1);
              case '9': return incrementString(str.substring(0, str.length-1)) + 0;
              default: return str+"1";
                  }
  }
  
  