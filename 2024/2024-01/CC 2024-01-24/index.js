

//==========================
//CW: Backspaces in string
//==========================

// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
    let ss = s.split('')
    let sss = []
    for(let i = 0; i < ss.length; i++){
      if(ss[i] =='#'){
        sss.pop()
      }
      else{
        sss.push(s[i])
      }
    }
    return sss.join('')
  }
  
  