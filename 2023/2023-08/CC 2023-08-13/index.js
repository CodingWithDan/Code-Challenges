//====================
//CW: Dropcaps
//====================

// DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

// But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

// *should work also on Leading and Trailing Spaces and caps.

// "apple"            => "Apple"
// "apple of banana"  => "Apple of Banana"
// "one   space"      => "One   Space"
// "   space WALK   " => "   Space Walk   " 

// Note: you will be provided atleast one word and should take string as input and return string as output.

function dropCap(m) {
    let n = m.split(' ')
    let newArr = []
    for (let i = 0; i < n.length; i++)
      if(n[i].length > 2){
       let neww = n[i].toLowerCase()
       let nneww = neww[0].toUpperCase() + neww.slice(1)
        newArr.push(nneww)
      }
    else{
      newArr.push(n[i])
    }
    
    return newArr.join(' ')
  }

  //ALT

  function dropCap(n) {
    n = n.split(' ');
    for(var i = 0; i < n.length; i++) {
      if(n[i].length > 2) {
        n[i] = n[i].slice(0, 1).toUpperCase() + n[i].slice(1).toLowerCase();
      }
    }
    return n.join(' ');
  }