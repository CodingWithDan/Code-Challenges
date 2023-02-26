//=================
//Break camelCase
//=================

// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
function solution(string) {
    let str = string.split('')
    let newArr = []
    for (let i = 0; i < str.length; i++){
      if(str[i]  === str[i].toUpperCase()){
        newArr.push(' ')
        newArr.push(string[i])
      }
      else {
        newArr.push(str[i])
      }
    }
    return newArr.join('')
      
  }
  
  //alt

  function solution(string) {
    string = string.split('').map(function (el) {
      if (el === el.toUpperCase()) {
        el = ' ' + el
      }
      return el
    })
    return string.join('')
  }