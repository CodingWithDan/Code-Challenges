//=======================
//CW: Check same case
//=======================

// Write a function that will check if two given characters are the same case.

//     If either of the characters is not a letter, return -1
//     If both characters are the same case, return 1
//     If both characters are letters, but not the same case, return 0

// Examples

// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

export function sameCase(a : string, b : string): number {

    let aa : number = a.charCodeAt(0)
    let bb : number = b.charCodeAt(0)
    
    if((aa > 64 && aa < 91) && (bb > 64 && bb < 91)){
      return 1
    }
    else if((aa > 96 && aa < 123) && (bb > 96 && bb < 123)){
      return 1
    }
    
    else if((aa > 64 && aa < 91) && (bb > 96 && bb < 123)){
      return 0
    }
    else if((bb > 64 && bb < 91) && (aa > 96 && aa < 123)){
      return 0
    }
    else{
      return -1
    }
    }
  
  //ALT
  
  // export function sameCase(a : string, b : string): number {
  //   return !isLetter(a)||!isLetter(b) ? -1 : +(isLow(a)==isLow(b))
  // }
  
  const isLetter=(c:string)=>/[a-z]/i.test(c)
  const isLow   =(c:string)=>/[a-z]/.test(c)