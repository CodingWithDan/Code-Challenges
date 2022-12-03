//Given a string of characters as input, write a function that returns it with the characters reversed. 
//No Reverse Method (well brute force it first, but then no reverse method)! 

function rev (x){
    let arr = []
    for (let i = 0; i < x.split('').length; i++){
      arr.unshift(x[i])
    }
    
    return arr.join('')
  }
  
  console.log(rev('Hello'), 'olleH')
  console.log(rev('bob'), 'bob')
  console.log(rev('ClETus'), 'suTElC')
  
  
//alt
  
  //str --> char
  //str --> str Reverse
  
  function reverseString(str){
    //return str.split('').reverse().join('')
    //empty str --> loop and add each character
    //for of loop goes through each character of a string. Add the new letter to the existing string to the front
    let newStr = ''
    for (let char of str){
      newStr = char + newStr
    }
    return newStr
  }
  
  console.log(reverseString('bob'), 'bob')
  console.log(reverseString('john'), 'nhoj')
  console.log(reverseString('sarah'), 'haras')