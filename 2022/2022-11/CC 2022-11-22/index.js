//======================================
//Remove consecutive duplicate words
//======================================
  
const removeConsecutiveDuplicates = s => {
    let newStr = s.split(' ')
    let newArr = []
    
    for (let i = 0; i < newStr.length; i++){
      if(newStr[i] !== newStr[i+ 1]){
        newArr.push(newStr[i])
      }
      
    }
    return newArr.join(' ')
    
    }
  
  removeConsecutiveDuplicates("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta")
    
    
  //   Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
  
  // "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  
  // --> "alpha beta gamma delta alpha beta gamma delta"
  
  