//=========================
//CW: Disemvowel Trolls
//=========================

// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

export class Kata {
    static disemvowel(str: string): string {
      
    let tempStr = str;
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
      
      for(let i=0;i<tempStr.length;i++) {
      if(vowels.includes(tempStr[i])) {
      str = str.replace(tempStr[i], '');
    }
    }
         
  return str
    }
  }
  
  //ALT
  
//   export class Kata {
//     static disemvowel(str: string) {
//       var vowels: string = 'AEIOUaeiou';
//       return str.split('').filter(v => !vowels.includes(v)).join('')
//     }
//   }