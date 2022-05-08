//===================
//Valid Parentheses
//===================
//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. 
//The function should return true if the string is valid, and false if it's invalid.


function validParentheses(woa) {
    let parens = woa.split('')
    for (let i = 0; i <= parens.length; i++){
      if (parens[i] === "(" && parens[i + 1] === ")"){
        parens.splice(i, 2)
        i = i - 2
      }
    }
    if (parens.join('') === ""){
      return true
    }
    
    if (parens.join('') !== ""){
      return false
    }
  }

//========================
//Disemvowel Trolls
//========================
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.


  function disemvowel(str) {
    let st = str.split('')
    for (let i = 0; i <= st.length; i++){
      if (st[i] === 'a' || st[i]=== 'A' ||
         st[i] === 'e' || st[i]=== 'E' ||
         st[i] === 'i' || st[i]=== 'I' ||
         st[i] === 'o' || st[i]=== 'O' ||
         st[i] === 'u' || st[i]=== 'U'){
            st.splice(i , 1)
            i--
          }
    }
    return st.join('');
  }
