//===========================
//CW: Love vs friendship
//===========================

// If　a = 1, b = 2, c = 3 ... z = 26

// Then l + o + v + e = 54

// and f + r + i + e + n + d + s + h + i + p = 108

// So friendship is twice as strong as love :-)

// Your task is to write a function which calculates the value of a word based off the sum of the alphabet positions of its characters.

// The input will always be made of only lowercase letters and will never be empty.

function wordsToMarks(string){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let value = 0
    
    for (let i = 0; i < string.length; i++){
      value += alpha.indexOf(string[i]) + 1
    }
    return value
  }
  
  //alt
  
  const wordsToMarks = s => [...s].reduce((res, c) => res += c.charCodeAt() - 96, 0)
  